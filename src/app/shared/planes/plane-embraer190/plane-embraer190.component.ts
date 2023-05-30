import { Component, Input } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-plane-embraer190',
  templateUrl: './plane-embraer190.component.html',
  styleUrls: ['./plane-embraer190.component.scss']
})
export class PlaneEmbraer190Component {
  title__seatList = 'Lista miejsc';
  dataSource = ['A', 'B', 'C', 'D'];
  @Input() flightId!: number;

  constructor(private flightService: FlightService) { }

  isReserved(seat: string) : boolean {
    const result = this.flightService.isReserved(+this.flightId, seat);
    return result;
  }
}

