import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { Routes, RouterModule, ROUTES } from '@angular/router';
import { MatToolbarModule } from  '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list'

import { ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule, MatInput} from '@angular/material/input';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketsComponent } from './components/ticket/ticket.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TicketitemComponent } from './components/ticketitem/ticketitem.component';
import { ToppingComponent } from './components/topping/topping.component';
import { UserComponent } from './components/user/user.component';
import { UserRoleComponent } from './components/user-role/user-role.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { TimestampPipe } from './pipes/timestamp.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    TicketsComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    GalleryComponent,
    AboutComponent,
    HomeComponent,
    CustomerComponent,
    EmployeeComponent,
    LoginComponent,
    RegisterComponent,
    TicketitemComponent,
    ToppingComponent,
    UserComponent,
    UserRoleComponent,
    CurrencyPipe,
    TimestampPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbModalModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
