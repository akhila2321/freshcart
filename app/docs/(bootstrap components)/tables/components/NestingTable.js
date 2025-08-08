// import node module libraries
import { Fragment } from "react";
import { Row, Col, Tab, Table } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  AnatomyTableHeadCode,
  AnatomyTableHeadDarkCode,
  NestingTableCode,
  TableCaptionCode,
  TableFooterCode,
  TableTopCaptionCode,
} from "data/code/TableCode";

const NestingTable = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="nesting-tables" className="mb-4">
            <h2>Nesting</h2>
            <p className="mb-0">
              Border styles, active styles, and table variants are not inherited
              by nested tables.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Table responsive striped bordered>
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
                      <td colSpan="4">
                        <table className="table mb-0">
                          <thead>
                            <tr>
                              <th scope="col">Header</th>
                              <th scope="col">Header</th>
                              <th scope="col">Header</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">A</th>
                              <td>First</td>
                              <td>Last</td>
                            </tr>
                            <tr>
                              <th scope="row">B</th>
                              <td>First</td>
                              <td>Last</td>
                            </tr>
                            <tr>
                              <th scope="row">C</th>
                              <td>First</td>
                              <td>Last</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
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
                <HighlightCode code={NestingTableCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* How Nesting Works */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="how-nesting-works" className="mb-4">
            <h2 className="fw-semibold mb-2">How nesting works</h2>

            <p className="mb-0">
              To prevent <em>any</em> styles from leaking to nested tables, we
              use the child combinator (<code> &gt; </code>) selector in our
              CSS. Since we need to target all the <code> td </code>s and{" "}
              <code> th </code> s in the <code> thead </code>,{" "}
              <code> tbody </code>, and <code>tfoot</code>, our selector would
              look pretty long without it. As such, we use the rather odd
              looking <code> .table &gt; :not(caption) &gt; * &gt; * </code>{" "}
              selector to target all <code> td </code>s and <code> th </code> s
              of the <code> .table </code>, but none of any potential nested
              tables.
            </p>
            <h2 className="fw-semibold mb-1 mb-3 mt-6">Anatomy</h2>
            <h3 className="fw-semibold">Table head</h3>
            <p>
              Similar to tables and dark tables, use the modifier classes{" "}
              <code> .table-light </code> or <code>.table-dark</code> to make{" "}
              <code>&lt;thead&gt;</code>s appear light or dark gray.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Table>
                  <thead className="table-light">
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
                <HighlightCode code={AnatomyTableHeadCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
          {/* Table Anatomy Dark */}
          <div className="mt-5">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Table>
                  <thead className="table-dark">
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
                <HighlightCode code={AnatomyTableHeadDarkCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
          {/* Table Footer */}
          <div className="mt-5">
            <h3 className="fw-semibold">Table Footer</h3>
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Table>
                  <thead className="table-light">
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
                  <tfoot>
                    <tr>
                      <td>Footer</td>
                      <td>Footer</td>
                      <td>Footer</td>
                      <td>Footer</td>
                    </tr>
                  </tfoot>
                </Table>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={TableFooterCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
          {/* Table Caption */}
          <div className="mt-5">
            <h3 className="fw-semibold">Captions</h3>
            <p>
              A <code>&lt;caption&gt;</code> functions like a heading for a
              table. It helps users with screen readers to find a table and
              understand what it’s about and decide if they want to read it.
            </p>
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Table>
                  <caption>List of users</caption>
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
                <HighlightCode code={TableCaptionCode} />
              </Tab.Pane>
            </CustomTab>
          </div>

          <div className="mt-5">
            <p>
              You can also put the <code> &lt;caption&gt; </code> on the top of
              the table with <code> .caption-top </code>.
            </p>
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Table className="caption-top">
                  <caption>List of users</caption>
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
                <HighlightCode code={TableTopCaptionCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default NestingTable;
