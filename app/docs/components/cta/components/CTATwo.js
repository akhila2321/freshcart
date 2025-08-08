// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import OffersCTA from "components/cta/OffersCTA";

// import required data file
import { offersData } from "data/OffersData";
import { CTATwoCode } from "data/code/components-code/CTACode";

const CTATwo = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="" className="mb-4">
          <h2 className="mb-0">CTA #2</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <div style={{ maxWidth: "390px" }}>
                {offersData.slice(0, 1).map((item) => (
                  <OffersCTA data={item} key={item.id} />
                ))}
              </div>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={CTATwoCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default CTATwo;
