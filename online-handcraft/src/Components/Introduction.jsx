import { useState } from 'react'
import Popup from './Popup';
import { Link } from 'react-router-dom';
import Contact from "./Contact"

const Introduction=()=>{
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
      console.log("Sucess")
      }
     
    return(
        <>
        <div>
<div>

    <nav >
        <link title='Online craft' to =""></link>

<ul>
        <li><a href="\">Home</a></li>
        <li><Link to="/ourstory">Our Story</Link></li>
        <li><a href="#" onClick={togglePopup}>Shop</a></li>
        {isOpen && <Popup
        handleClose={togglePopup}
        />}

        <li className='at'><Link to="/sale">Sale</Link></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    </nav>
    </div>
    <div className="infodiv">   
    <div className='frontcontent'>
    <div className='secondcontent'>
        <h1 className='h1'>Embrace the Culture of India</h1>
        <p className='p1'>"Explore India's finest handcrafted treasures online</p>
        <p className='p1'>From intricate textiles to rustic wooden artifacts and elegant jewelry, </p>
        <p className='p1'> discover unique creations that support skilled artisans </p>
        <p className='p1'>and celebrate India's rich cultural heritage."</p>
        </div>
      </div>
    </div>
</div>
</>
    )
        }
export default Introduction;