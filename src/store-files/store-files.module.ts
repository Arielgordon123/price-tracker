import { Module } from '@nestjs/common';
import { StoreFilesService } from './store-files.service';

@Module({
  providers: [StoreFilesService]
})
export class StoreFilesModule {}
