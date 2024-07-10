import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Deposit from './Deposit';
import Balance from "./balance";
import Withdrawal from './Withdraw';
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [totalDeposit, setTotalDeposit] = useState(0);
  const [withamt,setwithamt] = useState("");
  //const [totalWithdraw,setwithdraw] = useState(0);
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) { // Ensure the value is numeric
      setAmount(value);
    }
  };

  const handleInputChange1 = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) { // Ensure the value is numeric
      setwithamt(value);
    }
  };
  const handleDeposit = () => {
    if (parseInt(amount) >= 1000) {
      setTotalDeposit(totalDeposit + parseInt(amount));
      setAmount("");
    } else {
      alert("Amount must be at least 1000");
    }
  };
  const handleWithdraw = () => {
    if (parseInt(totalDeposit) >= 1000 && parseInt(totalDeposit)-1000>=withamt) {
      setTotalDeposit(totalDeposit - parseInt(withamt));
     
    } else {
      alert("Amount must be at least 1000");
    }
  };

  return (
    <div className="App">
      <h3 style={{backgroundColor:"darkblue",color:"yellowgreen",margin:0}}>Home Page</h3><br/><br/>
      Enter The Amount To Be Deposited: <input style={{backgroundColor:"GrayText",color:"white"}}
        type="text" 
        value={amount} 
        onChange={handleInputChange} 
      />
      <button style={{color:"white",backgroundColor:"red"}} onClick={handleDeposit}>Deposit</button><br/><br/>
      Enter The Amount To Be Withdrwan: <input style={{backgroundColor:"GrayText",color:"white"}}
        type="text" 
        value={withamt} 
        onChange={handleInputChange1}
      />
      <button style={{color:"white",backgroundColor:"red"}} onClick={handleWithdraw}>Withdraw</button>
      <BrowserRouter>
        <ul>
          <li><Link style = {{color:"pink",backgroundColor:"navy"}} to="/deposit">Deposit</Link></li><br/>
          <li><Link style = {{color:"pink",backgroundColor:"navy"}} to="/withdraw">Withdraw</Link></li><br/>
          <li><Link style = {{color:"pink",backgroundColor:"navy"}} to="/balance">Balance</Link></li>
        </ul>
        <Routes>
          <Route 
            path="/deposit" 
            element={totalDeposit ? <Deposit totalDeposit={totalDeposit} amount={amount} /> : null} 
          />
          <Route path="/withdraw" element={<Withdrawal balance = {totalDeposit} amount = {withamt}/>} />
          <Route path="/balance" element={<Balance bal={totalDeposit} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
