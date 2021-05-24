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

@Entity()
export class storeEntity extends BaseEntity {
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
