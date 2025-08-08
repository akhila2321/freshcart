// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import ReviewButton from "components/reviews/ReviewButton";

// import required data file
import { ReviewTwoCode } from "data/code/components-code/ReviewCode";

const ReviewTwo = () => {
  return (
    <Row className="mb-8">
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="" className="mb-4">
          <h2 className="mb-0">Reviews #2</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-white border p-4"
            >
              <Row>
                <Col lg={3}>
                  <ReviewButton />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={ReviewTwoCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default ReviewTwo;
