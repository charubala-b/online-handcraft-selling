import '@fortawesome/fontawesome-free/css/all.css'
import { Link } from 'react-router-dom'
const Moreimages2=()=>{
     var cost=2999
     var cost1=1999
     var cost2=799
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
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">
                      
                <i className="fa-regular fa-heart"></i>
                <img src="src\Components\flower.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">"Clay Tree Peel" <span>$1999.00</span></h3>
                  <Link to={`/pay/${cost1}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                <img src="src\Components\bangles.png" className="pic"></img>
                  <hr  className="hr"></hr>

                  <h3 className="imagecontent">Thread and stone bangles <span>$799.00</span></h3>
                  <Link to={`/pay/${cost2}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>

                </div>
            </div>

        </section>
        </>
    )
}
export default Moreimages2