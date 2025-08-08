// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import CategoryCard from "components/cards/CategoryCard";

// import required data file
import { shopByCategoryData } from "data/CategoryData";
import { ShopByCategoriesCode } from "data/code/components-code/CardCode";

const ShopByCategories = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="" className="mb-4">
          <h2 className="mb-0">Shop by Categories</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <Col xl={6} lg={6} md={12} xs={12} className="mx-auto">
                {shopByCategoryData.slice(0, 1).map((category) => (
                  <CategoryCard category={category} key={category.id} />
                ))}
              </Col>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={ShopByCategoriesCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default ShopByCategories;
