import { Pie } from 'react-chartjs-2'
import Cash from 'components/cards/cash'
import './Financial.scss'

function Financial() {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }
    return (
        <div className='financial'>
            <div className='status'>
                <Cash title='Main Fundings' total={694} change={30} />
                <Cash className='ms-3' title='Invoices' total={254} change={828} status='down' />
                <Cash className='ms-3' title='Accounts Receivable' total={346} change={663} />
                <Cash className='ms-3' title='Secure Holdings' total={7} status='zero' />
            </div>
            <div className='pt-5'>
                <Pie className='pie-chart' data={data} />
            </div>
        </div>
    )
}

export default Financial
