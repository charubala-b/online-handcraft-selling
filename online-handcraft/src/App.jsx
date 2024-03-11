
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
      <Sellbuys/>
      <Moreimages/>
      <Moreimages2/>
  

    </>
  )
}
export default App;