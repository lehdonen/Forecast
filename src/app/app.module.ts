import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DegreePipe } from './pipes/degree.pipe';
import { LocaldatePipe } from './pipes/localdate.pipe';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ForecastComponent,
    HomeComponent,
    DegreePipe,
    LocaldatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDGSUkcmBwCTDzMAFuEBBarmuBpDUTibro'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
