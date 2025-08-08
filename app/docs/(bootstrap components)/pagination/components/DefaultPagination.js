// import node module libraries
import { Row, Col, Tab, Pagination } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { DefaultPaginationCode } from "data/code/PaginationCode";

const DefaultPagination = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="default-pagination" className="mb-4">
          <h2>Default Pagination</h2>
          <p>
            We use a large block of connected links for our pagination, making
            links hard to miss and easily scalable—all while providing large hit
            areas. Pagination is built with list HTML elements so screen readers
            can announce the number of available links. Use a wrapping
            <code className="highlighter-rouge"> &lt;nav&gt; </code>
            element to identify it as a navigation section to screen readers and
            other assistive technologies.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
              id="pills-default-pagination-design"
            >
              <Pagination className="mb-0">
                <Pagination.Prev>Previous</Pagination.Prev>
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next>Next</Pagination.Next>
              </Pagination>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={DefaultPaginationCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default DefaultPagination;
