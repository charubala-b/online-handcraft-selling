import '@fortawesome/fontawesome-free/css/all.css'
import SeeAll from "./SeeAll"
import { Link } from 'react-router-dom'

const Men=()=>{

    return (
        <>
        <section className="moreimages">
         
            <h4 className="subhead">For this season</h4>
            <h1 className="heading">Trending & Now --------</h1>
             <div className="seeall">
          <Link to="/seeall">See All</Link>
             </div>
   
           

            <div className="pictures">



                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\Men.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Feathery wall stick <span>$2540.00</span></h3>
                  <button className="buy1">Buy</button>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\Men2.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Ceramic plates and jugs-Aesthetic appeal <span>$4599.00</span></h3>
                  <button className="buy1">Buy</button>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\Men3.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">A wooden owl statue-Stunning  <span>$1540.00</span></h3>
                  <button className="buy1">Buy</button>
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
                  <h3 className="imagecontent">Feathery wall stick <span>$2540.00</span></h3>
                  <button className="buy1">Buy</button>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\Men5.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Ceramic plates and jugs-Aesthetic appeal <span>$4599.00</span></h3>
                  <button className="buy1">Buy</button>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\Men6.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">A wooden owl statue-Stunning  <span>$1540.00</span></h3>
                  <button className="buy1">Buy</button>
                  <button className="sell1">Add To Cart</button>

                </div>
            </div>

        </section>
        </>
    )
}
export default Men