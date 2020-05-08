import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import {RegisterComponent} from './components/register/register.component';
import {PizzaComponent} from './components/pizza/pizza.component'

const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: "customer", component:CustomerComponent},
  {path: "employee", component:EmployeeComponent},
  {path: "registeruser", component:RegisterComponent},
  {path:"orderpizza" , component: PizzaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
