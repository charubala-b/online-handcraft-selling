import '@fortawesome/fontawesome-free/css/all.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Addcart from './Addcart';

const Bangles=()=>{
  var cost1=540.00;
  var cost2=1299.00;
  var cost3=799.00;
  var cost4=740.00
  var cost5=499.00
  var cost6=340.00
  var name1="Thread Bangles"
  var name2="Handmade bags-Unique"
  var name3="Beautiful Bangles "
  var name4="Stone Bangles"
  var name5="Thread with Beads Bangles "
  var name6="Stoned bangle"
  const ent=[{name:"",amount:null}];
  const [val,setVal]=useState(ent);


 
  const addDetails1=()=>{
    setVal([...val,{name:name1,amount:cost1}]);
    console.log(val)
}
const addDetails2=()=>{
  setVal([...val,{name:name2,amount:cost2}]);
  console.log(val)
}
const addDetails3=()=>{
  setVal([...val,{name:name3,amount:cost3}]);
  console.log(val)
}
const addDetails4=()=>{
  setVal([...val,{name:name4,amount:cost4}]);
  console.log(val)
}
const addDetails5=()=>{
  setVal([...val,{name:name5,amount:cost5}]);
  console.log(val)
}
const addDetails6=()=>{
  setVal([...val,{name:name6,amount:cost6}]);
  console.log(val)
}



    return (
        <>
        <section className="moreimages">
         
        <Link to={`/destination?data=${encodeURIComponent(JSON.stringify(val))}`} className="gtc">Go to Cart</Link>
        <h4 className="subhead"></h4>
       
            <h1 className="heading">Bangles</h1>
         

            <div className="pictures">



                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\ban1.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Thread Bangles <span>$540.00</span></h3>
                  <Link to={`/pay/${cost1}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails1}>Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\ban2.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Handmade bags-Unique <span>$1299.00</span></h3>
                  <Link to={`/pay/${cost2}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails2}>Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\ban3.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Beautiful Bangles <span>$799.00</span></h3>
                  <Link to={`/pay/${cost3}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails3}>Add To Cart</button>
                </div>
            </div>

        </section>


 
      
        <section className="moreimages">
        
         
            <h4 className="subhead">More...</h4>
      
 
           
                

            <div className="pictures">



                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\ban4.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Stone Bangles <span>$740.00</span></h3>
                  <Link to={`/pay/${cost4}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails4}>Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\ban5.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent"> Beads Bangles <span>$499.00</span></h3>
                  <Link to={`/pay/${cost5}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails5}>Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\ban6.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Stoned bangle<span>$340.00</span></h3>
                  <Link to={`/pay/${cost6}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails6}>Add To Cart</button>

                </div>
                
            </div>

        </section>
        </>
    )
}

      

export default Bangles