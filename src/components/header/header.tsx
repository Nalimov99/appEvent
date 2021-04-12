import React from 'react'
import {Link} from 'react-router-dom'
import {connect, ConnectedProps} from 'react-redux'

import './header.scss'
import logo from './logo_white.png'
import cartIcon from './shopping-cart-solid.svg'
import {RootState} from '../../type'

const mapStateToProps = (state: RootState) => {
    return {
        cart: state.cart
    }
}

const connector = connect(mapStateToProps)
type Props = ConnectedProps<typeof connector>

class Header extends React.Component<Props> {
    
    displayQty = (qty:number) => {
        if(qty === 0) {
            return (
                <div className="header__cart-image">
                    <img src={cartIcon} alt="cart"/>
                </div>
            )
            
        }
        return (
            <>
                <div className='header__qty'>
                    {qty}
                </div>
                <div className="header__checkout">Оформить заказ</div>
            </>
        )
    }

    render() {
        //Находим сумму всех элементов в корзине
        const productsQty = this.props.cart.items.reduce((a, b) => a + b.qty, 0)
        return (
            <header className="header">
                <Link to='/' className="header__logo">
                    <img src={logo} alt="logo"/>
                </Link>
                <Link to="/cart" className="header__cart">
                    {this.displayQty(productsQty)}
                </Link>
            </header>
        )
    }
}

export default connector(Header)

