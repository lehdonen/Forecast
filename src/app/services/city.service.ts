import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  city: string;
  constructor( ) { }

  changeCity(newCity: string) {
    this.city = newCity;
  }

  getCity() {
    return this.city;
  }
}
