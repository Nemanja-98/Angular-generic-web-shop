import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetItems } from '../../store/action';
//import { ProductComponent } from '../product/product.component';
import { Observable } from 'rxjs';
import Product from 'src/assets/Product';
import { AppState } from 'src/assets/Shop'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products$ : Observable<Product[]>; 
  constructor(private store: Store<AppState>) {
    // this.products$ = store.pipe(select('items'));
    // console.log(this.products$);
    store.pipe(select('shop')).subscribe(data => {this.items = data.items});
 
  }

  items: Product[] ;

  ngOnInit() {
    this.store.dispatch(new GetItems());
  }

  // filterClick(event) {
  //   event.target.className === "filterOn"
  //     ? (event.target.className = "filterOff")
  //     : (event.target.className = "filterOn");
  //   this.filterDisplay();
  // }

  filterDisplay(){
    
    const filters = document.querySelector(".filterVrsta");
    console.log("display filter",filters.childNodes[1].childNodes[0]);
    let nizVrsta = [];
    filters.childNodes.forEach(el => {
     // if(el.childNodes[0].checked)
        nizVrsta.push() //gruni text sto je  pored checkbox u niz.
    });

  }
}