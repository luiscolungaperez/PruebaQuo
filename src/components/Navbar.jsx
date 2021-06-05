import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/navbar.css';

const Navbar = () => {
  return (
    <header className='header'>
      <ul className='navbar'>
        <li><Link to='/'>Climas</Link></li>
        <li><Link to='/favorites'>Favoritos</Link></li>
      </ul>
    </header>
  );
}

export default Navbar;