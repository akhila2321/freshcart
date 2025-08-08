// import node module libraries
import { Row, Col, Tab, Table } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { TableVariantCode } from "data/code/TableCode";

const TableVariants = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="variants-classes" className="mb-4">
          <h2>Variants</h2>
          <p>Use contextual classes to color table rows or individual cells.</p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Table responsive className="text-nowrap">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Class</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-active">
                    <th scope="row">Active</th>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr>
                    <th scope="row">Default</th>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr className="table-primary">
                    <th scope="row">Primary</th>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr className="table-secondary">
                    <th scope="row">Secondary</th>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr className="table-success">
                    <th scope="row">Success</th>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr className="table-danger">
                    <th scope="row">Danger</th>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr className="table-warning">
                    <th scope="row">Warning</th>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr className="table-info">
                    <th scope="row">Info</th>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr className="table-light">
                    <th scope="row">Light</th>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr className="table-dark">
                    <th scope="row">Dark</th>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                </tbody>
              </Table>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={TableVariantCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default TableVariants;
