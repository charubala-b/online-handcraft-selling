import React from 'react';
import { useLocation } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Addcart = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
  
    const encodedData = queryParams.get('data');
    const decodedData = encodedData ? JSON.parse(decodeURIComponent(encodedData)) : [];

    const tableRows = decodedData.map((element) => {
        var cost3 = element.amount;
        return (
            <tr className="containitems" key={element.name}>
                <td>{element.name}</td>
                <td>{element.amount}</td>
                <td><Link to={`/pay/${cost3}`}><button className="buy2">Buy</button></Link></td>
            </tr>
        );
    });

    return (
        <>
       
        <div className="cont">
            <h2>ADDED PRODUCTS</h2>
            <Table hover className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </Table>
        </div>
        </>
    );
}

export default Addcart;
