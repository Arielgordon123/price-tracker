import { ScaperLoginResult, Scraper } from './scraper';
const axios = require('axios');

const BASE_URL = 'https://url.publishedprices.co.il';
const instance = axios.create({
  baseURL: BASE_URL,
});
export class Cerberus extends Scraper {
  login(
    _credentials: Record<string, string>,
  ): Promise<ScaperLoginResult> {
    return instance.post(`${BASE_URL}/login`, _credentials.data).then((res: Response) => {
      return res.status == 200 ? { success: true, cookie: res.headers['set-cookie'] } : { success: false };
    });
  }

  getFiles(_credentials: Record<string, string>,) {
    return this.login(_credentials).then(res => {
      console.log('cookie', res.cookie[0])
      return instance.post(`${BASE_URL}/file/ajax_dir`, {
        'Referer': 'https://url.publishedprices.co.il/file',
        headers: {
          'set-cookie': res.cookie[0]
        }
      })
    })
  }
}
