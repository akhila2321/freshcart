// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import FooterDark from "components/footer/FooterDark";

// import required data file
import { FooterDarkCode } from "data/code/components-code/FooterCode";

const FooterDarkExample = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="" className="mb-4">
          <h2 className="mb-0">Footer Dark</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <FooterDark />
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={FooterDarkCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default FooterDarkExample;
