// import node module libraries
import { Fragment } from "react";
import { Row, Col, Tab, Table } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  StripedRowsTableCode,
  StripedRowsTableCode2,
} from "data/code/TableCode";

const StripedRowsTable = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="striped-rows" className="mb-4">
            <h2>Striped rows</h2>
            <p>
              Use <code className="highlighter-rouge"> .table-striped </code>
              to add zebra-striping to any table row within the{" "}
              <code className="highlighter-rouge"> &lt;tbody&gt; </code>.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Table responsive striped className="text-nowrap">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={StripedRowsTableCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Variant Two */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <p>These classes can also be added to table variants:</p>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Table responsive variant="success" className="text-nowrap">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={StripedRowsTableCode2} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default StripedRowsTable;
