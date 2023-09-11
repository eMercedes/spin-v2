import React from 'react'
import Cashcard from 'components/cashcard'
import './Financial.scss'

function Financial() {
    return (
        <div className='financial'>
            <div className='status'>
                <Cashcard title='Main Fundings' total={694} change={30} />
            </div>
        </div>
    )
}

export default Financial
