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
  pokemons: Pokemon[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemons = (<PokemonWrapper>(this.activatedRoute.snapshot.data['pokemons'])).results;
  }

}
