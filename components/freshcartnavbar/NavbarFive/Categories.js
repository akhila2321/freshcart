// import node module libraries
import React from "react";
import { Button } from "react-bootstrap";
import { TextLeft } from "react-bootstrap-icons";
import Link from "next/link";

const Categories = ({ className }) => {
  return (
    <div className={className ? className : "me-3 d-none d-lg-block"}>
      <Link href="#" className="btn btn-outline-secondary">
        <TextLeft size={16} className="me-2" />
        All Categories
      </Link>
    </div>
  );
};

export default Categories;
