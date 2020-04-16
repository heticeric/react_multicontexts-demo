// import React from 'react'

const transactionReducer = (state, action) =>
{
    switch (action.type)
    {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        default:
            throw new Error(`Unsupported action type: ${ action.type }`);
    }
}

export default transactionReducer;