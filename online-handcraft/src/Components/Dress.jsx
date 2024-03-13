import '@fortawesome/fontawesome-free/css/all.css'
import { Link } from 'react-router-dom';

const Dress=()=>{
  const img={image:"src.Components.dress.png"};
    return (
        <>
        <section className="moreimages">
         
           
        <h4 className="subhead"></h4>
            <h1 className="heading">Dress</h1>
         

            <div className="pictures">



                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\dress.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Handmad SKirt <span>$2540.00</span></h3>
                  <button className="buy1">Buy</button>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\dress1.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Cotton Frock <span>$1299.00</span></h3>
                  <button className="buy1">Buy</button>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\dress2.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Full Frock <span>$2799.00</span></h3>
                  <button className="buy1">Buy</button>
                  <button className="sell1">Add To Cart</button>
                </div>
            </div>

        </section>


 
      
        <section className="moreimages">
         
           
           
                

            <div className="pictures">



                
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                  <img src="src\Components\dress3.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Woolen Dress <span>$1740.00</span></h3>
                  <button className="buy1">Buy</button>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">
                  
                <i className="fa-regular fa-heart"></i>
                      
                <img src="src\Components\dress4.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Short Tops <span>$799.00</span></h3>
                  <button className="buy1">Buy</button>
                  <button className="sell1">Add To Cart</button>
                </div>
                <div className="monopic">

                <i className="fa-regular fa-heart"></i>
                          
                <img src="src\Components\dress5.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 className="imagecontent">Cotton Kurti  <span>$1540.00</span></h3>
                  <button className="buy1">Buy</button>
                  <button className="sell1">Add To Cart</button>

                </div>
            </div>

        </section>
        </>
    )
}

      

export default Dress;