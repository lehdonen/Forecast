import { Component, OnInit } from '@angular/core';
import { WeatherDTO } from 'src/app/models/Weather';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  city: 'Helsinki';
  currentWeather: WeatherDTO;
  weatherIconURL: string;

  constructor(
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.apiService.getWeather('Helsinki').subscribe((res: WeatherDTO) => {
      setTimeout(() => {
        this.currentWeather = res;
        this.weatherIconURL = `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;
      }, 1000);
    });
  }
}
