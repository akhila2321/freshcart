"use client";
import Flatpickr from "react-flatpickr";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const DatePicker = ({
  label = "Date",
  placeholder,
  value,
  onChange,
  required,
  isInvalid = false,
  errorMessage = "Please enter a valid date",
}) => {
  return (
    <Form.Group controlId="datePicker">
      {label && (
        <Form.Label>
          {label}
          {required && <span className="text-danger ms-1">*</span>}
        </Form.Label>
      )}

      <Flatpickr
        className={`form-control ${isInvalid ? "is-invalid" : ""}`}
        options={{
          dateFormat: "d-m-Y",
          altFormat: "F j, Y",
          allowInput: true,
        }}
        placeholder={placeholder || "Select a date"}
        value={value}
        onChange={onChange}
      />

      {isInvalid && (
        <Form.Control.Feedback type="invalid" className="d-block">
          {errorMessage}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

DatePicker.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  onChange: PropTypes.func,
  required: PropTypes.bool,
  isInvalid: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default DatePicker;
