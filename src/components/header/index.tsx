import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Profile from './Profile'
import Messages from './Messages'
import Notifications from './Notifications'
import logo from 'assets/images/logo-primary-white@2X.png'
import * as actions from 'interfaces/redux'
import './Header.scss'

const Header = () => {
    const dispatch = useDispatch()
    const handleToggle = () => {
        dispatch({ type: actions.TOGGLE_REQUEST, target: 'left' })
    }

    return (
        <div className='header'>
            <Image className='logo' src={logo} />
            <Button variant='dark' onClick={() => handleToggle()}>
                <FontAwesomeIcon icon={faBars} />
            </Button>
            <div className='user'>
                <Notifications />
                <Messages />
                <Profile />
                <Button variant='dark'>
                    <FontAwesomeIcon icon={faBars} />
                </Button>
            </div>
        </div>
    )
}

export default Header
