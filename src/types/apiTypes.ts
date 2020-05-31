export interface Currency {
  name: string;
  [key: string]: string;
}

export interface Translations {
  [key: string]: string;
}

export interface RegionalBlock {
  name: string;
  [key: string]: string | string[];
}

export interface Languages {
  name: string;
  [key: string]: string;
}

export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: Currency[];
  languages: Languages[];
  translations: Translations;
  flag: string;
  regionalBlocs: RegionalBlock[];
  cioc: string;
}