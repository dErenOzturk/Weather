import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule } from '@angular/forms';
import { KelvinToCelsiusPipe } from './kelvin-to-celsius.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    KelvinToCelsiusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
