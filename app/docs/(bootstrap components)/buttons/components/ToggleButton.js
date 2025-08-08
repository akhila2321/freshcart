// import node module libraries
import { useState } from "react";
import { Row, Col, Button, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { ToggleButtonCode } from "data/code/ButtonCode";

const ToggleButton = () => {
  const [buttonList, setButtonList] = useState({
    btnOne: false,
    btnTwo: true,
  });

  const handleClick = (buttonName) => {
    setButtonList((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="toggle-state" className="mb-4">
          <h2>Toggle states</h2>
          <p>
            Add
            <code className="highlighter-rouge">
              {" "}
              data-bs-toggle=&quot;button&quot;{" "}
            </code>
            to toggle a button’s
            <code className="highlighter-rouge"> active </code>
            state. If you’re pre-toggling a button, you must manually add the
            <code className="highlighter-rouge"> .active </code>
            class
            <strong> and </strong>
            <code className="highlighter-rouge">
              aria-pressed=&quot;true&quot;{" "}
            </code>
            to the
            <code className="highlighter-rouge"> &lt;button&gt; </code>.
          </p>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey="design">
              <Button
                variant="primary"
                active={buttonList.btnOne}
                onClick={() => handleClick("btnOne")}
              >
                Toggle button
              </Button>{" "}
              <Button
                variant="primary"
                active={buttonList.btnTwo}
                onClick={() => handleClick("btnTwo")}
              >
                Active toggle button
              </Button>
              <Button variant="primary" disabled>
                Disabled toggle button
              </Button>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey="code">
              <HighlightCode code={ToggleButtonCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default ToggleButton;
