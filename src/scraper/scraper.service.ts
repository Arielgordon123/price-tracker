import { HttpService, Inject, Injectable } from '@nestjs/common';
import { stat } from 'fs';
import { SCRAPERS } from 'src/core/definitions';
import createScraper from 'src/core/scraper/factory';
import { StoreFilesService } from 'src/store-files/store-files.service';
import { StoreService } from 'src/stores/store.service';
import { parseString } from 'xml2js';
const {gzip, ungzip} = require('node-gzip');
const fs = require('fs');

@Injectable()
export class ScraperService {
  constructor(
    private httpService: HttpService,
    private storeService: StoreService,
    private storeFileService: StoreFilesService,
  ) {}
  async scrape(storeName:string[], numOfFiles:string) {
    
    SCRAPERS.filter((scraper)=>{
      return  storeName.includes(scraper.name)
    }).forEach(scraper=>{
      let fileDownloaded = 0;
      let s = createScraper({
            name: scraper.name,
            type: scraper.type,
            credentials: {
              data: `username=${scraper.loginFields.userName}&password=${scraper.loginFields.password}&Submit=Sign+in`,
            },
          });
          this.storeService.getStore(scraper.name).subscribe(store => {
            if (!store) {
              this.storeService.createStore(scraper.name);
            }
          });
    
          if (!fs.existsSync(`./../test/${scraper.name}`)) {
            fs.mkdirSync(`./../test/${scraper.name}`);
          }
          s.fetchFiles()
          // .then(() => {
          //   let list = s.getList();
          //   let _numOfFiles:number;
          //   if(numOfFiles == '*')
          //     _numOfFiles = list.length;
          //   else{
          //     _numOfFiles = parseInt(numOfFiles)
          //   }
          //   for (let i=0; i<list.length && fileDownloaded<_numOfFiles; i++  ) {
          //     let file = list[i];
          //     fileDownloaded++;
          //     this.storeFileService
          //       .checkIfFileProcessed(scraper.name, file.name)
          //       .subscribe(status => {
                  
          //         if(!status.exsists){
                   
          //           console.log('status :>> ', status);
          //           console.log('file.name :>> ', file.name);
          //           this.storeFileService.saveFileProcess({
          //               storeName: scraper.name,
          //               fileName: file.name,
          //               processed: false,
          //             });
          //             // s.getFile(file.name, `./../test/${scraper.name}/${file.name}`).then(
          //             //     done => {
          //             //       console.log('file :>> ', file.name);
                          
          //             //     },
          //             //   );
    
          //         }
          //         else if  (status.exsists && !status.processed) {
          //           console.log('status :>> ', status);
          //         }
          //       });
    
    
          //     // handle store list
          //     // if (file.name.match(/^.*\.xml$/)) {
          //     // s.getFile(file.name, `./../test/${scraper.name}/${file.name}`).then(
          //     //   d => {
          //     //     console.log('f :>> ', d);
          //     //   },
          //     // );
          //     // }
          //   }
          // });
    })

    // for (let scraper of SCRAPERS) {
    //   
    // }
  }
}
