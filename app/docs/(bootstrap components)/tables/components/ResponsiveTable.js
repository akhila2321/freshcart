// import node module libraries
import { Row, Col, Tab, Table } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { ResponsiveTableCode } from "data/code/TableCode";

const ResponsiveTable = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="responsive-tables" className="mb-4">
          <h2>Responsive tables</h2>
          <p>
            Responsive tables allow tables to be scrolled horizontally with
            ease. Make any table responsive across all viewports by wrapping a
            <code className="highlighter-rouge"> .table </code> with{" "}
            <code className="highlighter-rouge"> .table-responsive </code>. Or,
            pick a maximum breakpoint with which to have a responsive table up
            to by using{" "}
            <code className="highlighter-rouge">
              .table-responsive {"-sm | -md | -lg | -xl"}
            </code>
            .
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Table responsive>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                </tbody>
              </Table>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={ResponsiveTableCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default ResponsiveTable;
