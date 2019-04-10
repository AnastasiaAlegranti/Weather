import { Component } from '@angular/core';
import { Weather } from 'src/app/models/weather';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public weather: Weather;
    public dayIndex: number = 0;

    public getWeather($event) {
        this.weather = $event;
    }
    public getDayIndex($event) {
        this.dayIndex = $event;
    }
}
