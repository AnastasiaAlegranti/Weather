import { Component, Input } from '@angular/core';
import { Weather } from 'src/app/models/weather';

@Component({
    selector: 'app-current-weather',
    templateUrl: './current-weather.component.html',
    styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {
    @Input()
    public weather: Weather;
    
    @Input()
    public dayIndex:number=0;
}
