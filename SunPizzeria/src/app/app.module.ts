import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule, MatInput} from '@angular/material/input';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserRoleComponent } from './components/user-role/user-role.component';
import { UserComponent } from './components/user/user.component';
import { ToppingComponent } from './components/topping/topping.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { TimestampPipe } from './pipes/timestamp.pipe';
import {APP_BASE_HREF} from '@angular/common';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { TicketitemComponent } from './components/ticketitem/ticketitem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    PizzaComponent,
    LoginComponent,
    RegisterComponent,
    UserRoleComponent,
    UserComponent,
    ToppingComponent,
    CurrencyPipe,
    TimestampPipe,
    GalleryComponent,
    AboutComponent,
    ContactComponent,
    CustomerComponent,
    EmployeeComponent,
    TicketitemComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
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
    MatIconModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
