import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './components/order/order.component'
import { AppComponent } from './app.component'
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {HomeComponent} from './components/home/home.component'
const routes: Routes = [
  { path: 'order' , component: OrderComponent},
  { path: 'shop' , component: HomeComponent},
  
  { path: '' , component: LandingPageComponent},

  { path: '**', component:  LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
