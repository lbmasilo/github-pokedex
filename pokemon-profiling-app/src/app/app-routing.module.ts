import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonHomeComponent } from './pokemon-home/pokemon-home.component'
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component'

const routes:Routes = [
  {path:'', component:PokemonHomeComponent},
  {path:'info/:name', component:PokemonInfoComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]

})
export class AppRoutingModule { }
