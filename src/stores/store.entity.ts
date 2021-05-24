import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  Index,
  MongoEntityManager,
  ObjectIdColumn,
} from 'typeorm';
import { ObjectID } from 'mongodb';
import { IStore, storeApiProviders } from './store.interface';

@Entity()
export class storeEntity extends BaseEntity implements IStore {
  subChainId?: string;
  storeId?: string;
  bikoretNo?: string;
  storeType?: string;
  chainName?: string;
  subChainname?: string;
  storeName?: string;
  address?: string;
  city?: string;
  zipCode?: string | number;
  latitude?: number;
  longitude?: number;

  chainName_en?: string;
  provider: storeApiProviders;
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  ChainId: string;

  @Column()
  ChainName: string;

  @Column()
  XmlDocVersion: string;
  @Column()
  LastUpdateDate: string;
  @Column()
  LastUpdateTime: string;
  @Column()
  LastUpdateDateTime: Date;
}
