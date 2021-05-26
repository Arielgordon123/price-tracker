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
  @Column()
  subChainId?: string;
  @Column()
  storeId?: string;
  @Column()
  bikoretNo?: string;
  @Column()
  storeType?: string;
  @Column()
  chainName?: string;
  @Column()
  subChainname?: string;
  @Column()
  storeName?: string;
  @Column()
  address?: string;
  @Column()
  city?: string;
  @Column()
  zipCode?: string | number;
  @Column()
  latitude?: number;
  @Column()
  longitude?: number;

  @Column()
  chainName_en?: string;
  @Column()
  provider: storeApiProviders;
}
