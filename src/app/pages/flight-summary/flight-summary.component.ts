import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-summary',
  templateUrl: './flight-summary.component.html',
  styleUrls: ['./flight-summary.component.scss']
})
export class FlightSummaryComponent implements OnInit {
  origin!: string;
  destination!: string;
  departureDate!: string;
  passengers!: number;
  class!: string;
  seats!: string;
  baggage!: string;
  cost!: number;
  currency!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.origin = params['origin'];
      this.destination = params['destination'];
      this.departureDate = params['departureDate'];
      this.passengers = params['passengers'];
      this.class = params['class'];
      this.seats = params['seats'];
      this.baggage = params['baggage'];
      this.cost = params['cost'];
      this.currency = params['currency'];
    });
  }
}
