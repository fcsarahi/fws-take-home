import { Ability, AbilityWrapper } from './ability';
import { Form } from './form';
import { Specie } from './specie';
import { Type, TypeWrapper } from './type';

export class PokemonWrapper {
  next: string;
  results: Pokemon[];
  isFiltered: boolean;
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetail {
  id: number
  name: string;
  abilities: AbilityWrapper[];
  forms: Form[];
  species: Specie;
  types: TypeWrapper[];
}

export interface PokemonRow {
  id: number;
  name: string;
  abilities: Ability[];
  forms: Form[];
  species: Specie;
  types: Type[];
}
