import { Injectable } from '@angular/core';
import { Flight } from '../models/Flight';
import { FlightSearchCriteria } from '../models/FlightSearchCriteria';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flights: Flight[] = []
  searchCriteria: FlightSearchCriteria = {} as FlightSearchCriteria;

  constructor() { 
    this.flights = [
      { id: 1, from: 'Gdansk', to: 'Vienna', departureDate: this.getDateShiftedByDays(0), returnDate: this.getDateShiftedByDays(6*30), passengers: 2, class: 'Economy' },
      { id: 2, from: 'Vienna', to: 'Roma', departureDate: '2023-05-26', returnDate: '2023-05-30', passengers: 2, class: 'Economy' },
      { id: 3, from: 'Berlin', to: 'Gdansk', departureDate: '2023-06-01', returnDate: '2023-06-09', passengers: 2, class: 'Economy' },
      { id: 4, from: 'Gdansk', to: 'Vienna', departureDate: '2023-05-25', returnDate: '2023-05-26', passengers: 2, class: 'Economy' },
      { id: 5, from: 'Vienna', to: 'Roma', departureDate: '2023-05-26', returnDate: '2023-05-30', passengers: 2, class: 'Economy' },
      { id: 6, from: 'Berlin', to: 'Gdansk', departureDate: '2023-06-01', returnDate: '2023-06-09', passengers: 2, class: 'Economy' },
      { id: 7, from: 'Gdansk', to: 'Vienna', departureDate: '2023-05-25', returnDate: '2023-05-26', passengers: 2, class: 'Economy' },
      { id: 8, from: 'Vienna', to: 'Roma', departureDate: '2023-05-26', returnDate: '2023-05-30', passengers: 2, class: 'Economy' },
      { id: 9, from: 'Berlin', to: 'Gdansk', departureDate: '2023-06-01', returnDate: '2023-06-09', passengers: 2, class: 'Economy' },
      { id: 10, from: 'Gdansk', to: 'Vienna', departureDate: '2023-05-25', returnDate: '2023-05-26', passengers: 2, class: 'Economy' },
      { id: 11, from: 'Vienna', to: 'Roma', departureDate: '2023-05-26', returnDate: '2023-05-30', passengers: 2, class: 'Economy' },
      { id: 12, from: 'Paris', to: 'Gdansk', departureDate: '2023-06-01', returnDate: '2023-06-09', passengers: 2, class: 'Economy' },
      { id: 13, from: 'Antoniów', to: 'Gdansk', departureDate: '2023-06-01', returnDate: '2023-06-09', passengers: 2, class: 'Economy' },
    ];
  }  

  private getDateShiftedByDays(daysToAdd: number) {
    const result = new Date();
    result.setDate(result.getDate() + daysToAdd)
    return result.toJSON().slice(0, 10);
  }

  getAvailableFromFlights() : string[] {
    return this.flights.map(flight => flight.from).filter(this.onlyUnique).sort();
  }

  getAvailableToFlights() : string[] {
    return this.flights.map(flight => flight.to).filter(this.onlyUnique).sort();
  }

  private onlyUnique(value: any, index: number, array: any[]) {
    return array.indexOf(value) === index;
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
