import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/models/Flight';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-fight-grid',
  templateUrl: './fight-grid.component.html',
  styleUrls: ['./fight-grid.component.scss']
})
export class FightGridComponent implements OnInit {
  rows: Flight[] = [];
  searchedRows: Flight[] = [];
  // DEVELOPMENT ONLY!
  // searchedRows2!: { id: number; from: string; to: string; departureDate: string; returnDate: string; passengers: number; class: string; }[];

  constructor(public fs: FlightService, private router: Router) { }

  ngOnInit(): void {
    //this.rows = this.fs.getAllFlights();

    this.searchedRows = this.fs.getSearchedFlights();

    // DEVELOPMENT ONLY!
  //   this.searchedRows2 = [{ id: 1, from: 'Gdansk', to: 'Vienna', departureDate: '2023-05-25', returnDate: '2023-05-26', passengers: 2, class: 'Economy' },
  //   { id: 2, from: 'Vienna', to: 'Roma', departureDate: '2023-05-26', returnDate: '2023-05-30', passengers: 2, class: 'Economy' },
  //   { id: 3, from: 'Berlin', to: 'Gdansk', departureDate: '2023-06-01', returnDate: '2023-06-09', passengers: 2, class: 'Economy' }
  // ];
  }
  redirectToDetails(path: string) {
    this.router.navigate(['/flight-details']);
  }

  countFreeSeats(flight: Flight) {
    return flight.totalSeatsCount - flight.reservedSeats.length;
  }
}
