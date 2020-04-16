import React from 'react';
import { useTransaction } from '../../context/Transaction'

const TransactionItem = ({ transaction }) =>
{
    const { deleteTransaction } = useTransaction()

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={ transaction.amount < 0 ? 'minus' : 'plus' }>
            { transaction.text } <span>{ transaction.amount > 0 && sign }{ (transaction.amount) } €</span> <span onClick={ () => deleteTransaction(transaction.id) } className="delete-btn">X</span>
        </li>
    )
}

export default TransactionItem;

