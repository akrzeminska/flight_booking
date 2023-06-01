import { Injectable } from '@angular/core';
import { Flight } from '../models/Flight';
import { FlightSearchCriteria } from '../models/FlightSearchCriteria';
import { FlightGeneratorService } from './flight-generator.service';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  
  flights: Flight[] = [];
  searchCriteria: FlightSearchCriteria = {} as FlightSearchCriteria;

  constructor(public flightGeneratorService: FlightGeneratorService) { 
    const startDate = new Date();
    const monthsAhead = 6;
    this.flights = this.flightGeneratorService.generateFlights(startDate, monthsAhead);
    console.log(this.flights);

  }  

  isReserved(flightId: number, seat: string): boolean {
    return this.flights.some(flight => flight.id === flightId && flight.reservedSeats.indexOf(seat) > -1)
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

  getFlightById(flightId: number): Flight {
    return this.flights.filter((flight) => flight.id === flightId)[0];
  }

}
