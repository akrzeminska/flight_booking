import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { flights } from './flights';
import { FlightSearchService } from 'src/app/services/flight-search.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {
  flightSearchForm!: FormGroup;
  searchResults: any[] = []; // Tablica przechowująca wyniki wyszukiwania lotów


  constructor(private fb: FormBuilder, private flightSearchService: FlightSearchService, private router: Router) {}

  ngOnInit(): void {
    this.flightSearchForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      departureDate: ['', Validators.required],
      returnDate: [''],
      passengers: ['', Validators.required],
      class: ['', Validators.required],
      baggage: ['', Validators.required],
      seatSelection: ['']
    });
  }

  searchFlights(): void {
    const fromValue = this.flightSearchForm.controls['from'].value;

    this.flightSearchService.setFromSearch(fromValue);
    this.router.navigate(['/flight-grid']);

    
    // if (this.flightSearchForm.valid) {
    //   const searchCriteria = this.flightSearchForm.value;
    //   this.searchResults = this.performSearch(searchCriteria);
    // } else {
    //   console.log('Please fill in all required fields.');
    // }
  }
  // performSearch(criteria: any): any[] {
  //   // Wykonaj logikę wyszukiwania lotów na podstawie przekazanych kryteriów
  //   // Możesz skorzystać z metody filter i innych funkcji tablicowych
  //   const filteredFlights = flights.filter((flight) => {
  //     return (
  //       flight.from.toLowerCase() === criteria.from.toLowerCase() &&
  //       flight.to.toLowerCase() === criteria.to.toLowerCase() &&
  //       flight.departureDate === criteria.departureDate &&
  //       (flight.returnDate === criteria.returnDate || !criteria.returnDate) &&
  //       flight.passengers >= criteria.passengers &&
  //       flight.class === criteria.class &&
  //       flight.baggage === criteria.baggage &&
  //       (flight.seatSelection === criteria.seatSelection || !criteria.seatSelection)
  //     );
  //   });
  //   return filteredFlights;
  // }
}

