import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  currentDate!: string;
  currentTime!: string;
  weatherData: any;

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

    // Początkowe ustawienie czasu
    this.weatherService.getCurrentDateTime();

    // Aktualizacja czasu co 1 sekundę
    setInterval(() => {
      this.weatherService.getCurrentDateTime();
    }, 1000);
  }
}
