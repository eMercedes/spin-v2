import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Image from 'react-bootstrap/Image'
import avatar from 'assets/images/avatars/avatar-5.jpg'

const Profile = () => {
    return (
        <DropdownButton
            as={ButtonGroup}
            key='profile'
            id='dropdown-profile'
            title={
                <>
                    <span className='me-2'>Hiroki Moto</span>
                    <Image src={avatar} roundedCircle />
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

export default Profile
