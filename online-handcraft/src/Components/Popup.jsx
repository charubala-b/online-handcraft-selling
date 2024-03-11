import React from "react";
const Popup=(props)=>{
    const {handleClose}=props;
    return(
        <>
             <div className="popup-box">
            <div className="box">
             <button className="close-icon" onClick={handleClose}>x</button>
             <div className="whole-list">
             <div className="list">
                <h4>bangles</h4>
             </div>
             <div className="list">
                <h4>dress</h4>
             </div>
             <div className="list">
                <h4>pots</h4>
             </div>
             <div className="list">
                <h4>bags</h4>
             </div>
             <div className="list">
                <h4>statues</h4>
             </div>
             </div>
            </div>
            </div>
        </>
         )
};
 
export default Popup;