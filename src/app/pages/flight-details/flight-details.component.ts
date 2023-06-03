import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Flight } from 'src/app/models/Flight';
import { FlightService } from 'src/app/services/flight.service';

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

  constructor(private router: Router, private route: ActivatedRoute, private flightService: FlightService) { }
  

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe((params: any) => {
      this.flightId = +params.flightId;
      setTimeout(() => {
        this.flight = this.flightService.getFlightById(this.flightId);
        this.passengers = this.flightService.getPassengersCount();
        this.loading = false;
      }, 2000);
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  redirectTo(path: string) {
    // Przekazanie danych do serwisu
    this.flightService.updateReservedSeats(this.flightId, this.selectedSeats);
    this.router.navigate([path]);
  }
 
  onSelectedSeatsChange(selectedSeats: string[]): void {
    this.selectedSeats = selectedSeats;
    console.log(this.selectedSeats.length); // Wyciągnij długość tablicy   
  }

  getSelectedBaggage(): void {
    console.log(this.baggage);
    console.log(this.flight.pricePerSeat);
  }

}

