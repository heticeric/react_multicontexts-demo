import React, { createContext, useContext, useReducer, useMemo } from 'react';
import TransactionReducer from './TransactionReducer'

const TransactionContext = createContext();

const TransactionProvider = props =>
{
    const [ state, dispatch ] = useReducer( TransactionReducer, { transactions: [] } );
    const value = useMemo( () => [ state, dispatch ],  [ state ] );

    return <TransactionContext.Provider value={ value } { ...props } />
}

// Custom hook
const useTransaction = () =>
{
    const context = useContext( TransactionContext );
    if ( !context )
    {
        throw new Error(`useTransaction must be used within a TransactionProvider`)
    }

    const [ state, dispatch ] = context;
    // Actions
    const addTransaction = transaction => dispatch( { type: 'ADD_TRANSACTION', payload: transaction } );
    const deleteTransaction = id => dispatch( { type: 'DELETE_TRANSACTION', payload: id } );

    return {
        transactions: state.transactions,
        dispatch,
        addTransaction,
        deleteTransaction
    }
}

export { TransactionProvider, useTransaction };

