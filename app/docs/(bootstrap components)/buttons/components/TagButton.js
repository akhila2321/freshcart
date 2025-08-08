// import node module libraries
import { Row, Col, Button, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { TagButtonCode } from "data/code/ButtonCode";

const TagButton = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="button-tags" className="mb-4">
          <h2>Button tags</h2>
          <p>
            The
            <code> .btn </code>
            classes are designed to be used with the
            <code> &lt;button&gt; </code>
            element. However, you can also use these classes on
            <code> &lt;a&gt; </code>
            or
            <code> &lt;input&gt; </code>
            elements (though some browsers may apply a slightly different
            rendering).
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey="design">
              <Button href="" variant="primary">
                Link
              </Button>{" "}
              <Button variant="primary" type="submit">
                Buttom
              </Button>{" "}
              <Button
                as="input"
                type="button"
                value="Input"
                variant="primary"
              />{" "}
              <Button as="input" type="submit" value="Submit" />{" "}
              <Button as="input" type="reset" value="Reset" />
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey="code">
              <HighlightCode code={TagButtonCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default TagButton;
