import { ScaperLoginResult, Scraper } from './scraper';

const BASE_URL = 'https://url.publishedprices.co.il/login';
export class Cerberus extends Scraper {
  async login(
    _credentials: Record<string, string>,
  ): Promise<ScaperLoginResult> {
    return fetch(`${BASE_URL}/login`).then((res: Response) => {
      console.log(res);
      return res.ok == true ? { success: true } : { success: false };
    });
  }
}
