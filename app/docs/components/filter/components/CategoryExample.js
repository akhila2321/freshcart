// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import CategoriesCollapse from "components/shop/CategoriesCollapse";

// import required data file
import { CategoryExampleCode } from "data/code/components-code/FilterCode";

const CategoryExample = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="mb-4">
          <h2 className="mb-0">Category</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-white border p-4"
            >
              <CategoriesCollapse style={{ maxWidth: "390px" }} />
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={CategoryExampleCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default CategoryExample;
