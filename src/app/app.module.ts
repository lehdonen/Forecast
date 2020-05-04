import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { CurrentComponent } from './components/current/current.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ForecastComponent,
    CurrentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
