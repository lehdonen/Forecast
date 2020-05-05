import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherDTO } from '../models/Weather';
import { ForecastDTO } from '../models/Forecast';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  weatherEndpoint = 'https://api.openweathermap.org/data/2.5/weather?q=';
  forecastEndpoint = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  apiKey = '1926fe0ba26221588265e05596d1c0e3';

  constructor(
    private http: HttpClient
  ) { }

  getWeather(city: string): Observable<WeatherDTO> {
    return this.http.get<WeatherDTO>(`${this.weatherEndpoint}${city}&APPID=${this.apiKey}&units=metric`);
  }

  getForecast(city: string): Observable<ForecastDTO> {
    return this.http.get<ForecastDTO>(`${this.forecastEndpoint}${city}&APPID=${this.apiKey}&units=metric`);
  }
}
