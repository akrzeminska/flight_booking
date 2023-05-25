import { Injectable } from '@angular/core';
import { Flight } from '../models/Flight';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {
  flights: Flight[] = []
  
  fromSearch: string = '';
  toSearch: string = '';
  departureDateSearch: string = '';
  returnDateSearch: string = '';
  passengersSearch: number = 0;
  classSearch: string = '';
  

  constructor() { 
    this.flights = [
      { id: 1, from: 'Gdansk', to: 'Vienna', departureDate: '2023-05-25', returnDate: '2023-05-26', passengers: 2, class: 'Economy' },
      { id: 2, from: 'Vienna', to: 'Roma', departureDate: '2023-05-26', returnDate: '2023-05-30', passengers: 2, class: 'Economy' },
      { id: 3, from: 'Berlin', to: 'Gdansk', departureDate: '2023-06-01', returnDate: '2023-06-09', passengers: 2, class: 'Economy' }
    ];
  }

  public setFromSearch(from: string ) {
    this.fromSearch = from;
  }
  public setToSearch(to: string ) {
    this.toSearch = to;
  }
  public setDepartureDateSearch(departureDate: string ) {
    this.departureDateSearch = departureDate;
  }
  public setReturnDateSearch(returnDate: string ) {
    this.returnDateSearch = returnDate;
  }
  public setPassengerSearch(passengers: number ) {
    this.passengersSearch = passengers;
  }
  public setClassSearch(clas: string ) {
    this.classSearch = clas;
  }

  public getSearchedFlights() : Flight[] {
    let result : Flight[] = [];
    if (this.fromSearch) {
      result = this.flights.filter(flight => flight.from.toLowerCase() === this.fromSearch.toLowerCase());
    } if (this.toSearch) {
      result = result.filter(flight => flight.to.toLowerCase() === this.toSearch.toLowerCase());
    } if (this.departureDateSearch) {
      result = result.filter(flight => flight.departureDate === this.departureDateSearch);
    } if (this.returnDateSearch) {
      result = result.filter(flight => flight.returnDate === this.returnDateSearch);
    } if (this.passengersSearch) {
      result = result.filter(flight => flight.passengers === this.passengersSearch);
    } if (this.classSearch) {
      result = result.filter(flight => flight.class.toLowerCase() === this.classSearch.toLowerCase());
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
