import React from "react";
const Popup=(props)=>{
    const {handleClose}=props;
    return(
        <>
             <div className="popup-box">
            <div className="box">
             <h1 className="close-icon" onClick={handleClose}>hello</h1>
            </div>
            </div>
        </>
         )
};
 
export default Popup;