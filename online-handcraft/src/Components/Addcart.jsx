import { useLocation, useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Addcart = ()=>{
    
    const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  // Get the encoded data from the URL query parameter
  const encodedData = queryParams.get('data');

  // Decode and parse the data back into an array of objects
  const decodedData = encodedData ? JSON.parse(decodeURIComponent(encodedData)) : [];

  console.log(decodedData); // Use the decoded data as needed


  const tableRows = decodedData.map((element) => {
    return (
        <tr className="items">
            <td>{element.name}</td>
            <td>{element.amount}</td>
            <th><button>Buy</button></th>
        </tr>
    );
});
return (
    <div className="container">
        <Table hover>
            <thead>
                <tr>
                    <th> Name</th>
                    <th>Marks</th>
                    <th>Buy</th>
                </tr>
            </thead>
            <tbody>{tableRows}</tbody>
        </Table>
    </div>
);
}
export default Addcart;

