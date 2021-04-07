import { Pokemon } from './pokemon';

export interface TypeWrapper {
  type: Type;
}

export interface Type {
  name: string;
  url: string;
}

export interface TypeDetails {
  name: string;
  pokemon: TypePokemonWrapper[];
}

export interface TypePokemonWrapper {
  pokemon: Pokemon;
}
