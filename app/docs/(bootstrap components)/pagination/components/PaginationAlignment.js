// import node module libraries
import Link from "next/link";
import { Fragment } from "react";
import { Row, Col, Tab, Pagination } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  PaginationAlignmentCode,
  PaginationAlignmentCode2,
} from "data/code/PaginationCode";

const PaginationAlignment = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="alignment" className="mb-4">
            <h2>Alignment</h2>
            <p>
              Change the alignment of pagination components with
              <Link href="#">flexbox utilities</Link>.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane
                title="Design"
                eventKey={"design"}
                className="bg-light p-4"
                id="pills-alignment-center-design"
              >
                <Pagination className="justify-content-center mb-0">
                  <Pagination.Prev disabled>Previous</Pagination.Prev>
                  <Pagination.Item>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Next>Next</Pagination.Next>
                </Pagination>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={PaginationAlignmentCode} />
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
                id="pills-alignment-right-design"
              >
                <Pagination className="justify-content-end mb-0 ">
                  <Pagination.Prev disabled>Previous</Pagination.Prev>
                  <Pagination.Item>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Next>Next</Pagination.Next>
                </Pagination>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={PaginationAlignmentCode2} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default PaginationAlignment;
