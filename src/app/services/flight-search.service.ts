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
      { id: 1, from: 'Gdansk', to: 'Viena', departureDate: '2023-05-21', returnDate: '2023-05-25', passengers: 2, class: 'Economy' },
      { id: 2, from: 'Viena', to: 'Roma', departureDate: '2023-05-26', returnDate: '2023-05-30', passengers: 2, class: 'Economy' },
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
    debugger
    let result : Flight[] = [];
    if (this.fromSearch) {
      result = this.flights.filter(flight => flight.from === this.fromSearch);
    } if (this.toSearch) {
      result = result.filter(flight => flight.to === this.toSearch);
    } if (this.departureDateSearch) {
      result = result.filter(flight => flight.departureDate === this.departureDateSearch);
    } if (this.returnDateSearch) {
      result = result.filter(flight => flight.returnDate === this.returnDateSearch);
    } if (this.passengersSearch) {
      result = result.filter(flight => flight.passengers === this.passengersSearch);
    } if (this.classSearch) {
      result = result.filter(flight => flight.class === this.classSearch);
    }
      return result;
  } 
  
  public getAllFlights() : Flight[] {
    console.log(this.flights)
    return this.flights;
  }

  public getFlightsFrom(from: string) : Flight [] {
    return this.flights.filter(f => f.from === from);
  }
}
