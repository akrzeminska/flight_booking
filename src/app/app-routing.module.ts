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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'search', component: FlightSearchComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

