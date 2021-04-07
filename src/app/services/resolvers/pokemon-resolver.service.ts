import { Injectable } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonResolverService {

  constructor(private pokemonService: PokemonService) { }

  resolve() {
    return this.pokemonService.getPokemonBatch(20, 0);
  }
}
