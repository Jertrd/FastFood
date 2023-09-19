import React from 'react';
import logoIcon from '../../img/logo.png';
import './style.css';

export const Navbar = () => {
  return (
    <div className='header'>
        <img src={logoIcon} alt="logo" />
        <nav>
            <ul>
                <li>Home</li>
                <li>Catalog</li>
                <li>Contact us</li>
                <li>Delivery now</li>
            </ul>
        </nav>
        <button type='submit'>Sign in</button>
    </div>
  )
}
