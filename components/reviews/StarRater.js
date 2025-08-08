// import node module libraries
import React, { useState } from "react";
import { StarFill } from "react-bootstrap-icons";

const StarRater = ({
  emptyClass = "text-light",
  fillClass = "text-warning",
  size = 20,
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starIndex = index + 1;

        return (
          <StarFill
            key={starIndex}
            className={starIndex <= (hover || rating) ? fillClass : emptyClass}
            size={size}
            onClick={() => setRating(starIndex)}
            onMouseEnter={() => setHover(starIndex)}
            onMouseLeave={() => setHover(rating)}
          />
        );
      })}
    </div>
  );
};

export default StarRater;
