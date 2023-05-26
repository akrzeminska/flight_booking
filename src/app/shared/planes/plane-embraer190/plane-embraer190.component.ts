import { Component } from '@angular/core';

@Component({
  selector: 'app-plane-embraer190',
  templateUrl: './plane-embraer190.component.html',
  styleUrls: ['./plane-embraer190.component.scss']
})
export class PlaneEmbraer190Component {
  title__seatList = 'Lista miejsc';
  dataSource = ['A', 'B', 'C', 'D'];
}

