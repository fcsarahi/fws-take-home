import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetail, PokemonWrapper } from '../shared/models/pokemon';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonBatch(limit: number, offset: number): Observable<PokemonWrapper> {
    return this.http.get<PokemonWrapper>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }

  getPokemonDetailByUrl(url: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(url);
  }
}
