import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon, PokemonRow } from 'src/app/shared/models/pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  @Input()
  set pokemons(pokemons: Pokemon[]) {
    if (pokemons && pokemons.length > 0) {
      this.getPokemonDetail(pokemons);
    }
  }

  pokemonRowData: PokemonRow[] = [];
  displayedColumns = ['name', 'abilities', 'forms', 'species', 'types']
  dataSource: MatTableDataSource<PokemonRow> = new MatTableDataSource<PokemonRow>([]);

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PokemonRow>([]);
  }

  private getPokemonDetail(pokemons: Pokemon[]) {
    pokemons.map(pokemon => {
      this.pokemonService.getPokemonDetailByUrl(pokemon.url).subscribe(
        details => {
          const detail: PokemonRow = {
            name: pokemon.name,
            abilities: 'abi',
            forms: 'form',
            species: 'spe',
            types: 'typ'
          }

          this.pokemonRowData.push(detail);
          this.dataSource = new MatTableDataSource<PokemonRow>(this.pokemonRowData);
        },
        err => {

        }
      )
    });
  }

  private bindPokemonsGrid(pokemons: Pokemon[]) {

  }

}
