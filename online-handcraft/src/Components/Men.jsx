import '@fortawesome/fontawesome-free/css/all.css'
import SeeAll from "./SeeAll"
import { Link } from 'react-router-dom'

const Men=()=>{
      
  var cost1=2399
  var cost2=1299
  var cost3=1429
  var cost4=2699
  var cost5=1199
  var cost6=1540
    return (
        <>
        <section className="moreimages">
         
            <h4 className="subhead">For this season</h4>
            <h1 className="heading">Trending & Now --------</h1>
             <div className="seeall">
          
             </div>
   
           

            <div className="pictures">



                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\Men.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Pure Linen <span>$2399.00</span></h3>
                  <Link to={`/pay/${cost1}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\Men2.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Cotton Printed <span>$1299.00</span></h3>
                  <Link to={`/pay/${cost2}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\Men3.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Plain White Shirt  <span>$1429.00</span></h3>
                  <Link to={`/pay/${cost3}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>

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
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\Men5.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Casuals <span>$1199.00</span></h3>
                  <Link to={`/pay/${cost5}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\Men6.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Traditional  <span>$1540.00</span></h3>
                  <Link to={`/pay/${cost6}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>

                </div>
            </div>

        </section>
        </>
    )
}
export default Men