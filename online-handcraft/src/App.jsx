
import React from "react"
import Introduction from "./Components/Introduction"
import Slider from "./Components/Slider"
import Popups from "./Components/Popups"




const App=()=>{
  return(
    <>
    <section className="info">
    <Introduction/>
    <Slider/>
   
    </section>
    <Popups/>
    </>
  )
}
export default App;