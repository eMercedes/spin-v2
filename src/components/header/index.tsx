import React from 'react'
import { useDispatch } from 'react-redux'
import { Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from 'assets/images/logo-primary-white@2X.png'
import * as actions from 'interfaces/redux'
import './Header.scss'

const Header = () => {
    const dispatch = useDispatch()
    const handleToggle = () => {
        console.log('test')
        dispatch({ type: actions.TOGGLE_REQUEST, target: 'left' })
    }

    return (
        <div className='header'>
            <Image className='logo' src={logo} />
            <div className='toggle' onClick={() => handleToggle()}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    )
}

export default Header
