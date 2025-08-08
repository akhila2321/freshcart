// import node module libraries
import { Fragment } from "react";
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import ProductCardSix from "components/cards/ProductCardSix";
import AddressCard from "components/cards/AddressCard";

// import required data file
import { addressListData } from "data/user/AddressListData";
import {
  CardWithTextCode,
  CardWithTextCode2,
} from "data/code/components-code/CardCode";
import { products } from "data/products/AllProductsData";

// import required hooks
import { useMounted } from "hooks/useMounted";

const CardWithText = () => {
  const hasMounted = useMounted();
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="" className="mb-4">
            <h2 className="mb-0">Card with Text</h2>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane
                title="Design"
                eventKey={"design"}
                className="bg-light p-4"
              >
                <Col xl={8} lg={8} md={12} xs={12} className="mx-auto">
                  {hasMounted && addressListData?.slice(0, 1).map((item) => (
                    <AddressCard
                      key={item?.id}
                      data={item}
                      isDefault={item?.isDefault}
                    />
                  ))}
                </Col>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={CardWithTextCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Card With Text Product */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="" className="mb-4">
            <h2 className="mb-0">Card with Text</h2>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane
                title="Design"
                eventKey={"design"}
                className="bg-light p-4"
              >
                <Col xl={6} lg={6} md={12} xs={12} className="mx-auto">
                  {products.slice(0, 1).map((item) => (
                    <ProductCardSix product={item} key={item.id} />
                  ))}
                </Col>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={CardWithTextCode2} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CardWithText;
