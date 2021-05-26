import { ObjectID } from 'mongodb';
import { storeApiProviders } from 'src/scraper/scraper';

export interface IStore {
  id?: ObjectID;
  ChainId?: string;
  ChainName?: string;
  XmlDocVersion?: string;
  LastUpdateDate?: string;
  LastUpdateTime?: string;
  LastUpdateDateTime?: Date;
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
  addressFull?: string;
  chainName_en?: string;
  provider: storeApiProviders;
}
