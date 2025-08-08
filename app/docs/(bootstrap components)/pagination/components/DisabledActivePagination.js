// import node module libraries
import { Row, Col, Tab, Pagination } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data files
import { DisabledPaginationCode } from "data/code/PaginationCode";

const DisabledActivePagination = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="disabled-and-active-states" className="mb-4">
          <h2>Disabled and active states</h2>
          <p>
            Pagination links are customizable for different circumstances. Use
            <code className="highlighter-rouge">.disabled</code>
            for links that appear un-clickable and
            <code className="highlighter-rouge">.active</code>
            to indicate the current page.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
              id="pills-disabled-and-active-states-design"
            >
              <Pagination className="mb-0">
                <Pagination.Prev disabled>Previous</Pagination.Prev>
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item active>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next>Next</Pagination.Next>
              </Pagination>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={DisabledPaginationCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default DisabledActivePagination;
