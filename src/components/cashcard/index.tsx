import React from 'react'
import './Cashcard.scss'

interface CashcardPropTypes {
    title: string
    total: number
    change: number
}

const CashCard = ({ title, total, change }: CashcardPropTypes) => (
    <div className='cash-card'>
        <div className='title'>{title}</div>
        <div className='amount'>$ {total}</div>
        <div className='change'>${change}</div>
    </div>
)

export default CashCard
