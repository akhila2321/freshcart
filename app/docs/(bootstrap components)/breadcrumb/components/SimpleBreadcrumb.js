// import node module libraries
import { Row, Col, Breadcrumb, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { SimpleBreadcrumbCode } from "data/code/BreadcrumbCode";

const SimpleBreadcrumb = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="breadcrumb" className="mb-4">
          <h2>Breadcrumb</h2>
          <p>
            Use an ordered or unordered list with linked list items to create a
            minimally styled breadcrumb. Use our utilities to add additional
            styles as desired.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey={"design"}>
              <Breadcrumb as={"nav"}>
                <Breadcrumb.Item active>Home</Breadcrumb.Item>
              </Breadcrumb>

              <Breadcrumb as={"nav"}>
                <Breadcrumb.Item href="">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="" active>
                  Library
                </Breadcrumb.Item>
              </Breadcrumb>

              <Breadcrumb as={"nav"}>
                <Breadcrumb.Item href="">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="">Library</Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
              </Breadcrumb>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={SimpleBreadcrumbCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default SimpleBreadcrumb;
