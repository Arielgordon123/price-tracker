import { HttpService, Injectable } from '@nestjs/common';
import createScraper from 'src/core/scraper/factory';
@Injectable()
export class ScraperService {
  constructor(private httpService: HttpService) {}
  scrape() {
    this.httpService
      .post(
        'https://url.publishedprices.co.il/login/user',
        'username=osherad&password=&Submit=Sign+in',
      )
      .subscribe(res => {
        console.log('res :>> ', res.headers['set-cookie']);
      });

    // createScraper({
    //   scraperName: 'OsherAd',
    // }).login({
    //   name: 'osherad',
    // });
  }
}
