// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import SingleReview from "components/reviews/SingleReview";
import FilterReview from "components/reviews/FilterReview";

// import required data file
import { reviewsData } from "data/ReviewsData";
import { ReviewThreeCode } from "data/code/components-code/ReviewCode";

const ReviewThree = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="" className="mb-4">
          <h2 className="mb-0">Reviews #3</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-white border p-4"
            >
              <Col md={8}>
                <div className="mb-10">
                  <FilterReview />
                  {reviewsData.slice(0, 2).map((review, index) => {
                    return (
                      <SingleReview
                        data={review}
                        key={review.id}
                        index={index}
                      />
                    );
                  })}
                </div>
              </Col>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={ReviewThreeCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default ReviewThree;
