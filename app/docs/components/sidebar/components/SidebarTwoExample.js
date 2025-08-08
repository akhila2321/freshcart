// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import StoreDetails from "components/store/StoreDetails";
import StoreNavigation from "components/store/StoreNavigation";
import StoreCategoryNavigation from "components/store/StoreCategoryNavigation";

// import required data file
import { SidebarTwoExampleCode } from "data/code/components-code/SidebarCode";

const SidebarTwoExample = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="" className="mb-4">
          <h2 className="mb-0">Sidebar #2</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-white border p-4"
            >
              <Row>
                <Col xs={12} lg={3} md={4} className="mb-4 mb-md-0">
                  <StoreDetails />
                  <hr />
                  <StoreNavigation />
                  <hr />
                  <StoreCategoryNavigation />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={SidebarTwoExampleCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default SidebarTwoExample;
