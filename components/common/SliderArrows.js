// import node module libraries
import { ChevronRight, ChevronLeft } from "react-feather";

export const NextSlideArrow = (props) => {
  const { onClick, size } = props;

  return (
    <span className="slick-next" onClick={onClick}>
      <ChevronRight size={size} />
    </span>
  );
};

export const PrevSlideArrow = (props) => {
  const { onClick, size } = props;

  return (
    <span className="slick-prev" onClick={onClick}>
      <ChevronLeft size={size} />
    </span>
  );
};
