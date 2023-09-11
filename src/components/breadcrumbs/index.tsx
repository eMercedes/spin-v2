import { useLocation } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faTh } from '@fortawesome/free-solid-svg-icons'
import { faColumns } from '@fortawesome/free-solid-svg-icons'
import './Breadcrumbs.scss'

interface ICONProps {
    [icon: string]: IconProp
}
const ICONS: ICONProps = {
    financial: faHome,
    widgets: faTh,
    layout: faColumns,
}

const Breadcrumbs = () => {
    const location = useLocation()
    const locations = location.pathname.split('/')

    return (
        <Breadcrumb className='breadcrumbs'>
            <span className='head'>{locations[2]}</span>
            <Breadcrumb.Item className='ms-5'>
                <FontAwesomeIcon icon={ICONS[locations[2]]} />
            </Breadcrumb.Item>
            <Breadcrumb.Item>{locations[1]}</Breadcrumb.Item>
            <Breadcrumb.Item>{locations[2]}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default Breadcrumbs
