import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-sehirler-listesi',
  templateUrl: './sehirler-listesi.component.html',
  styleUrls: ['./sehirler-listesi.component.css'],
})
export class SehirlerListesiComponent {
  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private weatherService: WeatherService
  ) {}

  showAddCityForm = false;

  newCity = '';
  sehirler: string[] = [];

  weatherData: { [city: string]: any } = {};

  city: string = '';
  currentDateTime: Date = new Date();

  getWeather(city: string) {
    this.weatherService.getWeather(city).subscribe(
      (data) => {
        this.weatherData[city] = data;
        this.sehirler.push(city);
        this.showAddCityForm = false;
      },
      (error) => {
        alert(`${city} adında bir şehir bulunamadı.`);
      }
    );
  }

  getTemperature(city: string): number {
    return this.weatherData[city]?.main.temp;
  }
  getWeatherDescription(city: string): string {
    return this.weatherData[city]?.weather[0]?.description;
  }
  getWindSpeed(city: string): number {
    return this.weatherData[city]?.wind?.speed;
  }
  getHumidity(city: string): number {
    return this.weatherData[city]?.main?.humidity;
  }

  addCity() {
    if (this.newCity.trim() !== '' && !this.sehirler.includes(this.newCity)) {
      this.getWeather(this.newCity);
    } else if (this.sehirler.includes(this.newCity)) {
      alert(`${this.newCity} zaten listede bulunmakta.`);
    }
    this.newCity = '';
  }

  deleteSehir(index: number) {
    this.sehirler.splice(index, 1);
  }
}
