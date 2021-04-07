import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, PokemonWrapper } from 'src/app/shared/models/pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  
  title = 'Pokemons App Take Home';
  pokemons: PokemonWrapper;
  private firstPokemonBatch: PokemonWrapper;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemons = (<PokemonWrapper>(this.activatedRoute.snapshot.data['pokemons']));
    this.firstPokemonBatch = Object.assign({}, this.pokemons);
  }

  setPokemonFiltered(pokemons: PokemonWrapper){
    pokemons.isFiltered = true;
    this.pokemons = pokemons;
  }

  clearFilters() {
    this.pokemons = Object.assign({}, this.firstPokemonBatch);
  }

}
