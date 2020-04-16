import React from 'react';
import { useTransaction } from '../../context/Transaction'

const IncomeExpenses = () =>
{
    const { transactions } = useTransaction();

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts.filter(amount => amount > 0).reduce((acc, amount) => (acc += amount), 0);

    const expense = amounts.filter(amount => amount < 0).reduce((acc, amount) => (acc += amount), 0);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Revenus</h4>
                <p className="money plus">{ income }</p>
            </div>
            <div>
                <h4>Dépenses</h4>
                <p className="money minus">{ expense > 0 && "-" }{ expense }</p>
            </div>
        </div>
    )
}

export default IncomeExpenses;
