// import node module libraries
import { Fragment } from "react";
import { Row, Col, Tab, Pagination } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  PaginationSizeCode,
  PaginationSizeCode2,
} from "data/code/PaginationCode";

const PaginationSize = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="sizing" className="mb-4">
            <h2>Sizing</h2>
            <p>
              Fancy larger or smaller pagination? Add
              <code className="highlighter-rouge"> .pagination-lg </code>
              or
              <code className="highlighter-rouge"> .pagination-sm </code>
              for additional sizes.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane
                title="Design"
                eventKey={"design"}
                className="bg-light p-4"
                id="pills-sizing-large-design"
              >
                <Pagination size="lg">
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                </Pagination>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={PaginationSizeCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane
                title="Design"
                eventKey={"design"}
                className="bg-light p-4"
              >
                <Pagination size="sm">
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                </Pagination>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={PaginationSizeCode2} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default PaginationSize;
