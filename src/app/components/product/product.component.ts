import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddToCart, RemoveFromCart } from '../../store/action';
import Product from '../../../assets/Product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private store: Store<{ items: []; cart: [] }>) {}

  inCart = false;
  @Input() product: Product;

  addToCart(item: Product) {
    this.store.dispatch(new AddToCart(item));
    this.inCart = true;
  }

  removeFromCart(item: Product) {
    this.store.dispatch(new RemoveFromCart(item));
    this.inCart = false;
  }
  ngOnInit() :void  {}
}