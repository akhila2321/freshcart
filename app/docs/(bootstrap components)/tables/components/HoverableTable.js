// import node module libraries
import { Row, Col, Tab, Table } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { HoverableTableCode } from "data/code/TableCode";

const HoverableTable = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="hoverable-rows" className="mb-4">
          <h2>Hoverable rows</h2>
          <p>
            Add <code className="highlighter-rouge"> .table-hover </code>
            to enable a hover state on table rows within a{" "}
            <code className="highlighter-rouge"> &lt;tbody&gt; </code>.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Table responsive hover className="text-nowrap">
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
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={HoverableTableCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default HoverableTable;
