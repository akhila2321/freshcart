// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import DiscountOnShareCTA from "components/cta/DiscountOnShareCTA";

// import required data file
import { discountOnShareData } from "data/CTAData";
import { CTAFourCode } from "data/code/components-code/CTACode";

const CTAFour = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="" className="mb-4">
          <h2 className="mb-0">CTA #4</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <DiscountOnShareCTA data={discountOnShareData} />
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={CTAFourCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default CTAFour;
