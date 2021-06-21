export enum CompanyTypes {
  dorAlon = 'DorAlon',
  osherAd = 'OsherAd',
  colboHaziHinam = 'ColBoHaziHinam',
  superDash = 'SuperDash',
  Yohananof = 'SupershukYohananof',
  keshetTaamim = 'KeshetTaamim',
  ramiLevi = 'RamiLeviShivukShikma',
  victory = 'Victory',
  machsaniHashuk = 'MachsaneiHaShuk',
  machsaniLahav = 'MachsaneiLahav',
  yeinotBitan = 'YeinotBitan',
  edenTevaMarket = 'EdenTevaMarket',
  shufersal = 'Shufersal',
  zolVeBegadol = 'ZolVeBegadol',
  coop = 'Coop',
  mega = 'Mega',
}

export const SCRAPERS = {
  [CompanyTypes.osherAd]: {
    name: 'Osher Ad',
    loginFields: { userName: 'osherad', password: '' },
    type: 'cerberus',
  },
};
