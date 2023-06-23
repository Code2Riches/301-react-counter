import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
const Counter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const stars = [1, 2, 3, 4, 5];

  const prevStar = () => {
    const isFirstStar = currentIndex === 0;
    const newIndex = isFirstStar ? stars.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextStar = () => {
    const isLastStar = currentIndex === stars.length - 1;
    const newIndex = isLastStar ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  let starCount = currentIndex + 1;

  return (
    <div className='counter'>
      <h1>Counter</h1>
      <div className='counter-container'>
        <button className='counter-container-btn-left' onClick={prevStar}>
          -
        </button>
        <h3 className='counter-container-view'>{starCount}</h3>
        <button className='counter-container-btn-right' onClick={nextStar}>
          +
        </button>
      </div>
      <div className='counter-starholder'>
        {stars.map((star, index) => {
          switch (starCount) {
            case 1:
              return (
                <FaStar
                  key={index}
                  className='counter-starholder-star'
                  color={index < starCount ? "#ffc107" : "#e4e5e9"}
                />
              );
            case 2:
              return (
                <FaStar
                  key={index}
                  className='counter-starholder-star'
                  color={index < starCount ? "#ffc107" : "#e4e5e9"}
                />
              );
            case 3:
              return (
                <FaStar
                  key={index}
                  className='counter-starholder-star'
                  color={index < starCount ? "#ffc107" : "#e4e5e9"}
                />
              );
            case 4:
              return (
                <FaStar
                  key={index}
                  className='counter-starholder-star'
                  color={index < starCount ? "#ffc107" : "#e4e5e9"}
                />
              );
            case 5:
              return (
                <FaStar
                  key={index}
                  className='counter-starholder-star'
                  color={index < starCount ? "#ffc107" : "#e4e5e9"}
                />
              );
            default:
              return (
                <FaStar
                  key={index}
                  className='counter-starholder-star'
                  color={index < currentIndex ? "#ffc107" : "#e4e5e9"}
                />
              );
          }
        })}
      </div>
    </div>
  );
};

export default Counter;