import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = 'cb0d30832f7756c566b25b6d5ddfc76d';
  private apiUrl = 'http://api.openweathermap.org/data/2.5/weather';  

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&lang=tr`;
    return this.http.get(url);
  }

  varsayilanSehir = '';
}
