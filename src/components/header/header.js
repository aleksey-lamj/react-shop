import React from 'react'
import './header.css'
import NavBar from './nav-bar/nav-bar'
import MiniCart from './mini-cart/mini-cart'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1><Link to='/'> REACT shop </Link></h1>
            <div className="test">
                <NavBar />
                <MiniCart />
            </div>
        </header>
    )
}

export default Header