import React from 'react'
import './shopping-cart.css'
import { connect } from 'react-redux'


import {
  addToCart,
  removeToCart,
  allRemoveToCart
} from '../../actions/actions'

const ShoppingCart = ({ cart, addToCart, removeToCart, allRemoveToCart }) => {

  const renderRow = (item, i) => {
    const { id, title, price, count } = item
    return (
      <tr key={id}>
        <td>{i + 1}</td>
        <td>{title}</td>
        <td>
          <button className='dec' onClick={() => removeToCart(id)}>-</button>
          {count}
          <button className='inc' onClick={() => addToCart(id)}>+</button>
        </td>
        <td>{price}  <span>₽</span></td>
        <td>
          <button className='del' onClick={() => allRemoveToCart(id)}>x</button>
        </td>
      </tr>
    )
  }
  const totalPrice = cart.reduce((t, pr) => {
    return t + pr.price;
  }, 0);
  return (
    cart.length ?
      <div>
        <table>
          <thead>
            <tr className="thead-tr">
              <th> # </th>
              <th> Товар  </th>
              <th> Кол-во </th>
              <th> Цена </th>
              <th> Очистить </th>
            </tr>
          </thead>
          <tbody>
            {cart.map(renderRow)}
          </tbody>
        </table>
        <h3 className="total-price">Итого: {totalPrice} <span>₽</span></h3>
      </div>
      :
      <div className='empty-cart'>Ваша корзина пуста</div>
  )
}
const mapStateToProps = ({ cart }) => {
  return {
    cart: cart.cartItems
  }
}
const mapDispatchToProps = {
  addToCart,
  removeToCart,
  allRemoveToCart
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart) 