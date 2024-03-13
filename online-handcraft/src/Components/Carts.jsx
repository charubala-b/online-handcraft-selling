import React from "react";

const Carts = ({ cart }) => {

  
  const calculateTotal = () => {
    if (!cart || cart.length === 0) {
      return 0; 
    }
    else{
    return cart.reduce((total, item) => total + item.price, 0);
    }
  };

  return (
    <>
    
      <h2>Your Cart</h2>
      <ul>
       {cart && cart.map((item) => (
     <li key={item.id}>
     
        <h1>{item.name}</h1>
        <h1>${item.price}</h1>
      {/* Example: Button to remove item */}
      {/* <button onClick={() => removeItem(item.id)}>Remove</button> */}
    
  </li>
     
))} </ul>
     
      <div>Total: ${calculateTotal().toFixed(2)}</div>
      {console.log("Hii")}
      
  
    </>
  );
};

export default Carts;
