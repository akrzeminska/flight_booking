import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  currentDate!: string;
  currentTime!: string;

  constructor(private httpClient: HttpClient) {}

  getCurrentDateTime(): void {
    const currentDate = new Date();
    this.currentDate = currentDate.toLocaleDateString();
    this.currentTime = currentDate.toLocaleTimeString();
  }

  getLocation(): Observable<any> {
    return new Observable((observer) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            this.getWeatherData(latitude, longitude).subscribe(
              (response: any) => {
                observer.next(response);
                observer.complete();
                console.log('Weather data: ', response);
              },
              (error: any) => {
                observer.error(error);
                console.log('Error retrieving weather data: ', error);
              }
            );
          },
          error => {
            observer.error(error);
            console.log('Unable to retrieve location: ', error);
          }
        );
      } else {
        observer.error('Your browser does not support geolocation');
        console.log('Your browser does not support geolocation');
      }
    });
  }

  getWeatherData(latitude: number, longitude: number): Observable<any> {
    const apiKey = '9fbf210b81b32719a6d9efd8ba90be83';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    return this.httpClient.get(apiUrl);
  }
}
