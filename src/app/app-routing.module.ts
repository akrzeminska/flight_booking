import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { SalesComponent } from './pages/sales/sales.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FlightSearchComponent } from './pages/flight-search/flight-search.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FightGridComponent } from './pages/fight-grid/fight-grid.component';
import { FlightDetailsComponent } from './pages/flight-details/flight-details.component';
import { FlightSummaryComponent } from './pages/flight-summary/flight-summary.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'aboutus', component: NotFoundComponent },
  { path: 'sales', component: NotFoundComponent },
  { path: 'contact', component: NotFoundComponent },
  { path: 'search', component: FlightSearchComponent },
  { path: 'shopping', component: FlightSummaryComponent, canActivate: [AuthGuard] },
  { path: 'flight-search', component: FlightSearchComponent},
  { path: 'flight-grid', component: FightGridComponent },
  { path: 'flight-details', component: FlightDetailsComponent },
  { path: 'flight-summary', component: FlightSummaryComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

