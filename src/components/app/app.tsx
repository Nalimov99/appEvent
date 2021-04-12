import React from 'react'
import {Switch, Route} from 'react-router-dom'

import './app.scss'

import Header from '../header/header'
import ShopPage from '../shopPage/shopPage'
import CartPage from '../cartPage/cartPage'
import NotFound from '../notFound/notFound'



export default class App extends React.Component{
    render() {
        return(
            <div className="app">
                <Header/>
                 <Switch>
                    <Route exact path="/" component={ShopPage}></Route> 
                    <Route exact path='/cart/' component={CartPage}></Route> 
                    <Route component={NotFound}></Route>
                </Switch>   
            </div>
        )
    }
}