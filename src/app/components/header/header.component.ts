import { Component, OnInit, Input} from '@angular/core';
import Product from '../../../assets/Product';
import { select, Store } from '@ngrx/store';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<{ items: []; cart: [] }>) {
    store.pipe(select('shop')).subscribe(data => {this.cart = data.cart});
  }

  cart :Product[]= [] ;
  ngOnInit(): void {
  }

}