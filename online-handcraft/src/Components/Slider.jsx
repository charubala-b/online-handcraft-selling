<<<<<<< HEAD
import React from "react";
import '@fortawesome/fontawesome-free/css/all.css'
import buddha from'./buddha.png';
import feather from './feather.png'
import pot from './pots.png'
import bag from './bag.png'
=======
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import buddha from "./buddha.png";
import feather from "./feather.png";
import pot from "./pot.png";
import bag from "./bag.png";
import Popup from "reactjs-popup";

>>>>>>> 3a3fd84e8db0dd34054ef22495ce2ebe633e5788
function Slider() {
  const [index, setIndex] = useState(0);
  const [heartHovered, setHeartHovered] = useState(false);
  const [cartHovered, setCartHovered] = useState(false);
  const timeoutRef = React.useRef(null);
  const colors = [feather, buddha, pot, bag];

  const delay = 2500;

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
   <div className="icons">
      <div
        onMouseEnter={() => setHeartHovered(true)}
        onMouseLeave={() => setHeartHovered(false)}
      >
        <Popup
          trigger={<i className="fa-regular fa-heart"></i>}
          position="bottom"
          className="popup"
          open={heartHovered}
          closeOnDocumentClick
        >
          <div className="fav">Add to Favourites</div>
        </Popup>
      </div>

      <div
        onMouseEnter={() => setCartHovered(true)}
        onMouseLeave={() => setCartHovered(false)}
      >
        <Popup
          trigger={<i className="fa-solid fa-cart-shopping"></i>}
          position="bottom"
          className="popup"
          open={cartHovered}
          closeOnDocumentClick
        >
          <div className="fav">Add to Cart</div>
        </Popup>
      
      </div>
      </div>

      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundImage, idx) => (
          <div className="slide" key={idx}>
            <img className="image" src={backgroundImage} />
          </div>
        ))}
      </div>
      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className="slideshowDot"
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
