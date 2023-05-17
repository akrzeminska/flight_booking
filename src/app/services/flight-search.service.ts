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
      // { id: 1, from: 'Warsaw', to: 'London'departureDate: '2023-05-20', returnDate: '2023-05-25', passengers: 2, class: 'Economy', baggage: '20 kg', seatSelection: 'Aisle' },
      // { id: 2, from: 'Berlin', to: 'Paris'departureDate: '2023-06-10', returnDate: '2023-06-20', passengers: 1, class: 'Business', baggage: '30 kg', seatSelection: 'Window' },
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
