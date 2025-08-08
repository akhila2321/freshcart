// import node module libraries
import { StarFill, StarHalf, Star } from "react-bootstrap-icons";

const StarRatings = ({ rating = 0, size, className }) => {
  rating = Math.abs(rating);
  let integer = Math.floor(rating);
  let decimal = rating - integer;
  let starsize = size ? size : "0.875rem";

  const PrintFilledStar = (repeatValue) => {
    const stars = [];
    for (let i = 1; i <= repeatValue; i++) {
      stars.push(
        <StarFill
          key={i}
          size={starsize}
          className={className ? className : "text-warning"}
        />
      );
    }
    return stars;
  };
  const PrintHalfStar = (repeatValue) => {
    return repeatValue > 0 ? (
      <StarHalf
        size={starsize}
        className={className ? className : "text-warning"}
      />
    ) : (
      ""
    );
  };
  const PrintBlankStar = (repeatValue) => {
    const blankstars = [];
    for (let i = 1; i <= repeatValue; i++) {
      blankstars.push(
        <Star
          key={i}
          size={starsize}
          className={className ? className : "text-warning"}
        />
      );
    }
    return blankstars;
  };
  return (
    <div className="d-flex gap-1">
      {PrintFilledStar(integer)}
      {PrintHalfStar(decimal)}
      {PrintBlankStar(5 - integer - (decimal > 0 ? 1 : 0))}
    </div>
  );
};

export default StarRatings;
