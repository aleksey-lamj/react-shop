import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav-bar.css'


const NavBar = () => {
    let id = 1;
    const navigation = [
        {
            label: 'Одежда',
            href: '/clothing'
        },
        {
            label: 'Обувь',
            href: '/boots'
        },
        {
            label: 'Аксессуары',
            href: '/accessories'
        }
    ]
     const renderNavigation = navigation.map(({label, href}) => {
         return (
             <li key={id++} className='nav-list'>
                 <NavLink to={href} activeClassName='active'> {label} </NavLink>
             </li>
         )
     })

    return (
            <nav>
                <ul className="ul-menu">
                    {renderNavigation}
                </ul>
            </nav>
    )
}
export default NavBar