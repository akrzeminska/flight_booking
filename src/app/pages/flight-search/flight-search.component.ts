import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FlightService } from 'src/app/services/flight.service';
import { Router } from '@angular/router';
import { FlightSearchCriteria } from 'src/app/models/FlightSearchCriteria';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {
  flightSearchForm!: FormGroup;
  searchResults: any[] = []; // Tablica przechowująca wyniki wyszukiwania lotów
  
  constructor(private fb: FormBuilder, private flightSearchService: FlightService, private router: Router) {}

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
     const searchCriteria: FlightSearchCriteria = { 
      from: this.getValueFromControl('from'),
      to: this.getValueFromControl('to'),
      departureDate: this.getValueFromControl('departureDate'),
      returnDate: this.getValueFromControl('returnDate'),
      passengers: Number.parseInt(this.getValueFromControl('passengers')),
      class: this.getValueFromControl('class')
    }

    this.flightSearchService.setCriteria(searchCriteria);

    //TODO: zamienić na custom validator na form grupie
    
    // if (returnDateValue && returnDateValue < departureDateValue) {
    //   alert('You cannot select a return date earlier than the departure date')
    //   return;
    // }

    this.router.navigate(['/flight-grid']);

  }

  private getValueFromControl(controlName: string) : string {
    return this.flightSearchForm.controls[controlName].value;
  }
}

