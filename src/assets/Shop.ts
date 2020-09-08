import { Product } from './Product'

export interface Shop {
    items: Product[],
    cart: Product[],
}

export interface AppState {
    shop: Shop
}