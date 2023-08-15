import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  weatherData: any;
  city: string = '';
  defaultCity: string = 'Ankara';

  currentDateTime: Date = new Date();

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private weatherService: WeatherService
  ) {
    this.getWeather(this.defaultCity);
  }

  getWeather(city: string) {
    this.weatherService.getWeather(city).subscribe(
      (data) => {
        this.weatherData = data;
      },
      (error) => {
        alert(`${city} adında bir şehir bulunamadı.`);
      }
    );
  }
}
