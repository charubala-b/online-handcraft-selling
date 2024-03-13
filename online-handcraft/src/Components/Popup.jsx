import React from "react";
import { Link } from "react-router-dom";
const Popup=(props)=>{
    const {handleClose}=props;
    return(
        <>
             <div className="popup-box">
            <div className="box">
             <button className="close-icon" onClick={handleClose}>x</button>
             <div className="whole-list">
             <div className="list">
             
             <Link className="pops"  to="/bangles" >Bangles</Link>
             </div>
             <div className="list">
             <Link className="pops"  to="/pot" >Pots</Link>
             </div>
             <div className="list">
             <Link className="pops"  to="/dress" >Dress</Link>

               </div>
               <div className="list">
             <Link className="pops"  to="/statue" >Statue</Link>
             </div>
             <div className="list">
             <Link className="pops"  to="/bag" >Bags</Link>
             </div>
             
             </div>
            </div>
            </div>
        </>
         )
};
 
export default Popup;