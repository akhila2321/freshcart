// import node module libraries
import PropTypes from "prop-types";
import { Badge } from "react-bootstrap";

const FreshBadge = ({
  content,
  text,
  bg = "success",
  pill = true,
  className,
  ...props
}) => {
  const badgeClassName = `custom-badge ${className || ""}`;

  return (
    <Badge
      bg={bg}
      pill={pill}
      className={badgeClassName}
      text={text}
      {...props}
    >
      {content}
    </Badge>
  );
};

FreshBadge.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  pill: PropTypes.bool,
  bg: PropTypes.string,
};

export default FreshBadge;
