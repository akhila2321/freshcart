// import node module libraries
import React from "react";
import { Tab, Nav } from "react-bootstrap";

const CustomTab = ({ defaultActiveKey, children }) => {
  return (
    <Tab.Container defaultActiveKey={defaultActiveKey}>
      <Nav className="nav-line-bottom nav-example mb-3" id="pills-tabTwo">
        {React.Children.map(children, (child) => {
          // Check if child is a Tab.Pane
          if (child.type === Tab.Pane) {
            return (
              <Nav.Item key={child.props.eventKey}>
                <Nav.Link eventKey={child.props.eventKey}>
                  {child.props.title}
                </Nav.Link>
              </Nav.Item>
            );
          }
        })}
      </Nav>
      <Tab.Content>
        {React.Children.map(children, (child) => {
          // Check if child is a Tab.Pane
          if (child.type === Tab.Pane) {
            return (
              <Tab.Pane
                eventKey={child.props.eventKey}
                key={child.props.eventKey}
                id={child.props.id}
                className={child.props.className}
              >
                {child.props.children}
              </Tab.Pane>
            );
          }
        })}
      </Tab.Content>
    </Tab.Container>
  );
};

export default CustomTab;
