import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PizzaComponent} from './components/pizza/pizza.component'
import {AboutComponent} from './components/about/about.component'
import {ContactComponent} from './components/contact/contact.component'
import {GalleryComponent} from './components/gallery/gallery.component'
import { LoginComponent } from './components/login/login.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [
  {path:"orderpizza" , component: PizzaComponent},
  {path:"about" , component: AboutComponent},
  {path:"gallery" , component: GalleryComponent},
  {path:"contact" , component: ContactComponent},
  {path: "login", component:LoginComponent},
  {path: "customer", component:CustomerComponent},
  {path: "employee", component:EmployeeComponent},
  {path: "registeruser", component:RegisterComponent},
  {path: "home", component:HomeComponent},
  {path: "", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
