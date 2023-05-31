import { Injectable } from '@angular/core';
import { Flight } from '../models/Flight';

@Injectable({
  providedIn: 'root'
})
export class FlightGeneratorService {
  private cities: string[] = ['Cracow', 'Vienna', 'Boston'];
  private seatRows: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  private seatColumns: string[] = ['A', 'B', 'C', 'D'];
  private classes: string[] = ['economy', 'business'];

  generateFlights(startDate: Date, monthsAhead: number): Flight[] {
    const flights: Flight[] = [];

    const currentDate = new Date();
    const endDate = new Date();
    endDate.setMonth(currentDate.getMonth() + monthsAhead);

    let currentDateIterator = new Date(startDate);
    let i = 0;
    while (currentDateIterator <= endDate) {
      this.cities.forEach(fromCity => {
        this.cities.forEach(toCity => {
          if (fromCity !== toCity) {
            const flightDate = new Date(currentDateIterator).toJSON().slice(0, 10);
            const randomSeats = this.getRandomSeats();
            const randomClass = this.getRandomClass();

            const flight : Flight = {
              id: i++, from: fromCity, to: toCity, departureDate: flightDate, reservedSeats: randomSeats, class: randomClass,
              totalSeatsCount: 40,
            };
            flights.push(flight);
          }
        });
      });
      currentDateIterator.setDate(currentDateIterator.getDate() + 1);
    }
    return flights;
  }

  private getRandomSeats(): string[] {
    const numSeats = Math.floor(Math.random() * 10) + 1;
    const seats: string[] = [];

    for (let i = 0; i < numSeats; i++) {
      const randomRow = this.seatRows[Math.floor(Math.random() * this.seatRows.length)];
      const randomColumn = this.seatColumns[Math.floor(Math.random() * this.seatColumns.length)];
      const seat = randomRow + randomColumn;
      seats.push(seat);
    }
    return seats;
  }

  private getRandomClass(): string {
    const randomIndex = Math.floor(Math.random() * this.classes.length);
    return this.classes[randomIndex];
  }
}
