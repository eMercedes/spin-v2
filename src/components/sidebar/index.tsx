import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const SpinSide = () => {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar>
        <Menu>
          <SubMenu label='Charts'>
            <MenuItem> Pie charts</MenuItem>
            <MenuItem> Line charts</MenuItem>
            <MenuItem> Bar charts</MenuItem>
          </SubMenu>
          <SubMenu label='Maps'>
            <MenuItem> Google maps</MenuItem>
            <MenuItem> Open street maps</MenuItem>
          </SubMenu>
          <SubMenu label='Theme'>
            <MenuItem> Dark</MenuItem>
            <MenuItem> Light</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SpinSide;
