// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import ProductHorizontalCard from "components/cards/ProductHorizontalCard";

// import required data file
import { products } from "data/products/AllProductsData";
import { CardWithListCode } from "data/code/components-code/CardCode";

const CardWithList = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="mb-4">
          <h2 className="mb-0">Card with List</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              {products.slice(0, 1).map((item) => (
                <ProductHorizontalCard product={item} key={item.id} />
              ))}
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={CardWithListCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default CardWithList;
