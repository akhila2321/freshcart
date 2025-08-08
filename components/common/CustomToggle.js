// import node module libraries
import React from "react";
import { Button } from "react-bootstrap";
import { Grid } from "react-feather";

export const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Button
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className="px-6"
  >
    <Grid size={16} /> {children}
  </Button>
));

CustomToggle.displayName = "Custom Toggle";
