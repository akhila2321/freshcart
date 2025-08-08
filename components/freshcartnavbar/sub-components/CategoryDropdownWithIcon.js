// import node module libraries
import React from "react";
import { Button } from "react-bootstrap";
import { TextLeft } from "react-bootstrap-icons";

const CategoryDropdownWithIcon = ({
  className,
  title = "All",
  btnVariant = "primary",
  btnClass,
  iconColor,
}) => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    e.stopPropagation(); // Stop event bubbling
    // No action needed - button will do nothing when clicked
  };

  return (
    <div className={className ? className : "me-3 d-none d-lg-block"}>
      <Button 
        variant={btnVariant} 
        className={btnClass}
        onClick={handleClick}
        aria-label={title}
      >
        <TextLeft
          size={16}
          className={`me-2 ${iconColor ? iconColor : "text-white"}`}
        />
        {title}
      </Button>
    </div>
  );
};

export default CategoryDropdownWithIcon;
