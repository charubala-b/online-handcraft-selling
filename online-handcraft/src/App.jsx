
import React from "react"
import Introduction from "./Components/Introduction"
import Slider from "./Components/Slider"
import Popups from "./Components/Popups"
import Sellbuys from "./Components/Sellbuys"
import Moreimages from "./Components/Moreimages"
import Moreimages2 from "./Components/Moreimages2"
import Craftforms from './Components/Craftforms'
import Women from "./Components/Women"
import { Outlet } from "react-router-dom"
import Workingphase from "./Components/Workingphase"
import Contact from "./Components/Contact"
import SocialIcons from "./Components/SocialIcons"
import Men from "./Components/Men"
import Checkout from "./Components/Checkout"





const App=()=>{
  return(
    <>
    <section className="info" id="info1">
    <Introduction/>
    <Slider/>  
    </section>  
    <hr></hr>
    <section className="sell">
      <Sellbuys/>
      </section>
      <hr></hr>
      <section className="more">
      <Moreimages/>
      <Moreimages2/>
      </section>
      <section>
        <Craftforms/>
      </section>
      <section>
        <Women/>  
      </section>
      <section>
      <Workingphase/> 
      </section>
      <section>
        <Men/>
      </section>
      <hr></hr>
      <section>
        <Contact/>
        <SocialIcons/>
        <hr></hr>
      </section>
      

      <Outlet/>
       
    </>
  )
}
export default App;