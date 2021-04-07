import { Pokemon } from './pokemon';

export interface AbilityWrapper {
  ability: Ability;
}

export interface Ability {
  name: string;
  url: string;
}

export interface AbilityDetails {
  name: string;
  pokemon: AbilityPokemonWrapper[];
}

export interface AbilityPokemonWrapper {
  pokemon: Pokemon;
}
