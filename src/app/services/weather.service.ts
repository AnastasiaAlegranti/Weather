import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    public constructor(private httpClient: HttpClient) { }

    public getWeather(city: string): Observable<Weather> {
        return this.httpClient.get<Weather>("https://api.apixu.com/v1/forecast.json?key=134b4880cefe44fdb7a202313180512&q=" + city+"&days=7");
    }
}
