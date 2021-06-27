import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoresModule } from './stores/stores.module';
import { Connection } from 'typeorm';
import { ScraperModule } from './scraper/scraper.module';
import { StoreFilesModule } from './store-files/store-files.module';

@Module({
  imports: [TypeOrmModule.forRoot(), StoresModule, ScraperModule, StoreFilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
