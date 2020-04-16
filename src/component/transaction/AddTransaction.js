import React, { useState } from 'react'
import { useTransaction } from '../../context/Transaction';

const AddTransaction = () =>
{
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useTransaction()

  const onSubmit = e =>
  {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: Number(amount)
    }

    text !== "" && amount !== "" && addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Ajouter une nouvelle transaction</h3>
      <form onSubmit={ onSubmit }>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input type="text" value={ text } onChange={ (e) => setText(e.target.value) } placeholder="Entrer la transaction..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Montant</label>
          <input type="number" value={ amount } onChange={ (e) => setAmount(e.target.value) } />
        </div>
        <button className="btn">Ajouter une transaction</button>
      </form>
    </>
  )
}

export default AddTransaction;