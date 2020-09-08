import { Component, OnInit, Input} from '@angular/core';
import Product from '../../../assets/Product';
import { select, Store, createAction, props, StoreRootModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShopEffects } from 'src/app/store/effects';
import { ShopReducer } from 'src/app/store/reducer';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActionTypes } from 'src/app/store/action';
import { Actions } from '@ngrx/effects';
import { AppState } from 'src/assets/Shop';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartClicked : Boolean = false;
  
  isLoggedIn :boolean = false;
  cart :Product[] ;

  //count$ : Observable<Product[]>;
  constructor(private store: Store<AppState>) {
    store.pipe(select('shop')).subscribe(data  => {this.cart = data.cart});
    //this.count$ = store.pipe(select('cart'));
  }

  ngOnInit(): void {
  }

  cartToggle(){
    this.cartClicked = !this.cartClicked;
  }

  btnClicked(event : any,product_name : string, num : number){
    const label = event.target.parentNode.childNodes[1];
    label.innerHTML = String(Number(label.innerHTML) + num);
    
    const addOne = createAction('[Product] Add to cart',props<{ payload : { name : string } }>() );
    const removeOne = createAction('[Product] Reduce quantity',props<{ payload : { name : string } }>() );

    num===1 ?   this.store.dispatch(addOne({payload:{name:product_name}})) :  this.store.dispatch(removeOne({payload:{name:product_name}}));
 
    console.log("btn clicked",label.innerHTML,event);
    if(Number(label.innerHTML)===0){
      console.log("passed if");
      const remove = createAction('[Product] Remove from cart', props<{ payload : { name : string}}>())

      const update = createAction('[Product] Update inCart', props<{ payload : { name : string}}>())
      

      this.store.dispatch(update({payload:{name:product_name}}));
      this.store.dispatch(remove({payload:{name:product_name}}));
    }
  }

  loggedIn(username:string){
    console.log("checking",username);
    if(!username){
      this.isLoggedIn = false;
      console.log("signing out");
      //this.store.dispatch(new actions.Delete(username));
      return
    }
    console.log("checking",username);
    if(username.length!=0){
      console.log("logging in");
      this.isLoggedIn = true;
    }
      
  }
}