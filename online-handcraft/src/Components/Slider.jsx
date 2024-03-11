import React from "react";
import '@fortawesome/fontawesome-free/css/all.css'
import buddha from'./buddha.png';
import feather from './feather.png'
import pot from './pot.png'
import bag from './bag.png'
function Slider() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
    const colors = [ feather,buddha,pot,bag];

    const delay = 2500; // Moved delay inside the component
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);
  
    return (
      <div className="slideshow">
        
        <button className="login">Login</button>
       
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-cart-shopping"></i>
        
        <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {colors.map((backgroundImage, idx) => (
            <div className="slide" key={idx} >
              <img className="image"src={backgroundImage}/>
            </div>

          ))}
        </div>
        <div className="slideshowDots">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className='slideshowDot'
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }

  export default Slider
  



  