import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [artisansCount, setArtisansCount] = useState(1900);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 21) {
        setCount(prevCount => prevCount + 1);
      } else {
        clearInterval(interval); 
      }
    }, 200);

    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (artisansCount < 2000) {
        setArtisansCount(prevCount => prevCount + 1);
      } else {
        clearInterval(interval); 
      }
    }, 50); 

    return () => clearInterval(interval);
  }, [artisansCount]);

  return (
    <div>
      <section className="count">
      <h6> {count}+</h6>
      <h6>States</h6>
      <h6>{artisansCount}</h6>
      <h6>Indian Artisans </h6>
      </section>
    </div>
  );
}

export default Counter;