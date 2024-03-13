import '@fortawesome/fontawesome-free/css/all.css'
import { Link } from 'react-router-dom';

const Bag=()=>{
      var cost= 540.00
      var cost1=3299.00
      var cost2=2799.00
      var cost3=1540.00
      var cost4=4599.00
      var cost5=1540.00
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
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\bag2.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Laptop Handbag <span>$3299.00</span></h3>
                  <Link to={`/pay/${cost1}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\bag3.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Wholesale Products <span>$2799.00</span></h3>
                  <Link to={`/pay/${cost2}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
            </div>

        </section>


 
      
        <section className="moreimages">
         
            <h4 className="subhead">More...</h4>
           
                

            <div className="pictures">




                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\bag4.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Weaving Bag <span>$1540.00</span></h3>
                  <Link to={`/pay/${cost3}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\bag5.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Printed Bag <span>$4599.00</span></h3>
                  <Link to={`/pay/${cost4}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\bag6.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Weaving Handbag  <span>$1540.00</span></h3>
                  <Link to={`/pay/${cost5}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>

                </div>
            </div>

        </section>
        </>
    )
}

      

export default Bag;