import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PizzaComponent} from './components/pizza/pizza.component'


const routes: Routes = [
  {path:"orderpizza" , component: PizzaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
