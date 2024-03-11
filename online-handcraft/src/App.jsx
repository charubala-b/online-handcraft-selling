
import React from "react"
import Introduction from "./Components/Introduction"
import Slider from "./Components/Slider"
import Popups from "./Components/Popups"
import Sellbuys from "./Components/Sellbuys"
import Moreimages from "./Components/Moreimages"
import Moreimages2 from "./Components/Moreimages2"




const App=()=>{
  return(
    <>
    <section className="info">
    <Introduction/>
    <Slider/>  
    </section>
    <Popups/>    
    <section className="sell">
      <Sellbuys/>
      </section>
      <section className="more">
      <Moreimages/>
<<<<<<< HEAD
      <Moreimages2/>
=======
      </section>
>>>>>>> ad687316969c4355b4493b1019fb8da8453c9a9e
  

    </>
  )
}
export default App;