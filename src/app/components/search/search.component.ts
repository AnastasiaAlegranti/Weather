import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    public search: string;
    public weather: Weather;
    public regexAnnouncement: string;
    public messageToUser: string;

    @Output()
    public weatherEvent = new EventEmitter<Weather>();

    public constructor(private weatherService: WeatherService) { }

    public ngOnInit() {
        //Get user geolocation on init
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(
                position => {
                    let latitude = position.coords.latitude;
                    let longitude = position.coords.longitude;
                    let observable = this.weatherService.getWeather(latitude + "," + longitude);
                    observable.subscribe(w => this.weatherEvent.emit(w));
                }
            );
        };
    }

    public getTheWeather(): void {
        this.messageToUser = null;
        let observable = this.weatherService.getWeather(this.search);
        observable.subscribe(w => { this.weatherEvent.emit(w) }, error => { this.messageToUser = "Please enter a correct city name." });
    }

    public resetMessageToUser(event: any): void {
        this.messageToUser = null;
    }

    public filterRegex(event: any) {//Filter search tool
        let regex = /[^A-Za-z ]/;
        let search = event.key.replace(regex, "");
        if (search === "") {
            this.regexAnnouncement = "Please enter letters only in english language.";
            return false;
        }
        else {
            this.regexAnnouncement = null;
        }
        if (search === "Enter") {
            this.regexAnnouncement = null;
            this.getTheWeather();
            return true;
        }
    }

}
