import '@fortawesome/fontawesome-free/css/all.css'
import { Link } from 'react-router-dom'

const Pot=()=>{

      var cost1=2440
      var cost2=699
      var cost3=299
      var cost4=2540
      var cost5=599
      var cost6=5540

    return (
        <>
        <section className="moreimages">
         
           
        <h4 className="subhead"></h4>
            <h1 className="heading">Pots</h1>
         

            <div className="pictures">



                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\pot.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Antique Wooden Pot <span>$2440.00</span></h3>
                  <Link to={`/pay/${cost1}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\pot1.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Cermaic planters <span>$699.00</span></h3>
                  <Link to={`/pay/${cost2}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\pot2.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Plastic Pot <span>$299.00</span></h3>
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
                  <img src="src\Components\pot3.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Plastic Pots <span>$2540.00</span></h3>
                  <Link to={`/pay/${cost4}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\pot4.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Planters <span>$599.00</span></h3>
                  <Link to={`/pay/${cost5}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\pots.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Ceramic Pots  <span>$5540.00</span></h3>
                  <Link to={`/pay/${cost6}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>

                </div>
            </div>

        </section>
        </>
    )
}

      

export default Pot;