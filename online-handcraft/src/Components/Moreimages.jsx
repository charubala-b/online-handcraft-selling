import '@fortawesome/fontawesome-free/css/all.css'
import SeeAll from "./SeeAll"
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Addcart from './Addcart';

const Moreimages=()=>{
  var name="Feathery wall stick"
  var cost=2540;
  var cost1=4599;
  var cost2=1540;
  var name1="Ceramic plates"
  var name2="A wooden owl statue "
  const ent=[{name:"",amount:null}];
  const [val,setVal]=useState(ent);
  const addDetails1=()=>{
      setVal([...val,{name:name,amount:cost}]);
      console.log(val)
      alert("Added to cart")
  }
  const addDetails2=()=>{
    setVal([...val,{name:name1,amount:cost1}]);
    console.log(val)
    alert("Added to cart")
}
const addDetails3=()=>{
  setVal([...val,{name:name2,amount:cost2}]);
  console.log(val)
  alert("Added to cart")
}

    return (
        <>
        <section className="moreimages">
        <Link to={`/destination?data=${encodeURIComponent(JSON.stringify(val))}`} className="gtc">Go to Cart</Link>
            
            <h1 className="heading">Trending & Now --------</h1>
            
             <div className="seeall">
             <Link to="/seeall">See All</Link>
             </div>
   
           

            <div className="pictures">



                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\feather.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Feathery wall stick <span>$2540.00</span></h3>

                  <Link to={`/pay/${cost1}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails1}>Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\pots.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Ceramic plates <span>$4599.00</span></h3>
                  <Link to={`/pay/${cost1}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails2}>Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\owl.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">A wooden owl statue <span>$1540.00</span></h3>
                  <Link to={`/pay/${cost}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails3}>Add To Cart</button>

                </div>

            </div>

        </section>
        </>
    )
}
export default Moreimages