import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Weather } from 'src/app/models/weather';

@Component({
    selector: 'app-forecast-weather',
    templateUrl: './forecast-weather.component.html',
    styleUrls: ['./forecast-weather.component.css']
})
export class ForecastWeatherComponent {

    @Input()
    public weather: Weather;
  
    @Output()
    public dayIndex= new EventEmitter<number>();

    public getDayNumber(i:number){
        this.dayIndex.emit(i);       
    }
}
