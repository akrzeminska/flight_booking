import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit, OnDestroy {
  
  constructor(private router: Router, private route: ActivatedRoute) { }
  flightId!: number;
  sub!: Subscription;


  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe((params: any) => {
      this.flightId = params.flightId;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  redirectTo(path: string) {
    this.router.navigate([path]);
  }
}

