import '@fortawesome/fontawesome-free/css/all.css'
import { Link } from 'react-router-dom'
const Statue=()=>{

  var cost1=3540
  var cost2=1299
  var cost3=2799
  var cost4=2540
  var cost5=4599
  var cost6=1540
    return (
         
     
        <>
        <section className="moreimages">
         
           
        <h4 className="subhead"></h4>
            <h1 className="heading">Statues</h1>
         

            <div className="pictures">



                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\owl.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Wooden owl <span>$3540.00</span></h3>
                  <Link to={`/pay/${cost1}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\statue1.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Statue <span>$1299.00</span></h3>
                  <Link to={`/pay/${cost2}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\statue2.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Buddha <span>$2799.00</span></h3>
                  <Link to={`/pay/${cost3}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
            </div>

        </section>


 
      
        <section className="moreimages">
         
            <h4 className="subhead"></h4>
           
                            <div className="pictures">



                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\buddha.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Colorful Statue <span>$2540.00</span></h3>
                  <Link to={`/pay/${cost4}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\statue3.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Buddha <span>$4599.00</span></h3>
                  <Link to={`/pay/${cost5}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\statue4.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Beautiful Peacock  <span>$1540.00</span></h3>
                  <Link to={`/pay/${cost6}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>

                </div>
            </div>

        </section>
        </>
    )
}

      

export default Statue;