import { AxiosResponse } from 'axios';
import { createWriteStream } from 'fs';
import { promisify } from 'util';
import * as stream from 'stream';
import { ScaperLoginResult, ScaperOptions, Scraper } from './scraper';
const axios = require('axios');
const BASE_URL = 'https://url.publishedprices.co.il';
const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  maxRedirects: 0,
  headers: {
    'Content-Type': 'application/json',
    'user-agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
  },
});

export interface cerberusFileResponse {
  DT_RowId: string;
  fname: string;
  ftime: string;
  icon: string;
  name: string;
  size: number;
  time: string;
  type: string;
  value: string;
}

export class Cerberus extends Scraper {
  private files: cerberusFileResponse[];
  constructor(public options: ScaperOptions) {
    super(options);
  }

  login(): Promise<void> {
    return instance
      .post(`login/user`, this.options.credentials.data)
      .then((res: AxiosResponse) => {
        this.options.cookie = res.headers['set-cookie'][0];
        // return res.status == 200
        //   ? { success: true, cookie: res.headers['set-cookie'] }
        //   : { success: false };
      })
      .catch(e => {
        // handle at catch  since the response is 302 code
        this.options.cookie = e.response.headers['set-cookie'][0];
        // return {
        //   success: true,
        //   cookie: e.response.headers['set-cookie'],
        // };
      });
  }

  fetchFiles() {
    return this.login().then(res => {
      return instance
        .post(
          `/file/ajax_dir`,
          'sEcho=1&iColumns=5&sColumns=%2C%2C%2C%2C&iDisplayStart=0&iDisplayLength=100000&mDataProp_0=fname&sSearch_0=&bRegex_0=false&bSearchable_0=true&bSortable_0=true&mDataProp_1=type&sSearch_1=&bRegex_1=false&bSearchable_1=true&bSortable_1=false&mDataProp_2=size&sSearch_2=&bRegex_2=false&bSearchable_2=true&bSortable_2=true&mDataProp_3=ftime&sSearch_3=&bRegex_3=false&bSearchable_3=true&bSortable_3=true&mDataProp_4=&sSearch_4=&bRegex_4=false&bSearchable_4=true&bSortable_4=false&sSearch=&bRegex=false&iSortingCols=0&cd=%2F',
          {
            headers: {
              Referer: 'https://url.publishedprices.co.il/file',
              Cookie: this.options.cookie,
            },
          },
        )
        .then(res => {
          console.log(
            `scraper ${this.options.name} got ${res.data.iTotalRecords} results`,
          );
          this.files = res.data.aaData;
        })
        .catch(e => {
          console.log('files: >>>', e);
        });
    });
  }
  finished = promisify(stream.finished);
  getFile(fileName: string, outputLocationPath: string) {
    const writer = createWriteStream(outputLocationPath);
    return instance
      .get(`/file/d/${fileName}`, {
        headers: {
          Accept: 'application/xml',
          'Content-Type': 'text/xml',
          'Accept-Language': `he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7`,
          Cookie: this.options.cookie,
        },
        params: {
          m: 0,
        },
        responseType: 'stream',
        decompress: false,
      })
      .then(async response => {
        response.data.pipe(writer);
        return this.finished(writer); //this is a Promise
      });
  }

  getList(): cerberusFileResponse[] {
    return this.files;
  }
}
