import '@fortawesome/fontawesome-free/css/all.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Addcart from './Addcart';

const Moreimages2=()=>{
     var cost=2999
     var cost1=1999
     var cost2=799
     var name="Pretty Handmade Chain "
     var name1="Clay Tree Peel "
     var name2="Thread and Stone bangles"
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
         
        
            <h1 className="heading">More Collections --------</h1>
            

            <div className="pictures">



                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\daimond.jpg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Pretty Handmade Chain  <span>$2999.00</span></h3>
                  <Link to={`/pay/${cost}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails1}>Add To Cart</button>
                </div>
                <div className="monopic">
                      
                <i className="fa-regular fa-heart"></i>
                <img src="src\Components\flower.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Clay Tree Peel <span>$1999.00</span></h3>
                  <Link to={`/pay/${cost1}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails2}>Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                <img src="src\Components\bangles.png" className="pic"></img>
                  <hr  className="hr"></hr>

                  <h3 className="imagecontent">Thread and stone bangles <span>$799.00</span></h3>
                  <Link to={`/pay/${cost2}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails3}>Add To Cart</button>

                </div>
                
            </div>

        </section>
        </>
    )
}
export default Moreimages2