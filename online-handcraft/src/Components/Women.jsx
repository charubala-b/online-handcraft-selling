import '@fortawesome/fontawesome-free/css/all.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Addcart from './Addcart';

const Women=()=>{
      var cost1=540
       var cost2=1299
       var cost3=2799
       var cost4=999
       var cost5=4599
       var cost6=599
       var name1="Handmade Earrings"
       var name2="Handmade bags-Unique"
       var name3="Wholesale Products"
       var name4="Casual Wear NeckPiece"
       var name5="Luxurious NeckPiece"
       var name6="Pearl Beads"

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

        <h4 className="subhead"></h4>
            <h1 className="heading">For women ------- </h1>
            <button className="seeall">See All</button>

            <div className="pictures">



                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\earings.jpg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Handmade Earrings <span>$540.00</span></h3>
                  <Link to={`/pay/${cost1}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails1}>Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\handbag.jpeg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Handmade bags-Unique <span>$1299.00</span></h3>
                  <Link to={`/pay/${cost2}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails2}>Add To Cart</button>
                </div>
                <div className="monopic">
                 
                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\women and  crafts.jpg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Wholesale Products <span>$2799.00</span></h3>
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
                  <img src="src\Components\chain.jpg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Casual Wear NeckPiece <span>$999.00</span></h3>
                  <Link to={`/pay/${cost4}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails4}>Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\jewellery.jpeg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Luxurious NeckPiece <span>$4599.00</span></h3>
                  <Link to={`/pay/${cost5}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails5}>Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\beads.jpg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Pearl Beads <span>$599.00</span></h3>
                  <Link to={`/pay/${cost6}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails6}>Add To Cart</button>
                </div>
              

            </div>

        </section>
        </>
    )
}

      

export default Women