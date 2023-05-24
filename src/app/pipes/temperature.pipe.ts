import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number, unit: string): number | string {
    if (value && !isNaN(value)) {
      if (unit === 'Celsius') {
        const celsius = (value - 273.15).toFixed(1);
        return `${celsius} °C`;
      }
    }
    return '';
  }
}
