import { HttpService, Injectable } from '@nestjs/common';
import { SCRAPERS } from 'src/core/definitions';
import createScraper from 'src/core/scraper/factory';
import { parseString } from 'xml2js';
import { writeFile } from 'fs';
@Injectable()
export class ScraperService {
  constructor(private httpService: HttpService) {}
  async scrape() {
    for (let scraper of SCRAPERS) {
      let s = createScraper({
        name: scraper.name,
        type: scraper.type,
        credentials: {
          data: `username=${scraper.loginFields.userName}&password=${scraper.loginFields.password}&Submit=Sign+in`,
        },
      });

      s.fetchFiles().then(() => {
        for (let file of s.getList()) {
          // handle store list
          if (file.name.match(/^.*\.xml$/)) {
            s.getFile(file.name).then(d => {
              console.log('f :>> ', decodeURIComponent(d.data.substr(2)));
              parseString(decodeURIComponent(d.data.substr(2)), function(
                err,
                result,
              ) {
                console.dir(result);
                console.log(err);
              });
            });
          }
        }
      });

      return;
    }
  }
}
