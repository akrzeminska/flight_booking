import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SalesComponent } from './pages/sales/sales.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { LoginComponent } from './pages/login/login.component';
import { FlightSearchComponent } from './pages/flight-search/flight-search.component';
import { FlightDetailsComponent } from './pages/flight-details/flight-details.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { FlightSummaryComponent } from './pages/flight-summary/flight-summary.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    SalesComponent,
    AboutusComponent,
    LoginComponent,
    FlightSearchComponent,
    FlightDetailsComponent,
    PlanesComponent,
    FlightSummaryComponent,
    ShoppingComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
