import { HttpModule, Module } from '@nestjs/common';
import { ScraperService } from './scraper.service';
import { ScraperController } from './scraper.controller';
import { StoresModule } from 'src/stores/stores.module';
import { StoreFilesModule } from 'src/store-files/store-files.module';

@Module({
  imports: [HttpModule, StoresModule, StoreFilesModule],
  providers: [ScraperService],
  controllers: [ScraperController],
})
export class ScraperModule {}
