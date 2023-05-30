import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  redirectTo(path: string) {
    this.router.navigate([path]);
  }
}

