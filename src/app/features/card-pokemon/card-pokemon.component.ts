import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonDetail } from 'src/app/shared/models/pokemon';
import { SpecieDetail } from 'src/app/shared/models/specie';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.scss']
})
export class CardPokemonComponent implements OnInit {

  pokemonDetail: PokemonDetail;
  specieDetail: SpecieDetail;
  pokemonUrlImage: string;
  abilities: string;

  constructor(private activatedRoute: ActivatedRoute,
              private pokemonService: PokemonService,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
    this.pokemonDetail = (<PokemonDetail>(this.activatedRoute.snapshot.data['pokemonDetail']));
    this.pokemonUrlImage = `https://pokeres.bastionbot.org/images/pokemon/${this.pokemonDetail.id}.png`;
    this.abilities = this.pokemonDetail.abilities.map(a => a.ability.name).join(', ');
    this.pokemonService.getPokemonDetailBySpecie(this.pokemonDetail.species.url)
      .subscribe(
        specieDetail => {
          this.specieDetail = specieDetail;
        },
        err => {
          this.snackBar.open('Error getting data');
        }
      );
  }

  backTo() {
    this.router.navigate(['/pokemons']);
  }

}
