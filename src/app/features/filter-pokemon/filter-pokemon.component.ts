import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonWrapper } from 'src/app/shared/models/pokemon';

@Component({
  selector: 'app-filter-pokemon',
  templateUrl: './filter-pokemon.component.html',
  styleUrls: ['./filter-pokemon.component.scss']
})
export class FilterPokemonComponent implements OnInit {

  @Output() pokemonFiltered = new EventEmitter<PokemonWrapper>();
  @Output() clearFiltered = new EventEmitter<boolean>();

  filterForm = this.fb.group({
    attribute: ['', Validators.required],
    name: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, 
              private pokemonService: PokemonService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit() {
  let pokemonWrapper: PokemonWrapper = new PokemonWrapper();
    switch (this.filterForm.controls.attribute.value) {
      case '1':
        this.pokemonService.getPokemonsByAbility(this.filterForm.controls.name.value)
          .subscribe(
            abilityDetails => {
              pokemonWrapper.results = abilityDetails.pokemon.map(pokemon => pokemon.pokemon);
              this.pokemonFiltered.emit(pokemonWrapper);
            },
            err => {
              this.snackBar.open('Error getting data');
            }
          );
      break;
      case '2':
        this.pokemonService.getPokemonsByForm(this.filterForm.controls.name.value)
          .subscribe(
            formDetails => {
              pokemonWrapper.results = [formDetails.pokemon];
              this.pokemonFiltered.emit(pokemonWrapper);
            },
            err => {
              this.snackBar.open('Error getting data');
            }
          );
      break;
      case '3': 
        this.pokemonService.getPokemonsByType(this.filterForm.controls.name.value)
          .subscribe(
            typeDetails => {
              pokemonWrapper.results = typeDetails.pokemon.map(pokemon => pokemon.pokemon);
              this.pokemonFiltered.emit(pokemonWrapper);
            },
            err => {
              this.snackBar.open('Error getting data');
            }
          );
      break;
      default:
      break;
    }
  }

  resetFirstBatch() {
    this.clearFiltered.emit();
  }

}
