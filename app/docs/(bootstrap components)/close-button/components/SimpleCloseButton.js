// import node module libraries
import { Row, Col, Tab, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { SimpleCloseButtonCode } from "data/code/CloseButtonCode";

const SimpleCloseButton = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="mb-4">
          <h2>Examples</h2>
          <p className="mb-0">
            Provide an option to dismiss or close a component with
            <code> .btn-close </code>. Default styling is limited, but highly
            customizable. Modify the Sass variables to replace the default
            <code> background-image </code>.
            <strong>Be sure to include text for screen readers</strong>, as
            we’ve done with
            <code> aria-label </code>.
          </p>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
              id="pills-closeButton-design"
            >
              <Button variant="close" />
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={SimpleCloseButtonCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default SimpleCloseButton;
