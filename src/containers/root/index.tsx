import { Outlet } from 'react-router-dom'
import { Header, Sidebar } from 'components'

function Root() {
    return (
        <div className='app'>
            <Header />
            <div className='content'>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default Root
