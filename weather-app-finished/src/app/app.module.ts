import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule } from '@angular/forms';
import { KelvinToCelsiusPipe } from './kelvin-to-celsius.pipe';
import { HeaderComponent } from './header/header.component';
import { SehirlerComponent } from './sehirler/sehirler.component';
import { AnaSayfaComponent } from './ana-sayfa/ana-sayfa.component';
import { SehirlerListesiComponent } from './sehirler-listesi/sehirler-listesi.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    KelvinToCelsiusPipe,
    HeaderComponent,
    SehirlerComponent,
    AnaSayfaComponent,
    SehirlerListesiComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
