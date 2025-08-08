// import node module libraries
import { useState, useEffect } from "react";
import parse from "html-react-parser";

export const useParse = (htmlContent, maxLength) => {
  const [parsedContent, setParsedContent] = useState("");

  useEffect(() => {
    if (htmlContent) {
      const parsed = parse(htmlContent);
      setParsedContent(parsed);
    }
  }, [htmlContent]);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const extractTextFromElements = (element) => {
    if (typeof element === "string") {
      return element;
    }
    if (element.props && element.props.children) {
      const children = Array.isArray(element.props.children)
        ? element.props.children
        : [element.props.children];
      return children.map((child) => extractTextFromElements(child)).join("");
    }
    return "";
  };

  const textContent = parse(htmlContent);
  const truncatedContent = truncateText(
    extractTextFromElements(parsedContent),
    maxLength
  );

  return { textContent, truncatedContent };
};
