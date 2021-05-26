export enum storeApiProviders {
  'NIBIT' = 'nibit',
  'PRIVATE' = 'private',
  'CERBERUS' = 'cerberus',
}

export interface ScaperOptions {
  scraperName: string;
  scraperType: storeApiProviders;
}
export enum ScraperErrorTypes {
  InvalidPassword = 'INVALID_PASSWORD',
  ChangePassword = 'CHANGE_PASSWORD',
  Timeout = 'TIMEOUT',
  AccountBlocked = 'ACCOUNT_BLOCKED',
  Generic = 'GENERIC',
  General = 'GENERAL_ERROR',
}

export interface ScaperLoginResult {
  success: boolean;
  errorType?: ScraperErrorTypes;
  errorMessage?: string; // only on success=false
}
export class Scraper {
  constructor(public options: ScaperOptions) {}

  async login(
    _credentials: Record<string, string>,
  ): Promise<ScaperLoginResult> {
    throw new Error(`login() is not created in ${this.options.scraperName}`);
  }
}
