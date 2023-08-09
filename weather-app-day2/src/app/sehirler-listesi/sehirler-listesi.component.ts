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

  setDefault(sehir:string){
    this.weatherService.varsayilanSehir = sehir;
  }

  showAddCityForm = false;
  
  varsayilanSehir: string = '';

  newCity = '';
  sehirler: string[] = [];
  
  weatherData: { [city: string]: any } = {};

  city: string = '';
  currentDateTime: Date = new Date();

  getWeather(city: string) {
    this.weatherService.getWeather(city).subscribe((data) => {
      this.weatherData[city] = data;
    });
  }
  getTemperature(city: string): number {
    return this.weatherData[city]?.main.temp
  }
  getWeatherDescription(city: string): string {
    return this.weatherData[city]?.weather[0]?.description
  }
  getWindSpeed(city: string): number {
    return this.weatherData[city]?.wind?.speed
  }
  getHumidity(city: string): number {
    return this.weatherData[city]?.main?.humidity
  }

  addCity() {
    if (this.newCity.trim() !== '') {
      this.sehirler.push(this.newCity);
      this.getWeather(this.newCity);
      this.newCity = '';
    }
    this.showAddCityForm = false;
  }

  deleteSehir(index: number) {
      this.sehirler.splice(index, 1);
  }
  
}
