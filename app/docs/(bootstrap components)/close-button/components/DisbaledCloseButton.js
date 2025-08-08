// import node module libraries
import { Row, Col, Tab, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { DisbaleCloseButtonCode } from "data/code/CloseButtonCode";

const DisbaledCloseButton = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="mb-4">
          <h2>Disabled state</h2>
          <p className="mb-0">
            Disabled close buttons change their
            <code> opacity </code>. We’ve also applied
            <code> pointer-events: none </code>
            and
            <code> user-select: none </code>
            to preventing hover and active states from triggering.
          </p>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
              id="pills-disabledButton-design"
            >
              <Button variant="close" disabled />
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={DisbaleCloseButtonCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default DisbaledCloseButton;
