// import node module libraries
import { Fragment, useState } from "react";
import { Button, ListGroup, Nav, Tab, Form, Col } from "react-bootstrap";

// import custom components
import FreshBadge from "components/common/FreshBadge";

const DeliveryTimeTab = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data[0].date);

  const handleTabSelect = (eventKey) => {
    setActiveTab(eventKey);
  };
  return (
    <Fragment>
      <Nav
        variant="pills"
        className="nav-pills-light mb-3 nav-fill mt-5"
        defaultActiveKey={activeTab}
        onSelect={handleTabSelect}
      >
        {data.map((item) => (
          <Nav.Item key={item.date}>
            <Nav.Link
              as={Button}
              href=""
              onClick={(e) => e.preventDefault()}
              eventKey={item.date}
            >
              {item.day} <br />
              <small>{item.date}</small>
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <Tab.Content onSelect={handleTabSelect}>
        {data.map((item) => (
          <Tab.Pane
            eventKey={item.date}
            key={item.date}
            active={activeTab === item.date}
          >
            <ListGroup className="mt-4" variant="flush">
              {item.options.map((option, index) => (
                <ListGroup.Item
                  className="d-flex justify-content-between align-items-center px-0 py-3"
                  key={option.time}
                >
                  <Col xs={4}>
                    <Form.Check>
                      <Form.Check.Input
                        type="radio"
                        name="flexRadioDefault"
                        id={`flexRadioDefault${index + 1}`}
                      />
                      <Form.Check.Label
                        htmlFor={`flexRadioDefault${index + 1}`}
                      >
                        <span>{option.time}</span>
                      </Form.Check.Label>
                    </Form.Check>
                  </Col>
                  <Col xs={3} className="text-center">
                    {option.price}
                  </Col>
                  <Col xs={3} className="text-center">
                    <FreshBadge
                      content={option.status}
                      bg={option.status === "Paid" ? "danger" : "success"}
                      pill={false}
                    />
                  </Col>
                  <Col xs={2} className="text-end">
                    <Button
                      variant="outline-gray-400"
                      size="sm"
                      className="text-muted"
                    >
                      Choose
                    </Button>
                  </Col>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Fragment>
  );
};

export default DeliveryTimeTab;
