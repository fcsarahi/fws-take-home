import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPokemonComponent } from './features/card-pokemon/card-pokemon.component';
import { PokemonsComponent } from './features/pokemons/pokemons.component';
import { PokemonDetailResolverService } from './services/resolvers/pokemon-detail-resolver.service';
import { PokemonResolverService } from './services/resolvers/pokemon-resolver.service';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'pokemons', 
    pathMatch: 'full' 
  },
  { 
    path: 'pokemons', 
    component: PokemonsComponent,
    resolve: {
      pokemons: PokemonResolverService
    }
  },
  {
    path: 'pokemons/detail/:name', 
    component: CardPokemonComponent,
    resolve: {
      pokemonDetail: PokemonDetailResolverService
    }
  },
  { 
    path: '**',
    redirectTo: 'pokemons'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
