import { Outlet } from 'react-router-dom'
import Header from 'components/header'
import Sidebar from 'components/sidebar'

function Dashboard() {
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

export default Dashboard
