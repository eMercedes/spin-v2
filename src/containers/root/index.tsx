import React from 'react';
import { Header, Sidebar } from 'components';

function Root() {
  return (
    <div className='app'>
      <Header />
      <div className='content'>
        <Sidebar />
      </div>
    </div>
  );
}

export default Root;
