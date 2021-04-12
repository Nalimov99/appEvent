import {ShopActionsType, RootState, Cart, Shop} from '../type'

const initialShopState:Shop = {
        items: [],
        response: {
            isLoading: true,
            hasError: false,
        }
}

const initialCartState:Cart = {
    items: [],
    totalPrice: 0
}


const localState:Cart = JSON.parse(localStorage.getItem('cart') || '{}')
const getState = ():RootState => {
    if(localState) {
        return {
            shop: initialShopState,
            cart: localState
        }
    }
    return {
        shop: initialShopState,
        cart: initialCartState
    }
}


const presistedState:RootState = getState()


const reducer = (state = presistedState, action: ShopActionsType):RootState => {
    switch (action.type) {
        case 'SHOP_REQUESTED':
            return {
                ...state,
                shop: {
                    ...state.shop,
                    response: {
                        isLoading: true,
                        hasError: false
                    }
                }
            }
        case 'SHOP_LOADED':
            return {
                ...state,
                shop: {
                    items: action.payload,
                    response: {
                        isLoading: false,
                        hasError: false
                    }
                }
            }
        case 'SHOP_ERROR':
            return {
                ...state,
                shop: {
                    ...state.shop,
                    response: {
                        isLoading: false,
                        hasError: false
                    }
                }
            }
        case 'ADD_TO_CART': 
            const id = action.payload;
            const productInShop = state.shop.items.find(value => value.id === id)
            const productInCart = state.cart.items.find(elem => elem.id === id)
            //Если товар есть в корзине
            if(productInCart) {
                productInCart.qty += 1
                const prodIdx = state.cart.items.findIndex(prod => prod.id === productInCart.id)
                return {
                    ...state,
                    cart: {
                        items: [
                            ...state.cart.items.slice(0, prodIdx),
                            productInCart,
                            ...state.cart.items.slice(prodIdx + 1)
                        ],
                        totalPrice: state.cart.totalPrice + productInCart.price
                    }
                }
            }
            //если товара нет корзине
            if(productInShop) {
                const newProd = {
                    id: productInShop.id,
                    price: productInShop.price,
                    image: productInShop.image,
                    name: productInShop.name,
                    qty: 1 
                }
                const newCart = [...state.cart.items, newProd]
                return {
                    ...state,
                    cart: {
                        items: newCart,
                        totalPrice: state.cart.totalPrice + newProd.price
                    }
    
                }
            }
            //Ошибка
            return {
                ...state
            }
        case 'REMOVE_FROM_CART': {
            const id = action.payload
            const removedProduct = state.cart.items.find(elem => elem.id === id);
            const updatedCart = state.cart.items.filter(elem => elem.id !== id)
            return {
                ...state,
                cart: {
                    items: updatedCart,
                    totalPrice: state.cart.totalPrice - (removedProduct!.price * removedProduct!.qty)
                }
            }
        }
        
        default:
            return state;
    }

}

export default reducer;