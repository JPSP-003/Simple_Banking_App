import Balance from "./balance";
export default function Withdrawal(props)
{
    
    const { balance, amount } = props;

    console.log('Total Deposit:', balance);

    return (
        <>
            <h3>Withdrawal Page</h3>
            <p>Withdrawal Amount: {amount}</p>
            <Balance bal={balance} />
        </>
    );
}