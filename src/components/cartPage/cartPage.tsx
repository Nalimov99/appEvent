import React from 'react'
import {connect, ConnectedProps} from 'react-redux'

import {RootState} from '../../type'
import './cart.scss'
import {removeFromCart} from '../../actions/actions'

const mapStateToProps = (state:RootState) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {removeFromCart}

const connector = connect(mapStateToProps, mapDispatchToProps)
type Props = ConnectedProps<typeof connector>

class CartPage extends React.Component<Props> {

    renderView = (component:JSX.Element[]) => {
        if(component.length === 0) {
            return (
                <h2>В корзине нет товаров!</h2>
            )
        }
        return (
            <>
                <ul className="cart__items">
                    {component}
                </ul>
                <div className="cart__total-price"><span>Всего: </span> {this.props.cart.totalPrice} ₽</div>
            </>
        )
    }


    render() {
        const {items} = this.props.cart
        const Products = items.map(value => {
            return (
                <li key={value.id} className="cart__item">
                    <div className="cart__img">
                        <img src={value.image} alt={value.name}/>
                    </div>
                    <div className="cart__title">{value.name}</div>
                    <div>{value.qty} </div>
                    <div className="cart__price">{value.price} ₽</div>
                    <div className="cart__close" onClick={() => this.props.removeFromCart(value.id)}>&times;</div>
                </li>
            )
        })
        return (
            <div className="cart">
                {this.renderView(Products)}
            </div>
            
        )
    }
}

export default connector(CartPage)