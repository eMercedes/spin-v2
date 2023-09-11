import css from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import './Cashcard.scss'

interface CashcardPropTypes {
    className?: string
    title: string
    total: number
    change?: number
    status?: 'up' | 'down' | 'zero'
}

const CashCard = ({ className, title, total, change = 0, status = 'up' }: CashcardPropTypes) => (
    <div className={css('cash-card', className)}>
        <div className='title'>{title}</div>
        <div className='amount'>$ {total}</div>
        <div className='change'>
            {change ? (
                <>
                    <FontAwesomeIcon className={css(status, 'me-2')} icon={faCaretUp} />$ {change}
                </>
            ) : (
                'No Change'
            )}
        </div>
    </div>
)

export default CashCard
