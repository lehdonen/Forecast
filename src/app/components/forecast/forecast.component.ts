import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ForecastDTO } from 'src/app/models/Forecast';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  forecast: ForecastDTO;
  iconUrl = 'https://openweathermap.org/img/wn/';

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getForecast('Helsinki').subscribe(res => {
      setTimeout(() => {
        this.forecast = res;
      }, 1000);
    });
  }
}
