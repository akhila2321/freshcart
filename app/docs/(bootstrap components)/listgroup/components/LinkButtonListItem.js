// import node module libraries
import { Fragment } from "react";
import Link from "next/link";
import { Row, Col, Tab, ListGroup } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  LinkButtonListItemCode,
  LinkButtonListItemCode2,
} from "data/code/ListGroupCode";

const LinkButtonListItem = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="links-and-buttons" className="mb-4">
            <h2>Links and buttons</h2>
            <p>
              Use<code className="highlighter-rouge"> &lt;a&gt; </code>s or
              <code className="highlighter-rouge"> &lt;button&gt; </code>s to
              create
              <em> actionable </em>
              list group items with hover, disabled, and active states by adding
              <code className="highlighter-rouge">
                {" "}
                .list-group-item-action{" "}
              </code>
              . We separate these pseudo-classes to ensure list groups made of
              non-interactive elements (like
              <code className="highlighter-rouge"> &lt;li&gt; </code>s or
              <code className="highlighter-rouge"> &lt;div&gt; </code>
              s) don’t provide a click or tap affordance.
            </p>
            <p>
              Be sure to
              <strong>
                not use the standard
                <code className="highlighter-rouge"> .btn </code>
                classes here
              </strong>
              .
            </p>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane
                title="Design"
                eventKey={"design"}
                className="bg-light p-4"
              >
                <ListGroup>
                  <ListGroup.Item as={Link} href="" disabled action>
                    Cras justo odio
                  </ListGroup.Item>
                  <ListGroup.Item as={Link} href="" action>
                    Dapibus ac facilisis in
                  </ListGroup.Item>
                  <ListGroup.Item as={Link} href="" action>
                    Morbi leo risus
                  </ListGroup.Item>
                  <ListGroup.Item as={Link} href="" action>
                    Porta ac consectetur ac
                  </ListGroup.Item>
                  <ListGroup.Item as={Link} href="" action disabled>
                    Vestibulum at eros
                  </ListGroup.Item>
                </ListGroup>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={LinkButtonListItemCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4">
            <p>
              With
              <code className="highlighter-rouge"> &lt;button&gt; </code>
              s, you can also make use of the
              <code className="highlighter-rouge"> disabled </code>
              attribute instead of the
              <code className="highlighter-rouge"> .disabled </code>
              class. Sadly,
              <code className="highlighter-rouge"> &lt;a&gt; </code>s don’t
              support the disabled attribute.
            </p>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane
                title="Design"
                eventKey={"design"}
                className="bg-light p-4"
              >
                <ListGroup>
                  <ListGroup.Item action type="button" as={"button"} active>
                    Cras justo odio
                  </ListGroup.Item>
                  <ListGroup.Item action type="button" as={"button"}>
                    Dapibus ac facilisis in
                  </ListGroup.Item>
                  <ListGroup.Item action type="button" as={"button"}>
                    Morbi leo risus
                  </ListGroup.Item>
                  <ListGroup.Item action type="button" as={"button"}>
                    Porta ac consectetur ac
                  </ListGroup.Item>
                  <ListGroup.Item action type="button" as={"button"} disabled>
                    Vestibulum at eros
                  </ListGroup.Item>
                </ListGroup>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={LinkButtonListItemCode2} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default LinkButtonListItem;
