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
  yeinotBitan = 'YeinotBitan',
  edenTevaMarket = 'EdenTevaMarket',
  shufersal = 'Shufersal',
  zolVeBegadol = 'ZolVeBegadol',
  coop = 'Coop',
  mega = 'Mega',
  TivTaam = 'TivTaam',
  HaziHinam = 'HaziHinam',
  SalachD = 'SalachDabach',
  StopMarket = 'StopMarket',
  politzer = 'politzer',
  freshmarket = 'freshmarket',
}

export const SCRAPERS = [
  {
    name: CompanyTypes.osherAd,
    loginFields: { userName: 'osherad', password: '' },
    type: 'cerberus',
  },
  {
    name: CompanyTypes.dorAlon,
    loginFields: { userName: 'doralon', password: '' },
    type: 'cerberus',
  },
  {
    name: CompanyTypes.TivTaam,
    loginFields: { userName: 'TivTaam', password: '' },
    type: 'cerberus',
  },
  {
    name: CompanyTypes.HaziHinam,
    loginFields: { userName: 'HaziHinam', password: '' },
    type: 'cerberus',
  },
  {
    name: CompanyTypes.Yohananof,
    loginFields: { userName: 'yohananof', password: '' },
    type: 'cerberus',
  },
  {
    name: CompanyTypes.SalachD,
    loginFields: { userName: 'SalachD', password: '12345' },
    type: 'cerberus',
  },
  {
    name: CompanyTypes.StopMarket,
    loginFields: { userName: 'Stop_Market', password: '' },
    type: 'cerberus',
  },
  {
    name: CompanyTypes.politzer,
    loginFields: { userName: 'politzer', password: '' },
    type: 'cerberus',
  },
  {
    name: CompanyTypes.freshmarket,
    loginFields: { userName: 'freshmarket', password: '' },
    type: 'cerberus',
  },
  {
    name: CompanyTypes.keshetTaamim,
    loginFields: { userName: 'Keshet', password: '' },
    type: 'cerberus',
  },
  {
    name: CompanyTypes.ramiLevi,
    loginFields: { userName: 'RamiLevi', password: '' },
    type: 'cerberus',
  },
];
