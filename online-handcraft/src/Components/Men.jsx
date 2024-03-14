import '@fortawesome/fontawesome-free/css/all.css'
import SeeAll from "./SeeAll"
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Addcart from './Addcart';

const Men=()=>{
      
  var cost1=2399
  var cost2=1299
  var cost3=1429
  var cost4=2699
  var cost5=1199
  var cost6=1540
  var name1="Pure Linen"
  var name2="Cotton Printed"
  var name3="Plain White Shirt"
  var name4="Oxford Shirt"
  var name5="Casuals"
  var name6="Traditional"

  const ent=[{name:"",amount:null}];
  const [val,setVal]=useState(ent);


 
  const addDetails1=()=>{
    setVal([...val,{name:name1,amount:cost1}]);
    console.log(val)
    alert("Added to cart")
}
const addDetails2=()=>{
  setVal([...val,{name:name2,amount:cost2}]);
  console.log(val)
  alert("Added to cart")
}
const addDetails3=()=>{
  setVal([...val,{name:name3,amount:cost3}]);
  console.log(val)
  alert("Added to cart")
}
const addDetails4=()=>{
  setVal([...val,{name:name4,amount:cost4}]);
  console.log(val)
  alert("Added to cart")
}
const addDetails5=()=>{
  setVal([...val,{name:name5,amount:cost5}]);
  console.log(val)
  alert("Added to cart")
}
const addDetails6=()=>{
  setVal([...val,{name:name6,amount:cost6}]);
  console.log(val)
  alert("Added to cart")
}



    return (
        <>
        <section className="moreimages">
         
           
            <Link to={`/destination?data=${encodeURIComponent(JSON.stringify(val))}`} className="gtc">Go to Cart</Link>
            <h1 className="heading">Trending & Now --------</h1>
          
          
          
   
           

            <div className="pictures">



                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\Men.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Pure Linen <span>$2399.00</span></h3>
                  <Link to={`/pay/${cost1}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails1}>Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\Men2.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Cotton Printed <span>$1299.00</span></h3>
                  <Link to={`/pay/${cost2}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails2}>Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\Men3.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Plain White Shirt  <span>$1429.00</span></h3>
                  <Link to={`/pay/${cost3}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails3}>Add To Cart</button>

                </div>
                
            </div>
            </section>
            <section className="moreimages">

            <div className="pictures">



                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\Men4.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Oxford Shirt <span>$2699.00</span></h3>
                  <Link to={`/pay/${cost4}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails4}>Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\Men5.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Casuals <span>$1199.00</span></h3>
                  <Link to={`/pay/${cost5}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails5}>Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\Men6.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Traditional  <span>$1540.00</span></h3>
                  <Link to={`/pay/${cost6}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails6}>Add To Cart</button>

                </div>
              
            </div>

        </section>
        </>
    )
}
export default Men