import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit, OnDestroy {
  currentDate!: string;
  currentTime!: string;
  weatherData: any;
  private timeSubscription!: Subscription;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getLocation().subscribe(
      (data: any) => {
        this.weatherData = data;
        this.currentDate = this.weatherService.currentDate;
        this.currentTime = this.weatherService.currentTime;
      },
      (error: any) => {
        console.log('Error: ', error);
      }
    );

    this.weatherService.getCurrentDateTime();

    this.timeSubscription = interval(1000).subscribe(() => {
      this.weatherService.getCurrentDateTime();
      this.currentDate = this.weatherService.currentDate;
      this.currentTime = this.weatherService.currentTime;
    });
  }

  ngOnDestroy(): void {
    this.timeSubscription.unsubscribe();
  }
}
