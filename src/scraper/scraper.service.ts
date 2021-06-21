import { HttpService, Injectable } from '@nestjs/common';
import createScraper from 'src/core/scraper/factory';
@Injectable()
export class ScraperService {
  constructor(private httpService: HttpService) {}
  async scrape() {
    // this.httpService
    //   .post(
    //     'https://url.publishedprices.co.il/login/user',
    //     'username=osherad&password=&Submit=Sign+in',
    //   )
    //   .subscribe(res => {
    //     console.log('res :>> ', res.headers['set-cookie']);
    //   });

    createScraper({
      scraperName: 'OsherAd',
    })
      .getFiles({
        data: 'username=RamiLevi&password=&Submit=Sign+in',
      })
      .then(files => {
        console.log('get files: ', files.data.aaData[0]);
      });
  }
}
