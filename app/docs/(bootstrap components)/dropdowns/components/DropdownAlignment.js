// import node module libraries
import { Fragment } from "react";
import { Row, Col, Tab, Dropdown, ButtonGroup } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  DropdownMenuAlignmentCode,
  DropdownMenuRightAlignmentCode,
} from "data/code/DropdownCode";

const DropdownAlignment = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="alignment" className="mb-4">
            <h2>Menu Alignment</h2>
            <p>
              By default, a dropdown menu is automatically positioned 100% from
              the top and along the left side of its parent. Add{" "}
              <code className="highlighter-rouge">.dropdown-menu-right</code> to
              a <code className="highlighter-rouge">.dropdown-menu</code> to
              right align the dropdown menu.
            </p>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Dropdown as={ButtonGroup} className="me-1 mb-1">
                  <Dropdown.Toggle variant="secondary">
                    Dropdown
                  </Dropdown.Toggle>
                  <Dropdown.Menu as="ul">
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown as={ButtonGroup} className="me-1 mb-1" align={"end"}>
                  <Dropdown.Toggle variant="secondary">
                    Right-aligned menu
                  </Dropdown.Toggle>
                  <Dropdown.Menu as="ul">
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown
                  as={ButtonGroup}
                  className="me-1 mb-1"
                  align={{ lg: "start" }}
                >
                  <Dropdown.Toggle variant="secondary">
                    Left-aligned, right-aligned lg
                  </Dropdown.Toggle>
                  <Dropdown.Menu as="ul" align={"end"}>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown
                  as={ButtonGroup}
                  className="me-1 mb-1"
                  align={{ lg: "start" }}
                >
                  <Dropdown.Toggle variant="secondary">
                    Right-aligned, left-aligned lg
                  </Dropdown.Toggle>
                  <Dropdown.Menu as="ul" align={"end"}>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown as={ButtonGroup} className="me-1 mb-1" drop="start">
                  <Dropdown.Toggle variant="secondary">
                    Dropstart
                  </Dropdown.Toggle>
                  <Dropdown.Menu as="ul">
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown as={ButtonGroup} className="me-1 mb-1" drop="end">
                  <Dropdown.Toggle variant="secondary">Dropend</Dropdown.Toggle>
                  <Dropdown.Menu as="ul">
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown as={ButtonGroup} className="me-1 mb-1" drop="up">
                  <Dropdown.Toggle variant="secondary">Dropup</Dropdown.Toggle>
                  <Dropdown.Menu as="ul">
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={DropdownMenuAlignmentCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="responsiveAlignment" className="mb-4 mt-4">
            <h3 className="fw-semibold mb-1">Responsive Menu Alignment</h3>
            <p>
              By default, a dropdown menu is automatically positioned 100% from
              the top and along the left side of its parent. Add{" "}
              <code className="highlighter-rouge">.dropdown-menu-right</code> to
              a <code className="highlighter-rouge">.dropdown-menu</code> to
              right align the dropdown menu.
            </p>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Dropdown as={ButtonGroup} align={{ lg: "start" }}>
                  <Dropdown.Toggle variant="secondary" className="text-wrap">
                    Left-aligned but right aligned when large screen
                  </Dropdown.Toggle>
                  <Dropdown.Menu as="ul">
                    <Dropdown.Item as="li">Action</Dropdown.Item>
                    <Dropdown.Item as="li">Another action</Dropdown.Item>
                    <Dropdown.Item as="li">Something else here</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown
                  as={ButtonGroup}
                  className="mt-2"
                  align={{ lg: "start" }}
                >
                  <Dropdown.Toggle variant="secondary" className="text-wrap">
                    Right-aligned but left aligned when large screen
                  </Dropdown.Toggle>
                  <Dropdown.Menu as="ul">
                    <Dropdown.Item as="li">Action</Dropdown.Item>
                    <Dropdown.Item as="li">Another action</Dropdown.Item>
                    <Dropdown.Item as="li">Something else here</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={DropdownMenuRightAlignmentCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default DropdownAlignment;
