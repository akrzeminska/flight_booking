import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Flight } from 'src/app/models/Flight';
import { FlightService } from 'src/app/services/flight.service';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit, OnDestroy {
  flightId!: number;
  sub!: Subscription;
  flight!: Flight;
  loading: boolean = true;
  passengers!: number;
  baggage: string = 'choose';
  selectedSeats: string[] = [];
  pricePerBaggage: number = 0;
  totalPrice: number = 0;
  selectedCurrency: string = 'PLN';
  exchangeRate: number = 1;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private flightService: FlightService,
    private currencyService: CurrencyService
  ) { }

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe((params: any) => {
      this.flightId = +params.flightId;
      setTimeout(() => {
        this.flight = this.flightService.getFlightById(this.flightId);
        this.passengers = this.flightService.getPassengersCount();
        this.loading = false;
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  redirectTo(path: string) {
    this.flightService.updateReservedSeats(this.flightId, this.selectedSeats);
    this.router.navigate([path]);
  }

  onSelectedSeatsChange(selectedSeats: string[]): void {
    this.selectedSeats = selectedSeats;
    console.log(this.selectedSeats.length); // Wyciągnij długość tablicy
    this.updateTotalPrice();
  }

  getSelectedBaggage(): void {
    console.log(this.baggage);
    console.log(this.flight.pricePerSeat);

    if (this.baggage === 'cabin') {
      this.pricePerBaggage = 50;
    } else if (this.baggage === 'cabin-checked') {
      this.pricePerBaggage = 120;
    } else {
      this.pricePerBaggage = 0;
    }

    this.updateTotalPrice();
  }

  updateTotalPrice(): void {
    if (this.baggage === 'choose') {
      this.totalPrice = 0;
    } else {
      this.totalPrice = this.selectedSeats.length * (this.flight.pricePerSeat + this.pricePerBaggage) / this.exchangeRate;
      this.totalPrice = Math.round(this.totalPrice);
    }
  }

  convertCurrency(currency: string): void {
    this.selectedCurrency = currency;
    if (currency === 'PLN') {
      this.exchangeRate = 1;
      this.updateTotalPrice();
      return;
    } else {
      this.currencyService.getExchangeRate(currency).subscribe(rate => {
        this.exchangeRate = rate;
        this.updateTotalPrice();
      });
    }   
    
  }
}
