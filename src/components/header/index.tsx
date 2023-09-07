import React from 'react';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from 'assets/images/logo-primary-white@2X.png';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <Image className='logo' src={logo} />
      <div className='toggle'>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
};

export default Header;
