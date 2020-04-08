import React from 'react'

import './app.css'

import Header from '../header/header'
import ShoppingCart from '../shopping-cart/shopping-cart'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {
    AllItem,
    AllBoots,
    AllClothing,
    AllAccessories
} from '../pages'
import ShopItemInfo from '../shop-item-info/shop-item-info'


const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Switch>
                    <Route exact path='/' component={AllItem} />
                    <Route exact path="/boots" component={AllBoots} />
                    <Route exact path="/clothing" component={AllClothing} />
                    <Route exact path="/accessories" component={AllAccessories} />
                    <Route path="/*/:id" render={({ match }) => <ShopItemInfo idItem={+match.params.id} />} />
                    <Route path="/cart" component={ShoppingCart} />
                </Switch>
            </div>
        </BrowserRouter >
    )
}
export default App