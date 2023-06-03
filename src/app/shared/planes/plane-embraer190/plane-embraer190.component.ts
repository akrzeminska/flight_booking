import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-plane-embraer190',
  templateUrl: './plane-embraer190.component.html',
  styleUrls: ['./plane-embraer190.component.scss']
})
export class PlaneEmbraer190Component {
  seats: string[] = ['A', 'B', 'C', 'D'];
  rows: number[] = Array.from({ length: 10 }, (_, index) => index + 1);
  selectedSeats: string[] = [];

  @Input() flightId!: number;
  @Input() passengersCount!: number; //przekazanie liczby pasażerów do graniczenia wyboru miejsc w samolocie
  @Output() selectedSeatsChange = new EventEmitter<string[]>();

  constructor(private flightService: FlightService) { }

  isReserved(seat: string): boolean {
    const result = this.flightService.isReserved(+this.flightId, seat);
    return result;
  }

  selectSeats(seat: string): void {
    if (!this.isReserved(seat)) {
      if (this.isSelected(seat)) {
        const index = this.selectedSeats.indexOf(seat);
        if (index !== -1) {
          this.selectedSeats.splice(index, 1);
        }
      } else {
        if (this.selectedSeats.length < this.passengersCount) {
          this.selectedSeats.push(seat);
        } else {
          alert('The maximum number of seats has been selected.');
        }
      }
      console.log(this.selectedSeats);
      this.selectedSeatsChange.emit(this.selectedSeats);
    }
  }

  isSelected(seat: string): boolean {
    return this.selectedSeats.includes(seat);
  }

  clearSeats(): void {
    this.selectedSeats = [];
    // console.log(this.selectedSeats);
  }

}
