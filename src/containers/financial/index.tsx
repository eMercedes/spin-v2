import Cashcard from 'components/cashcard'
import './Financial.scss'

function Financial() {
    return (
        <div className='financial'>
            <div className='status'>
                <Cashcard title='Main Fundings' total={694} change={30} />
                <Cashcard className='ms-3' title='Invoices' total={254} change={828} status='down' />
                <Cashcard className='ms-3' title='Accounts Receivable' total={346} change={663} />
                <Cashcard className='ms-3' title='Secure Holdings' total={7} status='zero' />
            </div>
        </div>
    )
}

export default Financial
