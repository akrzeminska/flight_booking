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
      { id: 1, from: 'Gdansk', to: 'Vienna', departureDate: this.getDateShiftedByDays(1), class: 'Economy', totalSeatsCount: 40
      , reservedSeats: ['1A', '1B', '2D'] },
      { id: 2, from: 'Vienna', to: 'Roma', departureDate: this.getDateShiftedByDays(5), class: 'Economy', totalSeatsCount: 40
      , reservedSeats: ['1A', '1B', '2D'] },
      { id: 3, from: 'Berlin', to: 'Gdansk', departureDate: this.getDateShiftedByDays(10), class: 'Economy', totalSeatsCount: 40
      , reservedSeats: ['1A', '1B', '2D'] },
      { id: 4, from: 'Gdansk', to: 'Vienna', departureDate: this.getDateShiftedByDays(18), class: 'Economy', totalSeatsCount: 40
      , reservedSeats: ['1A', '1B', '2D'] },
      { id: 5, from: 'Vienna', to: 'Roma', departureDate: this.getDateShiftedByDays(25), class: 'Economy', totalSeatsCount: 40
      , reservedSeats: ['1A', '1B', '2D'] },
      { id: 6, from: 'Berlin', to: 'Gdansk', departureDate: this.getDateShiftedByDays(30), class: 'Economy', totalSeatsCount: 40
      , reservedSeats: ['1A', '1B', '2D'] },
      { id: 7, from: 'Gdansk', to: 'Vienna', departureDate: this.getDateShiftedByDays(40), class: 'Economy', totalSeatsCount: 40
      , reservedSeats: ['1A', '1B', '2D'] },
      { id: 8, from: 'Vienna', to: 'Roma', departureDate: this.getDateShiftedByDays(45), class: 'Economy', totalSeatsCount: 40
      , reservedSeats: ['1A', '1B', '2D'] },
      { id: 9, from: 'Berlin', to: 'Gdansk', departureDate: this.getDateShiftedByDays(2*30), class: 'Economy', totalSeatsCount: 40
      , reservedSeats: ['1A', '1B', '2D'] },
      { id: 10, from: 'Gdansk', to: 'Vienna', departureDate: this.getDateShiftedByDays(3*30), class: 'Economy', totalSeatsCount: 40
      , reservedSeats: ['1A', '1B', '2D'] },
      { id: 11, from: 'Vienna', to: 'Roma', departureDate: this.getDateShiftedByDays(4*30), class: 'Economy', totalSeatsCount: 40
      , reservedSeats: ['1A', '1B', '2D'] },
      { id: 12, from: 'Paris', to: 'Gdansk', departureDate: this.getDateShiftedByDays(5*30), class: 'Economy', totalSeatsCount: 40
      , reservedSeats: ['1A', '1B', '2D'] },
      { id: 13, from: 'Antoniów', to: 'Gdansk', departureDate: this.getDateShiftedByDays(6*30), class: 'Economy', totalSeatsCount: 40
      , reservedSeats: ['1A', '1B', '2D'] },
    ];
  }  

  isReserved(flightId: number, seat: string): boolean {
    return this.flights.some(flight => flight.id === flightId && flight.reservedSeats.indexOf(seat) > -1)
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
    // } if (this.searchCriteria.returnDate) {
    //   result = result.filter(flight => flight.returnDate === this.searchCriteria.returnDate);
    } if (this.searchCriteria.passengers) {
      result = result.filter(flight => flight.totalSeatsCount - flight.reservedSeats.length >= this.searchCriteria.passengers);
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
