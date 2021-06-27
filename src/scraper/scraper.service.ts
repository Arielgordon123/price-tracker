import { HttpService, Inject, Injectable } from '@nestjs/common';
import { SCRAPERS } from 'src/core/definitions';
import createScraper from 'src/core/scraper/factory';
import { StoreService } from 'src/stores/store.service';
import { parseString } from 'xml2js';
const fs = require('fs');

@Injectable()
export class ScraperService {
  constructor(
    private httpService: HttpService,
    private storeService: StoreService,
  ) {}
  async scrape() {
    for (let scraper of SCRAPERS) {
      let s = createScraper({
        name: scraper.name,
        type: scraper.type,
        credentials: {
          data: `username=${scraper.loginFields.userName}&password=${scraper.loginFields.password}&Submit=Sign+in`,
        },
      });
      this.storeService.getStore(scraper.name).subscribe(s => {
        console.log("found ",s)
      })
      this.storeService.create(scraper.name);
      if (!fs.existsSync(`./../test/${scraper.name}`)) {
        fs.mkdirSync(`./../test/${scraper.name}`);
      }
      // s.fetchFiles().then(() => {
        // for (let file of s.getList()) {
      //     // handle store list
      //     // if (file.name.match(/^.*\.xml$/)) {
      //       s.getFile(file.name, `./../test/${scraper.name}/${file.name}`).then(
      //         d => {
      //           console.log('f :>> ', d);
      //         },
      //       );
      //     // }
      //   }
      // });
    }
  }
}
