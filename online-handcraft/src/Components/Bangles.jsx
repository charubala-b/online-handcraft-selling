import '@fortawesome/fontawesome-free/css/all.css'
import { Link } from 'react-router-dom'

const Bangles=()=>{
  var cost1=540.00;
  var cost2=1299.00;
  var cost3=799.00;
  var cost4=740.00
  var cost5=499.00
  var cost6=340.00

    return (
        <>
        <section className="moreimages">
         
           
        <h4 className="subhead"></h4>
            <h1 className="heading">Bangles</h1>
         

            <div className="pictures">



                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\ban1.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Thread Bangles <span>$540.00</span></h3>
                  <Link to={`/pay/${cost1}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\ban2.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Handmade bags-Unique <span>$1299.00</span></h3>
                  <Link to={`/pay/${cost2}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\ban3.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Beautiful Bangles <span>$799.00</span></h3>
                  <Link to={`/pay/${cost3}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
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
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\ban5.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Thread with Beads Bangles <span>$499.00</span></h3>
                  <Link to={`/pay/${cost5}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\ban6.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <Link to={`/pay/${cost6}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>

                </div>
            </div>

        </section>
        </>
    )
}

      

export default Bangles