import '@fortawesome/fontawesome-free/css/all.css'
import { Link } from 'react-router-dom'

const SeeAll=()=>{

       var cost1=540
       var cost2=799
       var cost3=1799
       var cost4=2540
       var cost5=4599
       var cost6=1540
    return (
        <>
        <section className="moreimages">
         
           
            <h1 className="heading">Trending....</h1>
          

            <div className="pictures">



                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\trend1.jpg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Decor Lamp <span>$540.00</span></h3>
                  <Link to={`/pay/${cost1}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\trend2.jpg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Handmade Earrings <span>$799.00</span></h3>
                  <Link to={`/pay/${cost2}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\trend3.jpg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Cotton Printed Maxi <span>$1799.00</span></h3>
                  <Link to={`/pay/${cost3}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>

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
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\trend5.jpg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Wall decors <span>$4599.00</span></h3>
                  <Link to={`/pay/${cost5}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\trend6.jpg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Handmade wollen pilow  <span>$1540.00</span></h3>
                  <Link to={`/pay/${cost6}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
            </div>

        </section>
        </>
    )
}

      

export default SeeAll