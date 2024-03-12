import React, { useEffect } from 'react';

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
            <h1>hello</h1>
            <input type="text" placeholder="john" id="username"/>
            <input type="password" placeholder="3243" id="password"/>
            <button id="addentry" type="button" onClick={handleAddNewEntry}>Submit</button>
        </>
    );
};

export default Connect;