import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoresModule } from './stores/stores.module';
import { Connection } from 'typeorm';
import { ScraperModule } from './scraper/scraper.module';

@Module({
  imports: [TypeOrmModule.forRoot(), StoresModule, ScraperModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
