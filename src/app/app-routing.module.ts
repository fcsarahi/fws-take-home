import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './features/pokemons/pokemons.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
