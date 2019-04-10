import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ForecastWeatherComponent } from './components/forecast-weather/forecast-weather.component';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        CurrentWeatherComponent,
        HomeComponent,
        SearchComponent,
        ForecastWeatherComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule { }
