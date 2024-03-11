import '@fortawesome/fontawesome-free/css/all.css'

const Moreimages=()=>{
    return (
        <>
        <section class="moreimages">
         
            <h4 className="subhead">For this season</h4>
            <h1 className="heading">Trending & Now --------</h1>
            <button className="seeall">See All</button>

            <div className="pictures">



                
                <div className="monopic">
                  
                <i class="fa-regular fa-heart"></i>
                  <img src="src\Components\feather.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 class="imagecontent">Feathery wall stick <span>$2540.00</span></h3>
                </div>
                <div className="monopic">
                  
                <i class="fa-regular fa-heart"></i>
                      
                <img src="src\Components\pots.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 class="imagecontent">Ceramic plates and jugs-Aesthetic appeal <span>$4599.00</span></h3>
                </div>
                <div className="monopic">

                <i class="fa-regular fa-heart"></i>
                          
                <img src="src\Components\owl.png" className="pic"></img>
                  <hr  className="hr"></hr>
                  <h3 class="imagecontent">A wooden owl statue-Stunning  <span>$1540.00</span></h3>

                </div>
            </div>

        </section>
        </>
    )
}
export default Moreimages