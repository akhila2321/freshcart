// import node module libraries
import { Row, Col, Button, Tab, Spinner } from "react-bootstrap";
import { ShoppingBag } from "react-feather";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  IconButtonCode,
  IconButtonCode2,
  IconButtonCode3,
} from "data/code/ButtonCode";

const IconButton = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="button-icon" className="mb-4">
          <h2>Button icons</h2>
          <p>A contained button with an icon.</p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey="design">
              <Button variant="primary">
                Your Text Goes Here <ShoppingBag size={14} className="ms-1" />
              </Button>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey="code">
              <HighlightCode code={IconButtonCode} />
            </Tab.Pane>
          </CustomTab>
        </div>

        <div className="mb-3">With fixed width and height.</div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey="design">
              <Button variant="primary" className="btn-icon">
                +
              </Button>{" "}
              <Button variant="primary" className="btn-icon">
                <Spinner animation="border" size="sm" />
              </Button>{" "}
              <Button
                variant="white"
                className="btn-icon border border-2 rounded-circle btn-dashed ms-2"
              >
                +
              </Button>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey="code">
              <HighlightCode code={IconButtonCode2} />
            </Tab.Pane>
          </CustomTab>
        </div>

        <div className="mb-3">Also available in all button sizes.</div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey="design">
              <Button variant="primary" size="lg">
                +
              </Button>{" "}
              <Button variant="primary">+</Button>{" "}
              <Button variant="primary" size="sm">
                +
              </Button>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey="code">
              <HighlightCode code={IconButtonCode3} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default IconButton;
