
import React from "react"
import Introduction from "./Components/Introduction"
import Slider from "./Components/Slider"
import Popups from "./Components/Popups"
import Sellbuys from "./Components/Sellbuys"
import Moreimages from "./Components/Moreimages"
import Moreimages2 from "./Components/Moreimages2"
import Craftforms from './Components/Craftforms'
import Women from "./Components/Women"




const App=()=>{
  return(
    <>
    <section className="info">
    <Introduction/>
    <Slider/>  
    </section>  
    <section className="sell">
      <Sellbuys/>
      </section>
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


    </>
  )
}
export default App;