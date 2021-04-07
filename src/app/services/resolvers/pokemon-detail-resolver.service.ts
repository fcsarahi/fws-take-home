import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { PokemonDetail } from 'src/app/shared/models/pokemon';
import { PokemonService } from '../pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailResolverService {

  constructor(private pokemonService: PokemonService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<PokemonDetail> {
    const pokemonName: string = route.params['name'];

    if (pokemonName) {
      return this.pokemonService.getPokemonDetailByName(pokemonName);
    } else {
      return EMPTY;
    }
  }
}
