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
import { FlightSummaryComponent } from './pages/flight-summary/flight-summary.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FightGridComponent } from './pages/fight-grid/fight-grid.component';
import { WeatherComponent } from './shared/weather/weather.component';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { PlaneEmbraer190Component } from './shared/planes/plane-embraer190/plane-embraer190.component';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';

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
    FlightSummaryComponent,
    ShoppingComponent,
    NotFoundComponent,
    SignupComponent,
    FightGridComponent,
    WeatherComponent, 
    TemperaturePipe, PlaneEmbraer190Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
      deps: [PlatformLocation]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
