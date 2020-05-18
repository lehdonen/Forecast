import { Component, OnInit } from '@angular/core';
import { WeatherDTO } from 'src/app/models/Weather';
import { ApiService } from 'src/app/services/api.service';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  city: string;
  currentWeather: WeatherDTO;
  weatherIconURL: string;
  center: google.maps.LatLngLiteral;

  constructor(
    private apiService: ApiService,
    private cityService: CityService
  ) {
  }

  ngOnInit() {
    if (this.cityService.getCity() === undefined) {
      this.cityService.changeCity('Helsinki');
    }
    this.city = this.cityService.getCity();
    this.apiService.getWeather(this.cityService.getCity()).subscribe((res: WeatherDTO) => {
      this.center = {
        lat: res.coord.lat,
        lng: res.coord.lon,
      };
      this.currentWeather = res;
      this.weatherIconURL = `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;
    });
  }

  search(input: string) {
    this.cityService.changeCity(input);
    this.city = this.cityService.getCity();

    this.apiService.getWeather(this.city).subscribe((res: WeatherDTO) => {
      setTimeout(() => {
        this.currentWeather = res;
        this.weatherIconURL = `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;
        this.center = {
          lat: res.coord.lat,
          lng: res.coord.lon,
        };
      }, 1000);
    });
  }
}
