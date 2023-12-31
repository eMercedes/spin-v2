import css from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import './Cash.scss'

interface CashcardPropTypes {
    className?: string
    title: string
    total: number
    change?: number
    status?: 'up' | 'down' | 'zero'
}

interface ICONProps {
    [icon: string]: IconProp
}
const ICONS: ICONProps = {
    up: faCaretUp,
    down: faCaretDown,
}

const CashCard = ({ className, title, total, change = 0, status = 'up' }: CashcardPropTypes) => (
    <div className={css('cash-card', className)}>
        <div className='title'>{title}</div>
        <div className='amount'>$ {(Math.round(total * 100) / 100).toFixed(2)}</div>
        <div className='change'>
            {change ? (
                <>
                    <FontAwesomeIcon className={css(status, 'me-2')} icon={ICONS[status]} />$ {(Math.round(change * 100) / 100).toFixed(2)}
                </>
            ) : (
                'No Change'
            )}
        </div>
    </div>
)

export default CashCard
