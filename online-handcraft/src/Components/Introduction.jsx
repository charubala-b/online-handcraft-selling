import { useState } from 'react'
import Popup from './Popup';

const Introduction=()=>{
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
      console.log("Sucess")
    }
  
    
    return(
        <>
<<<<<<< HEAD
        <div>
=======
<div>
>>>>>>> a198b7d355fe349dc065250f17e725598b6840b9
<div className="infodiv">
    <nav>
        <link title='Online craft' to =""></link>
        <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Our Story</a></li>
        <li><a href="#" onClick={togglePopup}>Shop</a></li>
        {isOpen && <Popup
        handleClose={togglePopup}
        />}

        <li><a href="#">Wholesale</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    </nav>
</div>
</div>
</>
)
    }

export default Introduction;