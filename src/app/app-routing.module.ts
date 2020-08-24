import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './components/order/order.component'
import { AppComponent } from './app.component'

const routes: Routes = [
  { path: 'order' , component: OrderComponent},
  { path: '' , component: AppComponent},

  { path: '**', component:  AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
