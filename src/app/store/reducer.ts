//import {Action} from '@ngrx/store';
import { ActionsUnion, ActionTypes } from '../store/action';
import { Shop } from 'src/assets/Shop';


export const initialState : Shop = {
  items: [],
  cart: [],
};

export function ShopReducer(state : Shop = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.LoadSuccess:
      console.log('LoadSuccess:', state, action.payload);
      return {
        ...state,
        items: [...action.payload],
      };

    case ActionTypes.Add:
      const matchingElements = state.cart.filter(
        (item) => item.name == action.payload.name
      );
      if (matchingElements.length === 0) {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart.map((item) => {
              if (item.name == action.payload.name)
                return { ...item, quantity: item.quantity + 1 };
              return item;
            }),
          ],
        };
      }

    case ActionTypes.Remove:
      return {
        ...state,
        cart: [
          ...state.cart.filter((item) => item.name !== action.payload.name),
        ],
      };

    case ActionTypes.UpdateInCart:
      return {
        ...state,
        cart: [
          ...state.cart.map((item) => {
            if (item.name === action.payload.name)
              return { ...item, inCart: false };
            return item;
          }),
        ],
      };

    case ActionTypes.ReduceQuantity:
      return {
        ...state,
        cart: [
          ...state.cart.map((item) => {
            if (item.name == action.payload.name)
              return { ...item, quantity: item.quantity - 1 };
            return item;
          }),
        ],
      };

    default:
      return state;
  }
}
