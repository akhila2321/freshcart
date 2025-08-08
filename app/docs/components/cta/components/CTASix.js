// import node module libraries
import { Container, Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import ZoomableCTA from "components/cta/ZoomableCTA";

// import required data file
import { ctaBannerData } from "data/CTAData";
import { CTASixCode } from "data/code/components-code/CTACode";

const CTASix = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <div className="my-lg-14 my-8">
                <Container>
                  <div className="table-responsive-xxl">
                    <Row className="flex-nowrap">
                      {ctaBannerData.map((item) => (
                        <Col key={item.id}>
                          <ZoomableCTA data={item} />
                        </Col>
                      ))}
                    </Row>
                  </div>
                </Container>
              </div>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={CTASixCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default CTASix;
