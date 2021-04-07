import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PokemonsComponent } from './pokemons.component';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ListPokemonComponent } from '../list-pokemon/list-pokemon.component';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    PokemonsComponent,
    ListPokemonComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatGridListModule
  ],
  providers: [PokemonService]
})
export class PokemonsModule { }
