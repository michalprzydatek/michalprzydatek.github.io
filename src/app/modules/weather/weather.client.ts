import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class WeatherClient {

  constructor(private http: HttpClient) { }

  findWeather() {
    const options = {
      params: new HttpParams()
        .set('q', 'blonie,pl')
        .set('units', 'metric'),
      headers: new HttpHeaders()
        .set('x-rapidapi-key', 'eb98ce99a6msh6bf6398872a6312p156ae5jsn4333573c9aa5')
        .set('x-rapidapi-hos', 'community-open-weather-map.p.rapidapi.com')
    };

    return this.http.get<any>('https://community-open-weather-map.p.rapidapi.com/forecast', options);
  }

}
