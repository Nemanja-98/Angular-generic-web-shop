import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetItems } from '../../store/action';
//import { ProductComponent } from '../product/product.component';
import { Observable } from 'rxjs';
import Product from 'src/assets/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products$ : Observable<Product[]>; 
  constructor(private store: Store<{ items: Product[]; cart: [] }>) {
    // this.products$ = store.pipe(select('items'));
    // console.log(this.products$);
    store.pipe(select('shop')).subscribe(data => {this.items = data.items});
 
  }

  items: Product[] = [];

  ngOnInit() {
    this.store.dispatch(new GetItems());
  }
}