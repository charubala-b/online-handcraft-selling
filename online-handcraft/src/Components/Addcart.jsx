import { useLocation, useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Addcart = ()=>{
    
    const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const encodedData = queryParams.get('data');
  const decodedData = encodedData ? JSON.parse(decodeURIComponent(encodedData)) : [];

  console.log(decodedData); 


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

