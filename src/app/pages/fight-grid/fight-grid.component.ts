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

  constructor(public fs: FlightService, private router: Router) { }

  ngOnInit(): void {
    this.searchedRows = this.fs.getSearchedFlights();
  }
  redirectToDetails(path: string, flightId: number) {
    this.router.navigate([path], { queryParams: { flightId }});
  }

  countFreeSeats(flight: Flight) {
    return flight.totalSeatsCount - flight.reservedSeats.length;
  }
}
