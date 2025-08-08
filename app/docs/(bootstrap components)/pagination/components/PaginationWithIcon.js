// import node module libraries
import { Row, Col, Tab, Pagination } from "react-bootstrap";
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data files
import { PaginationWithIconCode } from "data/code/PaginationCode";

const PaginationWithIcon = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="working-with-icons" className="mb-4">
          <h2>Working with icons</h2>
          <p>
            Looking to use an icon or symbol in place of text for some
            pagination links? Be sure to provide proper screen reader support
            with
            <code className="highlighter-rouge">aria</code>
            attributes.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
              id="pills-working-with-icons-design"
            >
              <Pagination>
                <Pagination.Prev>
                  <ChevronLeft size="18px" />
                </Pagination.Prev>
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next>
                  <ChevronRight size="18px" />
                </Pagination.Next>
              </Pagination>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={PaginationWithIconCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default PaginationWithIcon;
