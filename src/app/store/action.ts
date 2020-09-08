import { Action } from '@ngrx/store';
import Product from '../../assets/Product'

//import { createAction } from '@ngrx/store';
// interface Product {
//   name: string;
//   price: number;
//   description: string;
//   image: string;
// }

export enum ActionTypes {
  Add = '[Product] Add to cart',
  Remove = '[Product] Remove from cart',
  LoadItems = '[Product] Load items from server',
  LoadSuccess = '[Product] Load success',
  UpdateInCart = '[Product] Update inCart',
  ReduceQuantity = '[Product] Reduce quantity'
}

export class AddToCart implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: Product) {}
}

export class GetItems implements Action {
  readonly type = ActionTypes.LoadItems;
}

export class RemoveFromCart implements Action {
  readonly type = ActionTypes.Remove;

  constructor(public payload: Product) {}
}

export class LoadItems implements Action {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public payload: Product[]) {}
}

export class UpdateProduct implements Action {
  readonly type = ActionTypes.UpdateInCart;
  
  constructor(public payload: Product){}
}

export class ReduceProductQuantity implements Action {
  readonly type = ActionTypes.ReduceQuantity;
  
  constructor(public payload: Product,public number : number){}
}

export type ActionsUnion = AddToCart | RemoveFromCart | LoadItems | GetItems | UpdateProduct | ReduceProductQuantity;  