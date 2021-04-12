import React from 'react'
import {connect, ConnectedProps} from 'react-redux'


import './shop.scss'

import {RootState} from '../../type'
import {shopRequested, shopLoaded, shopError} from '../../actions/actions'
import Products from '../../services/products'
import Card from '../card/card'

const mapStateToProps = (state:RootState) => {
    return {
        shop: {
            items: state.shop.items,
            response: {
                isLoading: state.shop.response.isLoading,
                hasError: state.shop.response.hasError
            }
        }
    }
}

const mapDispatchToProps = { 
    shopRequested,
    shopLoaded,
    shopError
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type Props = ConnectedProps<typeof connector>


class shopPage extends React.Component<Props> {
    componentDidMount() {
        this.props.shopRequested()
        Products.getProducts()
            .then(res => {
                this.props.shopLoaded(res.items)
            })
    }



    render() {
        const {shop} = this.props
        const items = shop.items.map(value => {
            return(
                <Card
                    key={value.id}
                    data={value}
                />
            )
        })
        return (
            <ul className="shop">
                {items}
            </ul>
        )
    }
}



export default connector(shopPage)