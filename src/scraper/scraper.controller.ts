import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { ScraperService } from './scraper.service';

@Controller('scraper')
export class ScraperController {
  constructor(private scraperService: ScraperService) {}
  
  @Get()
  login(@Query('storeName') storeName:string[], @Query('numOfFiles') numOfFiles: string) {
    

    
    return this.scraperService.scrape(storeName, numOfFiles);
  }
}
