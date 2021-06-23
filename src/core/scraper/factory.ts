import { CompanyTypes } from '../definitions';
import { Cerberus } from './cerberus';
import { ScaperOptions, storeApiProviders } from './scraper';

export default function createScraper(options: ScaperOptions) {
  switch (options.type) {
    case storeApiProviders.CERBERUS:
      return new Cerberus(options);

    default:
      throw new Error(`unknown company id ${options.name}`);
  }
}
