import React from 'react';
import { useTransaction } from '../../context/Transaction'
import TransactionItem from './TransactionItem';

export const TransactionList = () =>
{
  const { transactions } = useTransaction();

  return (
  <>
    {
      transactions.length
      ? 
      (
        <>
          <h3>Historique</h3>
          <ul className="list">
          {
            transactions.map(transaction => (<TransactionItem key={ transaction.id } transaction={ transaction } />))
          }
          </ul>
        </>
      )
      : <h3>No transactions</h3>
    }
  </>
  )
}

export default TransactionList;
