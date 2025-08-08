// import node module libraries
import { Row, Col, Tab, Container } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import CompanyFeatureCard from "components/cards/CompanyFeatureCard";

// import required data files
import { whyChooseData } from "data/WhyChooseData";
import { FeatureTwoCode } from "data/code/components-code/FeatureCode";

const FeatureTwo = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="" className="mb-4">
          <h2 className="mb-0">Feature 2</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <section className="my-lg-14 my-8">
                <Container>
                  <Row>
                    {whyChooseData.map((item) => (
                      <Col md={6} lg={3} key={item.id}>
                        <CompanyFeatureCard item={item} />
                      </Col>
                    ))}
                  </Row>
                </Container>
              </section>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={FeatureTwoCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default FeatureTwo;
