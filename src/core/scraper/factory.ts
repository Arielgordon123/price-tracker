import { CompanyTypes } from '../definitions';
import { Cerberus } from './cerberus';
import { ScaperOptions } from './scraper';

export default function createScraper(options: ScaperOptions) {

  switch (options.scraperName) {
    case CompanyTypes.osherAd:
      return new Cerberus(options);

    default:
      throw new Error(`unknown company id ${options.scraperName}`);
  }
}
