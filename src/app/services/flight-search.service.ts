import { Injectable, OnInit } from '@angular/core';
import { Flight } from '../models/Flight';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {
  flights: Flight[] = []
  fromSearch: string = '';

  constructor() { 
    this.flights = [
      { id: 1, from: 'Warsaw', to: 'London' },
      { id: 2, from: 'Berlin', to: 'Paris' },
      { id: 3, from: 'Gdansk', to: 'Viena' },
      { id: 4, from: 'Viena', to: 'Roma' },
      { id: 5, from: 'Berlin', to: 'Gdansk' },
    ];
  }

  public setFromSearch(from: string ) {
    this.fromSearch = from;
  }

  public getSearchedFlights() : Flight[] {
    if (this.fromSearch) {
      return this.flights.filter(f => f.from === this.fromSearch);
    } else {
      return [];
    }
  }

  public getAllFlights() : Flight[] {
    return this.flights;
  }

  public getFlightsFrom(from: string) : Flight [] {
    return this.flights.filter(f => f.from === from);
  }
}
