// import node module libraries
import { Container, Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import CompanyFeaturedCard2 from "components/cards/CompanyFeaturedCard2";

// import required data files
import { companyFeaturedData } from "data/CompanyFeaturedData";
import { FeatureOneCode } from "data/code/components-code/FeatureCode";

const FeatureOne = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="" className="mb-4">
          <h2 className="mb-0">Feature 1</h2>
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
                  <Row className="align-items-center">
                    {companyFeaturedData.map((item, index) => (
                      <Col key={item.id} lg={4} md={6} xs={12}>
                        <CompanyFeaturedCard2
                          item={item}
                          className={`${index != 2 && index != 5 ? "border-end-lg" : ""
                            }`}
                        />
                      </Col>
                    ))}
                  </Row>
                </Container>
              </section>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={FeatureOneCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default FeatureOne;
