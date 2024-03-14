import React, { useState,useEffect } from "react";

const Store=()=>{
    const [fileurl, setFile] = useState();
    useEffect(() => {
        getSalesDetails(); // Trigger expense details fetching when component mounts
    }, []);
    const [tot,settot]=useState();
    const [am,setam]=useState("");
    function adding(){
        settot(document.getElementById('Amount').value);
    }
    function adding1(){
        setam(document.getElementById('Product').value);
    }

    async function handleAddEntry() {
        const OnameInput = document.getElementById('Oname');
        const AddressInput = document.getElementById('Address');
        const AmountInput = document.getElementById('Amount');

        const Oname = OnameInput.value;
        const Address = AddressInput.value;
        const Amount = AmountInput.value;

        try {
            const response = await fetch('https://loginapi-c4sh.onrender.com/add-sales', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Oname,
                    Address,
                    Amount
                })
            });
            
            const data = await response.json();
            console.log(data);
            alert("Response Submitted")
        } catch (error) {
            console.error('Error adding entry:', error);
        }
    }


    async function  getSalesDetails() {
        try {
            const response = await fetch('https://loginapi-c4sh.onrender.com/get-sales');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching expense details:', error);
        }
    }


  
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
        <>
		<div className="store">
            <div className="sale">
                <form className="saleform">
            <h1 className="sale-details">Sale Details</h1>
            <label className="Onamel">Organisation Name</label>
            <input type="text" id="Oname" required/>
            <br/>
            <label className="Address1">Address</label>
            <input type="text" id="Address" required/>
            <br/>
            <label className="Amount1">Amount</label>
            <input type="text" id="Amount" onChange={adding} required/>
            <label className="Product1">Product Name</label>
            <input type="text" id="Product" onChange={adding1} required/>
            <br/>
            <button id="sale-button" onClick={handleAddEntry}>Submit</button>
            <br/>
			<h2 className="add-image">Add Image:</h2>
			<input type="file" onChange={handleChange} id="file"/>
			{/* <img src={file} id="file"/> */}
            </form>
            </div>
            <div className="monopic">
            <div className="cartnew">
            {console.log({fileurl})}
            <img src={`${fileurl}`} id="file" className="pic"/>
            <h1>Product name : {am}</h1>
            <h3>Amount : {tot}</h3>
           </div>
            </div>
		</div>
        </>
	);
}
export default Store;
      


