import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


 function Popups(props) {
    const{handleClose}=props;
    return (
        <div>
            
            <Popup trigger=
                {<button> Click to open popup </button>}
                position="right center">
                <div>GeeksforGeeks</div>
                
            </Popup>
        </div>
    )
};
export default Popups