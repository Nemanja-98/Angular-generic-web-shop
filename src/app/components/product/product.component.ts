import { Component, Input, OnInit } from '@angular/core';
import { select, Store, } from '@ngrx/store';
import { AddToCart, RemoveFromCart } from '../../store/action';
import Product from '../../../assets/Product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private store: Store<{ items: []; cart: [] }>) {
    store.pipe(select('shop')).subscribe(data => {this.currentCart = data.cart})

  }

  currentCart :Product[]= [];

  @Input() product: Product;
  inCart :boolean = false;//this.currentCart.findIndex( item => item.name === this.product.name) !== -1 ;
  
  addToCart(item: Product) {
    
    this.store.dispatch(new AddToCart(item));
    this.inCart = true;
   // console.log(this.currentCart)
  }

  removeFromCart(item: Product) {
    this.store.dispatch(new RemoveFromCart(item));
    this.inCart = false;
  }
  ngOnInit() :void  {}
}