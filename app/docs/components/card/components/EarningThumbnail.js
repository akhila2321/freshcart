// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import EarningCard from "components/cards/EarningCard";

// import required data file
import { EarningThumbnailCode } from "data/code/components-code/CardCode";

const EarningThumbnail = () => {
  const earningData = {
    duration: "Monthly revenue",
    earning: 93438.78,
  };

  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <Col xl={8} lg={8} md={12} xs={12} className="mx-auto">
                <EarningCard data={earningData} style={{ maxWidth: "390px" }} />
              </Col>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={EarningThumbnailCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default EarningThumbnail;
