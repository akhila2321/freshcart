// import node module libraries
import { Fragment } from "react";
import { Button } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const HighlightCode = ({ code, className = '' }) => {
  const copyAction = (event) => {
    event.target.innerHTML = "Copied";
    setTimeout(() => {
      event.target.innerHTML = "Copy";
    }, 3000);
  };
  return (
    <Fragment>
      <div className="code-toolbar">
        <SyntaxHighlighter
          language="handlebars"
          style={monokaiSublime}
          className={`rounded ${className}`}
          customStyle={{ fontSize: "0.9rem" }}
        >
          {code}
        </SyntaxHighlighter>

        <div className="toolbar">
          <div className="toolbar-item">
            <CopyToClipboard text={code}>
              <Button
                size="sm"
                variant="light"
                className="copy-to-clipboard-button"
                onClick={copyAction}
              >
                Copy
              </Button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
