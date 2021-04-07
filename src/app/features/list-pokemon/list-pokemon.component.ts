import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon, PokemonRow, PokemonWrapper } from 'src/app/shared/models/pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  @Input()
  set pokemonWrapper(pokemonWrapper: PokemonWrapper) {
    if (pokemonWrapper && pokemonWrapper.results?.length > 0) {
      this._pokemonWrapper = pokemonWrapper;
      this.getPokemonDetails(pokemonWrapper.results);
    }
  }
  get pokemonWrapper(): PokemonWrapper {
    return this._pokemonWrapper;
  }
  private _pokemonWrapper: PokemonWrapper;

  pokemonRowData: PokemonRow[] = [];
  displayedColumns = ['name', 'abilities', 'forms', 'species', 'types']
  dataSource: MatTableDataSource<PokemonRow>;
  start: number = 0;
  limit: number = 15;
  end: number = this.limit + this.start;
  selectedRowIndex = -1;

  constructor(private pokemonService: PokemonService,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PokemonRow>([]);
  }

  onScroll(event: any) {
    const tableViewHeight = event.target.offsetHeight;
    const tableScrollHeight = event.target.scrollHeight;
    const scrollLocation = event.target.scrollTop;
    
    const buffer = 500;
    const limit = tableScrollHeight - tableViewHeight - buffer;    
    if (scrollLocation > limit) {
      if(!this.pokemonWrapper.isFiltered){
        this.getPokemonBatch(this.pokemonWrapper.next);
      }
      this.updateIndex();
    }
  }

  updateIndex() {
    this.start = this.end;
    this.end = this.limit + this.start;
  }

  showPokemonDetail(pokemon: Pokemon) {
    this.router.navigate(['/pokemons/detail', pokemon.name]);
  }

  private getPokemonDetails(pokemons: Pokemon[]) {
    const $detailsCalls = pokemons.map(pokemon => 
      this.pokemonService.getPokemonDetailByUrl(pokemon.url));

    forkJoin($detailsCalls).subscribe(
        details => {

          this.pokemonRowData = details.map(detail => ({
            id: detail.id,
            name: detail.name,
            abilities: detail.abilities.map(a => a.ability),
            forms: detail.forms,
            species: detail.species,
            types: detail.types.map(t => t.type)
          }));

          this.pokemonRowData.sort((a,b) => a.id - b.id);
          this.dataSource = new MatTableDataSource<PokemonRow>(this.pokemonRowData);
        },
        err => {
          this.snackBar.open('Error getting data');
        }
      );
  }

  private getPokemonBatch(url: string) {
    this.pokemonService.getPokemonBatchByUrl(url).subscribe(
      pokemonWrapper => {
        pokemonWrapper.results.push(...this.pokemonWrapper.results);
        this.pokemonWrapper = pokemonWrapper;
      },
      err => {
        this.snackBar.open('Error getting data');
      }
    )
  }

}
