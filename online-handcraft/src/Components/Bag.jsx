import '@fortawesome/fontawesome-free/css/all.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Addcart from './Addcart';

const Bag=()=>{
      var cost= 540
      var cost1=3299
      var cost2=2799
      var cost3=1540
      var cost4=4599
      var cost5=1540
      var name="Handmade Printed HandBag"
      var name1="Laptop Handbag "
      var name2="Wholesale Products "
      var name3="Weaving Bag"
      var name4="Printed Bag"
      var name5="weaving HandBag"

      const ent=[{}];
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
    const addDetails4=()=>{
      setVal([...val,{name:name3,amount:cost3}]);
      console.log(val)
      alert("Added to cart")
    }
    const addDetails5=()=>{
      setVal([...val,{name:name4,amount:cost4}]);
      console.log(val)
      alert("Added to cart")
    }
    const addDetails6=()=>{
      setVal([...val,{name:name5,amount:cost5}]);
      console.log(val)
      alert("Added to cart")
    }
    

    return (
        <>
        <section className="moreimages">
         
           
        <h4 className="subhead"></h4>
            <h1 className="heading">Bags</h1>
         

            <div className="pictures">



                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\bag1.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Handmade Printed HandBag <span>$540.00</span></h3>
                  
                  <Link to={`/pay/${cost}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails1}>Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\bag2.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Laptop Handbag <span>$3299.00</span></h3>
                  <Link to={`/pay/${cost1}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails2}>Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\bag3.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Wholesale Products <span>$2799.00</span></h3>
                  <Link to={`/pay/${cost2}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails3}>Add To Cart</button>
                </div>
            </div>

        </section>


 
      
        <section className="moreimages">
        <Link to={`/destination?data=${encodeURIComponent(JSON.stringify(val))}`} className="gtc">Go to Cart</Link>
         
            <h4 className="subhead">More...</h4>
           
                

            <div className="pictures">




                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\bag4.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Weaving Bag <span>$1540.00</span></h3>
                  <Link to={`/pay/${cost3}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails4}>Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\bag5.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Printed Bag <span>$4599.00</span></h3>
                  <Link to={`/pay/${cost4}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails5}>Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\bag6.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Weaving Handbag  <span>$1540.00</span></h3>
                  <Link to={`/pay/${cost5}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails6}>Add To Cart</button>

                </div>
                
        
            </div>

        </section>
        </>
    )
}

      

export default Bag;