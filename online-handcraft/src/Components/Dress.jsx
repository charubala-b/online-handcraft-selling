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
  }
  
   
    return (
        <>
        <section className="moreimages">
         
           
        <h4 className="subhead">For women</h4>
            <h1 className="heading">Bangles</h1>
         

            <div className="pictures">
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\dress.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Handmade Earrings <span>$540.00</span></h3>
                  <button className="buy"  onClick={addDetails}>Add to cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\dress1.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Handmade bags-Unique <span>$1299.00</span></h3>
                  <button className="buy">Buy</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\dress2.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="+imagecontent">Wholesale Products <span>$2799.00</span></h3>
                  <button className="buy">Buy</button>
                </div>
                <Link to={`/destination?data=${encodeURIComponent(JSON.stringify(val))}`}>Go to Destination</Link>
            </div>

        </section>


 
      
        <section className="moreimages">
         
            <h4 className="subhead">More...</h4>
           
                

            <div className="pictures">



                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\dress3.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Feathery wall stick <span>$2540.00</span></h3>
                  <button className="buy">Buy</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\dress4.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Ceramic plates and jugs-Aesthetic appeal <span>$4599.00</span></h3>
                  <button className="buy">Buy</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\dress5.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">A wooden owl statue-Stunning  <span>$1540.00</span></h3>
                  <button className="buy">Buy</button>

                </div>
            </div>

        </section>
        </>
    )
}

      

export default Dress;