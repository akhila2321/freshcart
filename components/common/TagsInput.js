"use client";
import React, { useRef } from "react";
import Tags from "@yaireo/tagify/dist/react.tagify"; // React wrapper
import { Form } from "react-bootstrap";
import "@yaireo/tagify/dist/tagify.css";
import PropTypes from "prop-types";

const TagsInput = ({ label = "Tags", placeholder = "Tags", onChange }) => {
  const tagifyRef = useRef();

  const settings = {
    whitelist: ["React", "Bootstrap", "Tagify", "JavaScript"],
    maxTags: 20,
    dropdown: {
      enabled: 1,
      fuzzySearch: true,
      position: "text",
    },
  };

  return (
    <Form.Group controlId="tagsInput">
      <Form.Label>{label}</Form.Label>
      <Tags
        tagifyRef={tagifyRef}
        settings={settings}
        onChange={onChange}
        className="form-control"
        placeholder={placeholder}
      />
    </Form.Group>
  );
};

// ** PropTypes
TagsInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default TagsInput;
