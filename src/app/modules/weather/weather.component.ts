import { Component, OnInit } from '@angular/core';
import { WeatherClient } from './weather.client';
import * as moment from 'moment';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(readonly weatherClient: WeatherClient) { }

  weatherData: any;
  cityData: any;

  ngOnInit(): void {
    this.weatherClient.findWeather().subscribe(data => {
      console.log('data', data);
      this.weatherData = data.list;
      this.cityData = data.city;
    }, err => console.log('err', err));
  }

  getHour(date: string) {
    console.log('date', date, moment(date).format());
    return Number(moment(date).format('hh'));
  }

  round(number: number) {
    return Math.round(number);
  }

  getWindDirection(deg: number) {
    if (deg < 45 || deg > 270) {
      return 'N';
    } else if (deg > 45 && deg < 135) {
      return 'E';
    } else if (deg > 135 && deg < 225) {
      return 'N';
    } else {
      return 'W';
    }
  }

}
