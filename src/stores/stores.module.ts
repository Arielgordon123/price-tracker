import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { storeEntity } from './store.entity';
import { StoreService } from './store.service';

@Module({
  imports: [TypeOrmModule.forFeature([storeEntity])],
  providers: [StoreService],
  exports: [StoreService],
})
export class StoresModule {}
