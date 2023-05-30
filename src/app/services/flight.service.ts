import { Injectable } from '@angular/core';
import { Flight } from '../models/Flight';
import { FlightSearchCriteria } from '../models/FlightSearchCriteria';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flights: Flight[] = []
  searchCriteria!: FlightSearchCriteria;

  constructor() { 
    this.flights = [
      { id: 1, from: 'Gdansk', to: 'Vienna', departureDate: '2023-05-25', returnDate: '2023-05-26', passengers: 2, class: 'Economy' },
      { id: 2, from: 'Vienna', to: 'Roma', departureDate: '2023-05-26', returnDate: '2023-05-30', passengers: 2, class: 'Economy' },
      { id: 3, from: 'Berlin', to: 'Gdansk', departureDate: '2023-06-01', returnDate: '2023-06-09', passengers: 2, class: 'Economy' }
    ];
  }  
  
  setCriteria(flightSearchCriteria: FlightSearchCriteria) {
    this.searchCriteria = flightSearchCriteria;
  }

  public getSearchedFlights() : Flight[] {
    let result : Flight[] = [];
    if (this.searchCriteria.from) {
      result = this.flights.filter(flight => flight.from.toLowerCase() === this.searchCriteria.from.toLowerCase());
    } if (this.searchCriteria.to) {
      result = result.filter(flight => flight.to.toLowerCase() === this.searchCriteria.to.toLowerCase());
    } if (this.searchCriteria.departureDate) {
      result = result.filter(flight => flight.departureDate === this.searchCriteria.departureDate);
    } if (this.searchCriteria.returnDate) {
      result = result.filter(flight => flight.returnDate === this.searchCriteria.returnDate);
    } if (this.searchCriteria.passengers) {
      result = result.filter(flight => flight.passengers === this.searchCriteria.passengers);
    } if (this.searchCriteria.class) {
      result = result.filter(flight => flight.class.toLowerCase() === this.searchCriteria.class.toLowerCase());
    }
      return result;
  } 
  
  public getAllFlights() : Flight[] {
    console.log(this.flights)
    return this.flights;
  }

  public getFlightsFrom(from: string) : Flight [] {
    console.log(from);
    console.log(this.flights.filter(f => f.from === from))
    return this.flights.filter(f => f.from === from);
  }
}
