import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { MongoRepository } from 'typeorm';
import { storeEntity } from './store.entity';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(storeEntity)
    private readonly storesepository: MongoRepository<storeEntity>,
  ) {}
  create(): Observable<storeEntity> {
    return from(
      this.storesepository.save({
        ChainId: '22222',
      }),
    );
  }
}
