import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './pokemons.component';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ListPokemonComponent } from '../list-pokemon/list-pokemon.component';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { FilterPokemonComponent } from '../filter-pokemon/filter-pokemon.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardPokemonComponent } from '../card-pokemon/card-pokemon.component';

@NgModule({
  declarations: [
    PokemonsComponent,
    ListPokemonComponent,
    FilterPokemonComponent,
    CardPokemonComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    PokemonService,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 1500}}
  ]
})
export class PokemonsModule { }
