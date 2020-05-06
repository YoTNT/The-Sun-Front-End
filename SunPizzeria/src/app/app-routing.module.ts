import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: "customer", component:CustomerComponent},
  {path: "employee", component:EmployeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
