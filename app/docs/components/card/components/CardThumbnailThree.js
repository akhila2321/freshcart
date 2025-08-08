// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import ProductWithCountdown from "components/cards/ProductWithCountdown";

// import required data file
import { products } from "data/products/AllProductsData";
import { CardThumbnailThreeCode } from "data/code/components-code/CardCode";

const CardThumbnailThree = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="mb-4">
          <h2 className="mb-0">Card Thumbnail #3</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <Col xl={9} lg={9} md={12} xs={12} className="mx-auto">
                {products.slice(4, 5).map((item) => (
                  <ProductWithCountdown product={item} key={item.id} />
                ))}
              </Col>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={CardThumbnailThreeCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default CardThumbnailThree;
