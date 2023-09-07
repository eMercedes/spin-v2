import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.scss';

const SpinSide = () => {
  return (
    <Sidebar className='sidebar'>
      <Menu>
        <SubMenu icon={<FontAwesomeIcon icon={faPenNib} />} label='Charts'>
          <MenuItem> Pie charts</MenuItem>
          <MenuItem> Line charts</MenuItem>
          <MenuItem> Bar charts</MenuItem>
        </SubMenu>
        <SubMenu icon={<FontAwesomeIcon icon={faPenNib} />} label='Maps'>
          <MenuItem> Google maps</MenuItem>
          <MenuItem> Open street maps</MenuItem>
        </SubMenu>
        <SubMenu suffix='🔥' icon={<FontAwesomeIcon icon={faEnvelope} />} label='Theme'>
          <MenuItem> Dark</MenuItem>
          <MenuItem> Light</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default SpinSide;
