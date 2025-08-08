// import node module libraries
import { Row, Col, Tab, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { WhiteCloseButtonCode } from "data/code/CloseButtonCode";

const WhiteCloseButton = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="mb-4">
          <h2>White variant</h2>
          <p className="mb-0">
            Change the default
            <code> .btn-close </code>
            to be white with the
            <code> .btn-close-white </code>
            class. This class uses the
            <code> filter </code>
            property to invert the
            <code> background-image </code>.
          </p>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-dark p-4"
              id="pills-whiteVarient-design"
            >
              <Button variant="close" className="btn-close-white" />
              <Button variant="close" className="btn-close-white" disabled />
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={WhiteCloseButtonCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default WhiteCloseButton;
