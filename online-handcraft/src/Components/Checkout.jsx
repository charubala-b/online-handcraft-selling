
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


const Checkout=()=>{
   const {cost}=useParams();
   const [val,setval]=useState();
    function carting(){
    setval((document.getElementById('expiry').value)*cost)
    }
  return (
    <>
    <section className="payment">
    
    <div className="bdy">
    <div>
    <div className="containers">
        <h2>Checkout</h2>
        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" id="cardNumber" name="cardNumber" required/>
            </div>
            <div className="form-group">
                <label htmlFor="expiry">Product Quantity</label>
                <input type="text" id="expiry" name="expiry" placeholder="0"  onChange={carting}/>
            </div>
            <div className="form-group">
                <label htmlFor="expiry">Total Amout</label>
                <input type="text" id="expiry" name="expiry" value={val} />
            </div>
            <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" required/>
            </div>
            <button type="submit" className="btn" onClick={alert("Payment Completed")}>Pay Now</button>
        </form>
    </div>
    </div>
    </div>
    </section>
   
   
    </>
    
  );
};


export default Checkout