import { Component, OnInit, Input} from '@angular/core';
import Product from '../../../assets/Product';
import { select, Store, createAction, props } from '@ngrx/store';
import { ShopEffects } from 'src/app/store/effects';
import { ShopReducer } from 'src/app/store/reducer';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActionTypes } from 'src/app/store/action';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartClicked : Boolean = false;
  constructor(private store: Store<{ items: []; cart: [] }>) {
    store.pipe(select('shop')).subscribe(data => {this.cart = data.cart});
  }

  cart :Product[]= [] ;
  ngOnInit(): void {
  }

  cartToggle(){
    this.cartClicked = !this.cartClicked;
  }

  btnClicked(event : any,product_name : string, num : number){
    const label = event.target.parentNode.childNodes[1];
    label.innerHTML = String(Number(label.innerHTML) + num);
    if(Number(label.innerHTML)===0){
      const remove = createAction('[Product] Remove from cart', props<{payload:{ name : string}}>())

      const update = createAction('[Product] Update inCart', props<{payload:{ name : string}}>())
      

      this.store.dispatch(update({payload:{name:product_name}}));
      this.store.dispatch(remove({payload:{name:product_name}}));

      
      console.log("yooo removed imtes?",this.cart);
    }
  }
}