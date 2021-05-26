import { ScaperLoginResult, Scraper } from './scraper';

export class Cerberus extends Scraper {
  async login(
    _credentials: Record<string, string>,
  ): Promise<ScaperLoginResult> {
      
  }
}
