import React from 'react'
import LogoImage from '../images/logo.png'
import './nav.css'
import {FaWallet}from 'react-icons/fa'

const Navbar = () => {
    const navItems = [
        {
            id: 1,
            name: 'Home',
            link: '#'
        },
        {
            id: 2,
            name: 'About',
            link: '#'
        },
        {

            id: 3,
            name: 'Explore',
            link: '#'
        },
        {
            id: 4,
            name: 'Activity',
            link: '#'
        },
        {
            id: 5,
            name: 'Elements',
            link: '#'
        },
        {
            id: 6,
            name: 'Wallet',
            class:'wallet',
            icon: <FaWallet/>,
            link: '#'
        },
    ]
  return (
    <div className='nav-wrapper'>
        <div className='logo-image'>
           <img src={LogoImage} alt='logo' />
        </div>

        <div className='nav-list'>
            <ul className='nav-items'>
                {navItems.map((item) => {
                    return (
                        <li className={item.class} key={item.id}>
                            {item.icon}
                            {item.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default Navbar