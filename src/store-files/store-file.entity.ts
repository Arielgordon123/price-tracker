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

import { storeApiProviders } from 'src/core/scraper/scraper';

@Entity('store-file')
export class storeFileEntity extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  @Index({ unique: true })
  fileName: string;

  @Column()
  storeName: string;
  
  @Column()
  type: string;

  @Column()
  time: string;

  @Column({ default: false })
  processed: boolean;
}
