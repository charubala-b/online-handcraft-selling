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
=======

>>>>>>> 18d7acca6c966cf1f84327384db580464b244a38
        <div>
<div>
<<<<<<< HEAD

<nav>
        
=======
<div>
<div className="infodiv">
    <nav>
        <link title='Online craft' to =""></link>
>>>>>>> 18d7acca6c966cf1f84327384db580464b244a38
        <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Our Story</a></li>
        <li><a href="#" onClick={togglePopup}>Shop</a></li>
        {isOpen && <Popup
        handleClose={togglePopup}
        />}

        <li><a href="#">Sale</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    </nav>
    </div>
<div className="infodiv">   

</div>
</div>
<<<<<<< HEAD

</>
)
};
=======
</div>
</div>
</>
);
    }
>>>>>>> 18d7acca6c966cf1f84327384db580464b244a38

export default Introduction;