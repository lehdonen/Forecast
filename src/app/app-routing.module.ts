import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { CurrentComponent } from './components/current/current.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'forecast',
  component: ForecastComponent
},
{
  path: 'current',
  component: CurrentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
