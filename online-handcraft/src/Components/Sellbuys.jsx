import { Link } from "react-router-dom";
const Sellbuys=()=>{


    return (
        <>
        <section className="Second">
        <div className="App">
            <div className="head">
            <h6>Our Mission</h6>
            <p>Every purchase has purpose</p>
            </div>
            <div className="sec-margin">
            <button className="sellbuy1">Buy</button>
            <br></br>
           <Link to="/sale"><button className="sellbuy2">Sell</button></Link> 
            </div>
</div>

        </section>
        </>
    );
  }
    export default Sellbuys