import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelsius',
})
export class KelvinToCelsiusPipe implements PipeTransform {
  transform(kelvin: number): string {
    const celsius = kelvin - 273.15;
    return celsius.toFixed(1) + '°C';
  }
}
