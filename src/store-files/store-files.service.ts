import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MongoRepository } from 'typeorm';
import { StoreFileDto } from './store-file.DTO';
import { storeFileEntity } from './store-file.entity';

@Injectable()
export class StoreFilesService {
  constructor(
    @InjectRepository(storeFileEntity)
    private readonly storefileRepository: MongoRepository<storeFileEntity>,
  ) {}

  checkIfFileProcessed(storeName: string, fileName: string) {
    return from(
      this.storefileRepository.findOne({
        storeName,
        fileName,
      }),
    ).pipe(
      map(res => {
        if (!res) {
          return {
            exsists: false,
            processed: false,
          };
        } else {
          if (res.processed) {
            return {
              exsists: true,
              processed: true,
            };
          } else {
            return {
              exsists: true,
              processed: false,
            };
          }
        }
      }),
    );
  }
  updateFileProcess(storeName: string, fileName: string, status: boolean) {
    return from(
      this.storefileRepository.updateOne(
        {
          storeName,
          fileName,
        },
        { processed: status },
      ),
    );
  }
  saveFileProcess(file: StoreFileDto): Observable<storeFileEntity> {
    return from(this.storefileRepository.save(file));
  }
}
