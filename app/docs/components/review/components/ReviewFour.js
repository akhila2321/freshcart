// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import CreateReview from "components/reviews/CreateReview";

// import required data file
import { ReviewFourCode } from "data/code/components-code/ReviewCode";

const ReviewFour = () => {
  return (
    <Row className="mb-8">
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="" className="mb-4">
          <h2 className="mb-0">Reviews #4</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-white border p-4"
            >
              <Row>
                <Col lg={8}>
                  <CreateReview />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={ReviewFourCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default ReviewFour;
