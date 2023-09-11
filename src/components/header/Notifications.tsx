import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

const Notifications = () => {
    return (
        <DropdownButton
            as={ButtonGroup}
            key='notifications'
            id='dropdown-notifications'
            title={
                <>
                    <FontAwesomeIcon icon={faBell} />
                    <span className='badge badge-pill badge-success notify'>9</span>
                </>
            }
        >
            <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
            <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
            <Dropdown.Item eventKey='3' active>
                Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item>
        </DropdownButton>
    )
}

export default Notifications
