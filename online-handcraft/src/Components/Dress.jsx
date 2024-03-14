import '@fortawesome/fontawesome-free/css/all.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Addcart from './Addcart';

const Dress=()=>{
  const name="Handmade Earrings"
  const amount=540;
  const ent=[{name:"",amount:null}];
  const [val,setVal]=useState(ent);
  const addDetails=()=>{
      setVal([...val,{name:name,amount:amount}]);
      console.log(name);
      console.log(amount);
      console.log(val)
      alert("Added to cart")
  }
  const img={image:"src.Components.dress.png"};
  var name1="Handmad SKirt";
  var cost1=2540;
  var name2="Cotton Frock ";
  var cost2=1299
  var name3="Full Frock";
  var cost3=2799
  var name4="Woolen Dress";
  var cost4=1740
  var name5="Short Tops";
  var cost5=799
  var name6="Cotton Kurti";
  var cost6=1540
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
           
        <h4 className="subhead"></h4>
            <h1 className="heading">Dress</h1>
         

            <div className="pictures">
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\dress.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Handmade Earrings <span>$540.00</span></h3>
                  <button className="buy"  onClick={addDetails}>Add to cart</button>
                  <h3 className="imagecontent">Handmad SKirt <span>$2540.00</span></h3>
                  <Link to={`/pay/${cost1}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails1}>Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\dress1.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Cotton Frock <span>$1299.00</span></h3>
                  <Link to={`/pay/${cost2}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails2}>Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\dress2.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="+imagecontent">Wholesale Products <span>$2799.00</span></h3>
                  <button className="buy">Buy</button>
                  <h3 className="imagecontent">Full Frock <span>$2799.00</span></h3>
                  <Link to={`/pay/${cost3}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails3}>Add To Cart</button>
                </div>
            </div>

        </section>


 
      
        <section className="moreimages">
         
           
           
                

            <div className="pictures">



                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\dress3.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Woolen Dress <span>$1740.00</span></h3>
                  <Link to={`/pay/${cost4}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails4}>Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\dress4.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Short Tops <span>$799.00</span></h3>
                  <Link to={`/pay/${cost5}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails5}>Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\dress5.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Cotton Kurti  <span>$1540.00</span></h3>
                  <Link to={`/pay/${cost6}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails6}>Add To Cart</button>

                </div>
            </div>
        
        </section>
        </>
    )
}

      

export default Dress;