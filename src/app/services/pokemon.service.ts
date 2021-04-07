import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbilityDetails } from '../shared/models/ability';
import { FormDetails } from '../shared/models/form';
import { PokemonDetail, PokemonWrapper } from '../shared/models/pokemon';
import { SpecieDetail } from '../shared/models/specie';
import { TypeDetails } from '../shared/models/type';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) { }

  getFirstPokemonBatch(): Observable<PokemonWrapper> {
    return this.http.get<PokemonWrapper>('https://pokeapi.co/api/v2/pokemon');
  }

  getPokemonBatchByUrl(url: string): Observable<PokemonWrapper> {
    return this.http.get<PokemonWrapper>(url);
  }

  getPokemonDetailByUrl(url: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(url);
  }

  getPokemonDetailByName(name: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>('https://pokeapi.co/api/v2/pokemon/' + name);
  }

  getPokemonsByAbility(ability: string): Observable<AbilityDetails> {
    return this.http.get<AbilityDetails>('https://pokeapi.co/api/v2/ability/' + ability);
  }

  getPokemonsByForm(form: string): Observable<FormDetails> {
    return this.http.get<FormDetails>('https://pokeapi.co/api/v2/pokemon-form/' + form);
  }

  getPokemonsByType(type: string): Observable<TypeDetails> {
    return this.http.get<TypeDetails>('https://pokeapi.co/api/v2/type/' + type);
  }

  getPokemonDetailBySpecie(url: string): Observable<SpecieDetail> {
    return this.http.get<SpecieDetail>(url);
  }
}
