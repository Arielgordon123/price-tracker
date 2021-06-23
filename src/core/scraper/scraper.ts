export enum storeApiProviders {
  'NIBIT' = 'nibit',
  'PRIVATE' = 'private',
  'CERBERUS' = 'cerberus',
}

export interface ScaperOptions {
  name: string;
  type: string;
  credentials: Record<string, string>;
  cookie?: string;
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
  cookie?: string | Array<string>;
  errorType?: ScraperErrorTypes;
  errorMessage?: string; // only on success=false
}
export class Scraper {
  constructor(public options: ScaperOptions) {}

  login(): Promise<void> {
    throw new Error(`login() is not created in ${this.options.name}`);
  }
}
