
import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Rating({ value, color }) {
  //state definition
  const [stars, setStars] = useState(value); //state  or reactive data or souce of truth

  const updateRating = index => {
    setStars(index + 1);
  };
  

  const renderStars = value => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        i < value ? (
          <AiFillStar onClick={() => updateRating(i)} />
        ) : (
          <AiOutlineStar onClick={() => updateRating(i)} />
        ),
      );
    }
    return stars;
  };


  return <div style={{ color }}>{renderStars(stars)}</div>;
}

export default Rating;

Rating.defaultProps = {
  value:0,
  color: "#FDCC0D",
};

