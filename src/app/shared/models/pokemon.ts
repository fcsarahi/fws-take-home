import { AbilityWrapper } from './abilities';

export interface PokemonWrapper {
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetail {
  abilities: AbilityWrapper[];
}

export interface PokemonRow {
  name: string;
  abilities: string;
  forms: string;
  species: string;
  types: string;
}
