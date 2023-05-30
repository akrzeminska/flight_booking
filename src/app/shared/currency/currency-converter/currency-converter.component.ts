import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
  amount!: number;
  selectedCurrency!: string;
  convertedAmount!: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.selectedCurrency = 'PLN'; // Domyślna waluta
    this.convertCurrency();
  }

  convertCurrency(): void {
    const apiUrl = `https://api.nbp.pl/api/exchangerates/rates/a/${this.selectedCurrency.toLowerCase()}/?format=json`;

    this.http.get(apiUrl).subscribe((data: any) => {
      const rate = data.rates[0].mid;
      this.convertedAmount = this.amount * rate;
    });
  }
}
