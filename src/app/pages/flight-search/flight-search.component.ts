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
  availableFroms: string[] = [];
  availableTos: string[] = [];

  constructor(private fb: FormBuilder, private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    this.flightSearchForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      departureDate: ['', Validators.required],
      returnDate: [''],
      passengers: ['', Validators.required, Validators.min(1), Validators.max(40)],
      class: ['', Validators.required]
    });

    this.availableFroms = this.flightService.getAvailableFromFlights();
    this.availableTos = this.flightService.getAvailableToFlights();
  }

  searchFlights(): void {
    if (this.flightSearchForm.invalid || this.areCitiesEqual()) {
      this.showFormErrorAlert();
      return;
    }
    const searchCriteria: FlightSearchCriteria = { 
      from: this.getValueFromControl('from'),
      to: this.getValueFromControl('to'),
      departureDate: this.getValueFromControl('departureDate'),
      returnDate: this.getValueFromControl('returnDate'),
      passengers: Number.parseInt(this.getValueFromControl('passengers')),
      class: this.getValueFromControl('class')
    }
    this.flightService.setCriteria(searchCriteria);
    this.router.navigate(['/flight-grid']);
  }

  showOneWayTicketAlert() {
    alert('Only one way tickets available.');
  }

  private getValueFromControl(controlName: string) : string {
    return this.flightSearchForm.controls[controlName].value;
  }

  showFormErrorAlert(): void {
    alert('Form is not filled correctly.');
  }

  areCitiesEqual(): boolean {
    const from = this.getValueFromControl('from');
    const to = this.getValueFromControl('to');
    return from === to;
  }

}

