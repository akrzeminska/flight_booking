import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      class: ['', Validators.required]
    });
  }

  searchFlights(): void {
    const fromValue = this.flightSearchForm.controls['from'].value;
    const toValue = this.flightSearchForm.controls['to'].value;
    const departureDateValue = this.flightSearchForm.controls['departureDate'].value;
    const returnDateValue = this.flightSearchForm.controls['returnDate'].value;
    const passengersValue = this.flightSearchForm.controls['passengers'].value;
    const classValue = this.flightSearchForm.controls['class'].value;

    this.flightSearchService.setFromSearch(fromValue);
    this.flightSearchService.setToSearch(toValue);
    this.flightSearchService.setDepartureDateSearch(departureDateValue);
    this.flightSearchService.setReturnDateSearch(returnDateValue);
    this.flightSearchService.setPassengerSearch(passengersValue);
    this.flightSearchService.setClassSearch(classValue);

    if (returnDateValue && returnDateValue < departureDateValue) {
      alert('You cannot select a return date earlier than the departure date')
      return;
    }

    this.router.navigate(['/flight-grid']);

  }

}

