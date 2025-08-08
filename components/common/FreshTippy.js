// import node module libraries
import PropTypes from "prop-types";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const FreshTippy = ({ children, content = "Enter Text", placement }) => {
  return (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={<Tooltip>{content}</Tooltip>}
    >
      {children}
    </OverlayTrigger>
  );
};

FreshTippy.propTypes = {
  content: PropTypes.string,
  placement: PropTypes.string,
  children: PropTypes.node,
};

export default FreshTippy;
