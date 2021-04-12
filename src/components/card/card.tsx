import React from 'react'
import {connect, ConnectedProps} from 'react-redux'

import {shopItem} from '../../type'
import {addToCart} from '../../actions/actions'
import './card.scss'


type OwnProps = {
    data: shopItem
}



const mapDispatchToProps = {addToCart}

const connector = connect(null, mapDispatchToProps)
type Props = ConnectedProps<typeof connector> & OwnProps



class Card extends React.Component<Props> {    
    render() {
        const {addToCart} = this.props
        const {data} = this.props
        return (
            <li className="card">
                <h2 className="card__title">{data.name}</h2>
                <div className="card__img">
                    <img src={data.image} alt={data.name}/>
                </div>
                <div className="card__price">{data.price} ₽</div>
                <button className="card__btn" onClick={() => addToCart(data.id)}>Добавить в корзину</button>
            </li>
        )
    }
}

export default connector(Card)