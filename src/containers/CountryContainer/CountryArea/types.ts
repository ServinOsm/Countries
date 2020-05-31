export interface MainInfo {
  [key: string]: string | number;
}

export interface SecondaryInfo {
  [key: string]: {
    name: string
  }[];
}

export interface AdditionalInfo {
  [key: string]: string[];
}