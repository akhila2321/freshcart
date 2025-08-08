// import node module libraries
import { Fragment } from "react";
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import StoreCard from "components/cards/StoreCard";
import StoreCard2 from "components/cards/StoreCard2";

// import required data file
import { storeData } from "data/StoreData";
import {
  FeaturedStoreCode,
  FeaturedStoreCode2,
} from "data/code/components-code/CardCode";

const FeaturedStore = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="" className="mb-4">
            <h2 className="mb-0">Featured Stores</h2>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane
                title="Design"
                eventKey={"design"}
                className="bg-light p-4"
              >
                <Col xl={8} lg={8} md={12} xs={12} className="mx-auto">
                  {storeData.slice(0, 1).map((store) => (
                    <StoreCard storeDetails={store} key={store.id} />
                  ))}
                </Col>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={FeaturedStoreCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

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
                  {storeData.slice(0, 1).map((store) => (
                    <StoreCard2 storeDetails={store} key={store.id} />
                  ))}
                </Col>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={FeaturedStoreCode2} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default FeaturedStore;
