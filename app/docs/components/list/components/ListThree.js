// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import FeaturesWithLeftIcon from "components/features/FeaturesWithLeftIcon";

// import required data file
import { companyFeaturedData2 } from "data/CompanyFeaturedData";
import { ListThreeCode } from "data/code/components-code/ListCode";

const ListThree = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="" className="mb-4">
          <h2 className="mb-0">List #3</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <Row>
                <Col lg={6}>
                  <FeaturesWithLeftIcon data={companyFeaturedData2} />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={ListThreeCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default ListThree;
