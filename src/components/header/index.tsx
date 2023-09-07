import React from 'react';
import { Image } from 'react-bootstrap';
import logo from 'assets/images/logo-primary-white@2X.png';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <Image className='logo' src={logo} />
    </div>
  );
};

export default Header;
