import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private baseUrl = 'https://api.nbp.pl/api/exchangerates/rates/a';

  constructor(private http: HttpClient) { }

  getExchangeRate(currency: string) {
    const url = `${this.baseUrl}/${currency.toLowerCase()}/?format=json`;
    return this.http.get<any>(url).pipe(
      map(response => response.rates[0].mid)
    );
  }
}
