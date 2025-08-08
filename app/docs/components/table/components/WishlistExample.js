// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import WishListTable from "components/shop/WishListTable";

// import required data file
import { WishlistExampleCode } from "data/code/components-code/TableCode";

// import required hook
import { useWishlist } from "hooks/useWishlist";

const WishlistExample = () => {
  const { wishListItems } = useWishlist();
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-white border p-4"
            >
              <WishListTable data={wishListItems} />
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={WishlistExampleCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default WishlistExample;
