import '@fortawesome/fontawesome-free/css/all.css'
import { Link } from 'react-router-dom'

const Women=()=>{
      var cost1=540
       var cost2=1299
       var cost3=2799
       var cost4=999
       var cost5=4599
       var cost6=599
    return (
        <>
        <section className="moreimages">
         
           
        <h4 className="subhead">For women</h4>
            <h1 className="heading">Choice for <p>the season --------</p></h1>
            <button className="seeall">See All</button>

            <div className="pictures">



                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\earings.jpg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Handmade Earrings <span>$540.00</span></h3>
                  <Link to={`/pay/${cost1}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\handbag.jpeg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Handmade bags-Unique <span>$1299.00</span></h3>
                  <Link to={`/pay/${cost2}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">
                 
                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\women and  crafts.jpg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Wholesale Products <span>$2799.00</span></h3>
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
                  <img src="src\Components\chain.jpg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Casual Wear NeckPiece <span>$999.00</span></h3>
                  <Link to={`/pay/${cost4}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\jewellery.jpeg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Luxurious NeckPiece <span>$4599.00</span></h3>
                  <Link to={`/pay/${cost5}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\beads.jpg" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Pearl Beads <span>$599.00</span></h3>
                  <Link to={`/pay/${cost6}`}><button className="buy1">Buy</button></Link>
                  <button className="sell1">Add To Cart</button>
                </div>
            </div>

        </section>
        </>
    )
}

      

export default Women