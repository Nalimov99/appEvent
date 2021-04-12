import {createStore} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./reducer/reducer"

const store = createStore(reducer, composeWithDevTools());
store.subscribe(() => {
    localStorage.setItem('cart', JSON.stringify(store.getState().cart))
})

export default store;