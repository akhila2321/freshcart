// import node module libraries
import { useRef, useEffect } from "react";
import { Form } from "react-bootstrap";

const Checkbox = ({ indeterminate, className = "", ...rest }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate, rest.checked]);

  return <Form.Check type="checkbox" ref={ref} {...rest} />;
};
export default Checkbox;
