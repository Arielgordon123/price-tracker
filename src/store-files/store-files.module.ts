import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { storeFileEntity } from './store-file.entity';
import { StoreFilesService } from './store-files.service';

@Module({
  imports: [TypeOrmModule.forFeature([storeFileEntity])],
  providers: [StoreFilesService],
  exports: [StoreFilesService]
})
export class StoreFilesModule {}
