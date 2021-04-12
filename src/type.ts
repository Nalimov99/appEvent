import {SHOP_REQUESTED, SHOP_LOADED, SHOP_ERROR, ADD_TO_CART, REMOVE_FROM_CART} from './actions/actionTypes'


export interface shopItem {
    id: number,
    image: string,
    name: string,
    price: number
}

export interface cartItem  extends shopItem{
    qty: number
}

export interface Cart {
    items: Array<cartItem>,
    totalPrice: number
}

export interface Shop {
    items: Array<shopItem>,
    response: {
        isLoading: boolean,
        hasError: boolean
    }
}

export interface RootState {
    shop: Shop,
    cart: Cart
}

interface IShopLoaded {
    type: typeof SHOP_LOADED,
    payload: Array<shopItem>
}

interface IShopRequested {
    type: typeof SHOP_REQUESTED
}

interface IShopError {
    type: typeof SHOP_ERROR,
    payload: string
}

interface IAddToCart {
    type: typeof ADD_TO_CART,
    payload: number
}

interface IRemoveFromCart {
    type: typeof REMOVE_FROM_CART,
    payload: number
}

export type ShopActionsType = IShopLoaded | IShopRequested | IShopError | IAddToCart | IRemoveFromCart