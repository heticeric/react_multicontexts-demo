import React from 'react';
import { useTransaction } from '../../context/Transaction'

const Balance = () =>
{
    const { transactions } = useTransaction();

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0);

    return (
        <>
            <h4>Votre Balance</h4>
            <h1>{ total } €</h1>
        </>
    )
}

export default Balance;
