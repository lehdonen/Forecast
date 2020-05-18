import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ForecastDTO } from 'src/app/models/Forecast';
import { CityService } from 'src/app/services/city.service';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  city: string;
  forecast: ForecastDTO;
  iconUrl = 'https://openweathermap.org/img/wn/';

  constructor(
    private apiService: ApiService,
    private cityService: CityService
  ) { }

  ngOnInit() {
    this.city = this.cityService.getCity();
    console.log(this.city);

    this.apiService.getForecast(this.city).subscribe(res => {
      setTimeout(() => {
        this.forecast = res;
      }, 1000);
    });
  }
}
