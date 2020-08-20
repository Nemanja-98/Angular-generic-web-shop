import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from '../store/action';
import { ProductsService } from '../services/products.service';

@Injectable()
export class ShopEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
  
  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(() =>
      this.productsService.getAll().pipe(
        map(products => {
          console.log(products," products ssss");
          return { type: ActionTypes.LoadSuccess, payload: products };
        }),
        catchError(() => EMPTY)
      )
    )
  );
}