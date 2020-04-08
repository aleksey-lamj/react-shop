import React, { useState, useEffect } from 'react'
import './shop-item-info.css'
import { connect } from 'react-redux'
import { ButtonInCart } from '../shop-list-item/shop-list-item'
import { addToCart, allRemoveToCart } from '../../actions/actions'

const ShopItemInfo = (props) => {
    const {
        items,
        idItem,
        cart,
        addToCart,
        allRemoveToCart
    } = props

    const [item, setItem] = useState({})

    useEffect(() => {
        if (items.length) {
            setItem(() => {
                const [item] = items.filter(({ id }) => id === idItem)
                return {
                    ...item
                }
            })
            return
        }
    }, [idItem])
    const { category, title, price, image } = item
    return (
        <div className='info-item__wrap'>
            <div className='info-img'>
                <img src={image} alt={category} />
            </div>
            <div className='info-item'>
                <h4 className='item-title'>{title}</h4>
                <p className='description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cum ipsa dolorum! Architecto cumque consequatur, iusto suscipit repudiandae vitae dolore temporibus! Quos, accusamus deserunt! Inventore asperiores voluptatum praesentium ipsa quaerat porro dolorum fuga? Provident quam, quo nam vitae ipsam nisi dolorem, reprehenderit sed iure consectetur ipsum vel labore repellat tempora!
                </p>
                <h3 className='item-price'>{price} <span>₽</span></h3>

                <ButtonInCart cart={cart} id={idItem} addToCart={addToCart} allRemoveToCart={allRemoveToCart} />
            </div>
        </div>
    )
}
const mapStateToProps = ({ items, cart }) => {
    return {
        items: items.allItem,
        cart: cart.cartItems
    }
}
const mapDispatchToProps = {
    addToCart,
    allRemoveToCart
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopItemInfo)  