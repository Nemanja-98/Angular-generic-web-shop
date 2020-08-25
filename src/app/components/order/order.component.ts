import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../assets/Product'

import { select, Store, createAction, props } from '@ngrx/store';
import { Router } from '@angular/router';
import { ShopReducer } from '../../store/reducer'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private store: Store<{ items: []; cart: [] }>, private router: Router) {
    store.pipe(select('shop')).subscribe(data => {this.contents = data.cart});
   }
  contents : Product[];
  total=0
  ngOnInit(): void {
    this.contents.forEach( item =>{
      this.total+= item.price*item.quantity;
    })
  }

  btnConfirm(){
    this.contents = [];
    this.total = 0; 
    setTimeout(() => {
      this.router.navigate([''])  
    }, 1000);
    
  }
}
