export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface NativeName {
  common: string;
  official: string;
}

export interface NativeNameList {
  [key: string]: NativeName;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: NativeNameList;
}

export interface Currencies {
  [key: string]: {
    name: string;
    symbol?: string;
  };
}

export interface Languages {
  [key: string]: string;
}

/**
 * Type for the country list view (Summary)
 * Fields are filtered via: ?fields=name,flags,population,region,capital
 */
export interface CountrySummary {
  flags: Flags;
  name: Name;
  capital?: string[];
  region: string;
  population: number;
}

/**
 * Complete country data for the details view
 */
export interface CountryDetail extends CountrySummary {
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: string;
  unMember: boolean;
  idd: {
    root?: string;
    suffixes?: string[];
  };
  altSpellings: string[];
  subregion?: string;
  languages?: Languages;
  currencies?: Currencies;
  borders?: string[];
  area: number;
  demonyms?: {
    [key: string]: {
      f: string;
      m: string;
    };
  };
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  gini?: {
    [year: string]: number;
  };
  fifa?: string;
  car: {
    signs?: string[];
    side: "left" | "right";
  };
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: {
    png?: string;
    svg?: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng?: [number, number];
  };
  postalCode?: {
    format?: string;
    regex?: string;
  };
}