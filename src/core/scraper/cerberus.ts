import { AxiosResponse } from 'axios';
import { ScaperLoginResult, Scraper } from './scraper';
const axios = require('axios');



const BASE_URL = 'https://url.publishedprices.co.il';
const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  maxRedirects: 0,
  headers: {
    'Content-Type': 'application/json',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36'
  }
});
export class Cerberus extends Scraper {
  login(
    _credentials: Record<string, string>,
  ): Promise<ScaperLoginResult> {
   

    return instance.post(`login/user`, _credentials.data).then((res: AxiosResponse) => {
      console.log(res.request.res.responseUrl)
      return res.status == 200 ? { success: true, cookie: res.headers['set-cookie'] } : { success: false };
    }).catch(e=>{
      return  { success: true, cookie: e.response.headers['set-cookie'] }
    });
  }

  getFiles(_credentials: Record<string, string>,) {
    return this.login(_credentials).then(res => {
      console.log('cookie', res.cookie)
      return instance.post(`/file/ajax_dir`, 'sEcho=1&iColumns=5&sColumns=%2C%2C%2C%2C&iDisplayStart=0&iDisplayLength=100000&mDataProp_0=fname&sSearch_0=&bRegex_0=false&bSearchable_0=true&bSortable_0=true&mDataProp_1=type&sSearch_1=&bRegex_1=false&bSearchable_1=true&bSortable_1=false&mDataProp_2=size&sSearch_2=&bRegex_2=false&bSearchable_2=true&bSortable_2=true&mDataProp_3=ftime&sSearch_3=&bRegex_3=false&bSearchable_3=true&bSortable_3=true&mDataProp_4=&sSearch_4=&bRegex_4=false&bSearchable_4=true&bSortable_4=false&sSearch=&bRegex=false&iSortingCols=0&cd=%2F', {
       
        headers: {
          'Referer': 'https://url.publishedprices.co.il/file',
          'Cookie': res.cookie[0]
        }
      }).catch(e=> {
        console.log('files: >>>', e)
      })
    })
  }
}
