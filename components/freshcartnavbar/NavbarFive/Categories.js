// import node module libraries
import React from "react";
import { Button } from "react-bootstrap";
import { TextLeft } from "react-bootstrap-icons";

const Categories = ({ className }) => {
  const handleClick = (e) => {
    e.preventDefault();
    // No action needed - button will do nothing when clicked
  };

  return (
    <div className={className ? className : "me-3 d-none d-lg-block"}>
      <Button 
        variant="outline-secondary" 
        onClick={handleClick}
      >
        <TextLeft size={16} className="me-2" />
        All Categories
      </Button>
    </div>
  );
};

export default Categories;
