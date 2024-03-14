import '@fortawesome/fontawesome-free/css/all.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Addcart from './Addcart';

const SeeAll=()=>{

       var cost1=540
       var cost2=799
       var cost3=1799
       var cost4=2540
       var cost5=4599
       var cost6=1540
       var name1="Decor Lamp"
       var name2="Handmade Earrings"
       var name3="Cotton Printed Maxi"
       var name4="Bracelets "
       var name5="Wall decors"
       var name6="Handmade woollen pillow"
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
           
            <h1 className="heading">Trending....</h1>
          

            <div className="pictures">



                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\trend1.jpg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Decor Lamp <span>$540.00</span></h3>
                  <Link to={`/pay/${cost1}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails1}>Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\trend2.jpg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Handmade Earrings <span>$799.00</span></h3>
                  <Link to={`/pay/${cost2}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails2}>Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\trend3.jpg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Cotton Printed Maxi <span>$1799.00</span></h3>
                  <Link to={`/pay/${cost3}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails3}>Add To Cart</button>

                </div>
            </div>

        </section>
  <br></br>

 
      
        <section className="moreimages">
         
            <h4 className="subhead"></h4>
           
                

            <div className="pictures">



                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\trend4.jpg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Bracelets <span>$2540.00</span></h3>
                  <Link to={`/pay/${cost4}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails4}>Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\trend5.jpg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Wall decors <span>$4599.00</span></h3>
                  <Link to={`/pay/${cost5}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails5}>Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\trend6.jpg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Handmade wollen pilow  <span>$1540.00</span></h3>
                  <Link to={`/pay/${cost6}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1" onClick={addDetails6}>Add To Cart</button>
                </div>
                

            </div>

        </section>
        </>
    )
}

      

export default SeeAll