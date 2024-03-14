import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Connect = () => {

    useEffect(() => {
        getExpenseDetails(); // Trigger expense details fetching when component mounts
    }, []);

    async function handleAddNewEntry() {
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        const username = usernameInput.value;
        const password = passwordInput.value;

        try {
            const response = await fetch('https://loginapi-c4sh.onrender.com/add-details', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error adding entry:', error);
        }
    }

    async function getExpenseDetails() {
        try {
            const response = await fetch('https://loginapi-c4sh.onrender.com/get-details');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching expense details:', error);
        }
    }

    return (
        <>
        <div className='whole'>
            <img src="src\Components\loginimage.png" className="loginimage"></img>
        <div className='first'>
            <div>
            <form className='form'>
            <h1 className='login-head'>Login</h1>
            <input type="text" placeholder="Enter Name" id="username" required/>
            <br/>
            <input type="password" placeholder="Enter password" id="password" required/>
            <br/>
          <Link to="/afterlogin"><button id="addentry" type="button" onClick={handleAddNewEntry}>Login</button></Link>  
            </form>
            </div>
        </div>
        </div>
        </>
    );
};

export default Connect;