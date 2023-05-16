import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/Flight';
import { FlightSearchService } from 'src/app/services/flight-search.service';

@Component({
  selector: 'app-fight-grid',
  templateUrl: './fight-grid.component.html',
  styleUrls: ['./fight-grid.component.scss']
})
export class FightGridComponent implements OnInit {
  rows: Flight[] = [];
  rowsFiltered: Flight[] = [];
  searchedRows: Flight[] = [];

  constructor(public fs: FlightSearchService) { }

  ngOnInit(): void {
    this.rows = this.fs.getAllFlights();
    this.rowsFiltered = this.fs.getFlightsFrom('Berlin');
    this.searchedRows = this.fs.getSearchedFlights();
  }
}
