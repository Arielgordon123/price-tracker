import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MongoRepository } from 'typeorm';
import { storeEntity } from './store.entity';

export class StoreService {
  constructor(
    @InjectRepository(storeEntity)
    private readonly storesRepository: MongoRepository<storeEntity>,
  ) {}

  getStore(name: string) {
    return from(
      this.storesRepository.findOne({
        chainName: name,
      }),
    ).pipe(
      map((found: storeEntity) => {
        if (!found) {
          return;
        }
        // return all the details only to the owner of the place
        return found;
      }),
    );
  }

  createStore(name: string): Observable<storeEntity> {
    return from(
      this.storesRepository.save({
        ChainId: '22222',
        chainName: name,
      }),
    );
  }
}
