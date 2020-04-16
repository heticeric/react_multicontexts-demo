import React from 'react'

import { TransactionProvider } from '../../context/Transaction';
import AddTransaction from './AddTransaction';
import TransactionList from './TransactionList'
import IncomeExpenses from './IncomeExpense';
import Balance from './Balance'



const Transaction = () => {
    return (
        <div className="container">
            <TransactionProvider>
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </TransactionProvider>
        </div>
    )
}

export default Transaction;