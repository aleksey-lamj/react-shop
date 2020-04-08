import React, { useState, useEffect } from 'react'
import './shop-list-item.css'
import { connect } from 'react-redux'
import { addToCart, allRemoveToCart } from '../../actions/actions'
import cn from 'classnames'

export const ButtonInCart = ({ cart, id, addToCart, allRemoveToCart }) => {

    const [itemInCart, setItemInCart] = useState(false)
    const item = cart.filter(item => item.id === id)

    useEffect(() => {
        if (item.length > 0) {
            setItemInCart(true)
            return
        }
        setItemInCart(false)
    }, [cart])

    const classButton = cn({
        'item-button': true,
        'item-in-cart': itemInCart
    })
    return (
        itemInCart ? 
        <button className={classButton}
        onClick={() => allRemoveToCart(id)}>
            Товар в корзине
        </button>
        :  
        <button className={classButton}
        onClick={() => addToCart(id)}>
        Добавить в корзину
        </button>
    )
}
const ShopListItem = ({ id, title, category, price, image, addToCart, allRemoveToCart, cart, showInfo }) => {

    return (
        <div className="shop-item">

            <div className="img-wrap" onClick={() => showInfo(category, id)}>
                <img src={image} alt={category} />
            </div>

            <h4 className="item-title">{title}</h4>
            <h3 className="item-price">{price} <span>₽</span></h3>

            <ButtonInCart cart={cart} id={id} addToCart={addToCart} allRemoveToCart={allRemoveToCart} />
    
        </div>
    )
}

const mapStateToProps = ({ cart }) => {
    return {
        cart: cart.cartItems
    }
}
const mapDispatchToProps = {
    addToCart,
    allRemoveToCart
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopListItem) 