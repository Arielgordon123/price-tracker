import { HttpModule, Module } from '@nestjs/common';
import { ScraperService } from './scraper.service';
import { ScraperController } from './scraper.controller';
import { StoresModule } from 'src/stores/stores.module';

@Module({
  imports: [HttpModule, StoresModule],
  providers: [ScraperService],
  controllers: [ScraperController],
})
export class ScraperModule {}
