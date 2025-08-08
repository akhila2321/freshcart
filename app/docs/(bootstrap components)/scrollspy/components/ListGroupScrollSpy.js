// import node module libraries
import { useEffect, useState } from "react";
import { Row, Col, Tab, ListGroup } from "react-bootstrap";
import Link from "next/link";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { ListGroupScrollSpyCode } from "data/code/ScrollSpyCode";

// import required hooks
import { useMounted } from "hooks/useMounted";

const ListGroupScrollSpy = () => {
  const [activeLink, setActiveLink] = useState("");
  const hasMounted = useMounted();

  const links = [
    { title: "Item 1", link: "#list-item-1" },
    { title: "Item 2", link: "#list-item-2" },
    { title: "Item 3", link: "#list-item-3" },
    { title: "Item 4", link: "#list-item-4" },
  ];

  useEffect(() => {
    if (hasMounted) {
      setActiveLink(window.location.hash);
    }
  }, [hasMounted]);

  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="example-with-list-group" className="mb-4">
          <h2>Example with list-group</h2>
          <p>
            Scrollspy also works with
            <code className="highlighter-rouge"> .list-group </code>
            s. Scroll the area next to the list group and watch the active class
            change.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Row>
                <Col xs={4}>
                  <ListGroup id="list-example">
                    {links.map((item) => (
                      <ListGroup.Item
                        key={item.title}
                        href={item.link}
                        className={`${activeLink === item.link ? "active" : ""
                          }`}
                        as={Link}
                        action
                      >
                        {item.title}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
                <Col xs={8}>
                  <div
                    data-spy="scroll"
                    data-bs-target="#list-example"
                    data-offset="0"
                    className="scrollspy-example"
                  >
                    <h4 id="list-item-1">Item 1</h4>
                    <p>
                      Ex consequat commodo adipisicing exercitation aute
                      excepteur occaecat ullamco duis aliqua id magna ullamco
                      eu. Do aute ipsum ipsum ullamco cillum consectetur ut et
                      aute consectetur labore. Fugiat laborum incididunt tempor
                      eu consequat enim dolore proident. Qui laborum do non
                      excepteur nulla magna eiusmod consectetur in. Aliqua et
                      aliqua officia quis et incididunt voluptate non anim
                      reprehenderit adipisicing dolore ut consequat deserunt
                      mollit dolore. Aliquip nulla enim veniam non fugiat id
                      cupidatat nulla elit cupidatat commodo velit ut eiusmod
                      cupidatat elit dolore.
                    </p>
                    <h4 id="list-item-2">Item 2</h4>
                    <p>
                      Quis magna Lorem anim amet ipsum do mollit sit cillum
                      voluptate ex nulla tempor. Laborum consequat non elit enim
                      exercitation cillum aliqua consequat id aliqua. Esse ex
                      consectetur mollit voluptate est in duis laboris ad sit
                      ipsum anim Lorem. Incididunt veniam velit elit elit veniam
                      Lorem aliqua quis ullamco deserunt sit enim elit aliqua
                      esse irure. Laborum nisi sit est tempor laborum mollit
                      labore officia laborum excepteur commodo non commodo dolor
                      excepteur commodo. Ipsum fugiat ex est consectetur ipsum
                      commodo tempor sunt in proident.
                    </p>
                    <h4 id="list-item-3">Item 3</h4>
                    <p>
                      Quis anim sit do amet fugiat dolor velit sit ea ea do
                      reprehenderit culpa duis. Nostrud aliqua ipsum fugiat
                      minim proident occaecat excepteur aliquip culpa aute
                      tempor reprehenderit. Deserunt tempor mollit elit ex
                      pariatur dolore velit fugiat mollit culpa irure ullamco
                      est ex ullamco excepteur.
                    </p>
                    <h4 id="list-item-4">Item 4</h4>
                    <p>
                      Quis anim sit do amet fugiat dolor velit sit ea ea do
                      reprehenderit culpa duis. Nostrud aliqua ipsum fugiat
                      minim proident occaecat excepteur aliquip culpa aute
                      tempor reprehenderit. Deserunt tempor mollit elit ex
                      pariatur dolore velit fugiat mollit culpa irure ullamco
                      est ex ullamco excepteur.
                    </p>
                  </div>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={ListGroupScrollSpyCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default ListGroupScrollSpy;
