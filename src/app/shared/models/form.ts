import { Pokemon } from './pokemon';

export interface Form {
  name: string;
  url: string;
}

export interface FormDetails {
  name: string;
  pokemon: Pokemon;
}
