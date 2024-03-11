
import React from "react"
import Introduction from "./Components/Introduction"
import Slider from "./Components/Slider"
import Sellbuys from "./Components/Sellbuys"



const App=()=>{
  return(
    <>
    <section className="info">
    <Introduction/>
    <Slider/>
    </section>
    
      <Sellbuys/>
  
    </>
  )
}
export default App;