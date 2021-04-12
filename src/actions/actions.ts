import {SHOP_REQUESTED, SHOP_LOADED, SHOP_ERROR, ADD_TO_CART, REMOVE_FROM_CART} from './actionTypes'
import {shopItem, ShopActionsType} from '../type'

const shopRequested = ():ShopActionsType => {
    return {
        type: SHOP_REQUESTED
    }
}

const shopLoaded = (newShop: Array<shopItem>):ShopActionsType => {
    return {
        type: SHOP_LOADED,
        payload: newShop
    }
}

const shopError = (errorMessage: string):ShopActionsType => {
    return {
        type: SHOP_ERROR,
        payload: errorMessage
    }
}

const addToCart = (id: number):ShopActionsType => {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}

const removeFromCart = (id: number):ShopActionsType => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export {shopRequested,shopLoaded, shopError, addToCart, removeFromCart}