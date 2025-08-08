// import node module libraries
import React from "react";
import { Button } from "react-bootstrap";
import { MapPin } from "react-feather";
import PropTypes from "prop-types";

const PickLocationButton = ({ btnLabel, btnIcon, className, onClick }) => {
  //Rendering condition icon
  const iconComponent = btnIcon ? (
    btnIcon
  ) : (
    <MapPin className="me-2" size={14} />
  );

  return (
    <Button variant="outline-gray-400" className={className} onClick={onClick}>
      {iconComponent}
      {btnLabel}
    </Button>
  );
};

PickLocationButton.propTypes = {
  btnLabel: PropTypes.string.isRequired,
  btnIcon: PropTypes.elementType,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default PickLocationButton;
