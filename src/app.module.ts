import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ConfigModule } from '@nestjs/config/dist/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { storeEntity } from './stores/store.entity';
import { StoresModule } from './stores/stores.module';

@Module({
  imports: [
    // ConfigModule.forRoot({ load: [certConfig], isGlobal: true }),
    TypeOrmModule.forRoot(),

    StoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
