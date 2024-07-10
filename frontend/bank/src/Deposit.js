import React from 'react';
import Balance from './balance';

export default function Deposit(props) {
    const { totalDeposit, amount } = props;

    console.log('Total Deposit:', totalDeposit);
    
    return (
        <>
            <h3>Deposit Page</h3>
            <p>Current Deposit Amount: {amount}</p>
            
            <Balance bal={totalDeposit} />
        </>
    );
}
