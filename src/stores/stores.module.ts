import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { storeEntity } from './store.entity';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';

@Module({
  imports: [TypeOrmModule.forFeature([storeEntity])],
  providers: [StoreService],
  exports: [StoreService],
  controllers: [StoreController],
})
export class StoresModule {}
