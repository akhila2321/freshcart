// import node module libraries
import Link from "next/link";
import { Row, Col, Tab, Navbar, Nav } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { NestedNavScrollCode } from "data/code/ScrollSpyCode";

const NestedNavScrollSpy = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="example-with-nested-nav" className="mb-4">
          <h2>Example with nested nav</h2>
          <p>
            Scrollspy also works with nested
            <code className="highlighter-rouge"> .nav </code>
            s. If a nested
            <code className="highlighter-rouge"> .nav </code>
            is
            <code className="highlighter-rouge"> .active </code>, its parents
            will also be
            <code className="highlighter-rouge"> .active </code>. Scroll the
            area next to the navbar and watch the active class change.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              id="pills-example-with-nested-nav-design"
            >
              <Row>
                <Col xs={4}>
                  <Navbar
                    id="navbar-example3"
                    bg="light"
                    expand="lg"
                    variant="light"
                    className="flex-column"
                  >
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                    <Navbar
                      variant="pills"
                      bsPrefix="nav"
                      className="flex-column"
                    >
                      <Nav.Link
                        href="#item-1"
                        eventKey={"#item-1"}
                        active
                        as={Link}
                      >
                        Item 1
                      </Nav.Link>
                      <Nav
                        className="flex-column"
                        variant="pills"
                        defaultActiveKey={"#item-1-1"}
                      >
                        <Nav.Link
                          className="ms-3 my-1"
                          href="#item-1-1"
                          eventKey={"#item-1-1"}
                        >
                          Item 1-1
                        </Nav.Link>
                        <Nav.Link className="ms-3 my-1" href="#item-1-2">
                          Item 1-2
                        </Nav.Link>
                      </Nav>
                      <Nav.Link href="#item-2">Item 2</Nav.Link>
                      <Nav.Link href="#item-3">Item 3</Nav.Link>
                      <Nav className="flex-column">
                        <Nav.Link className="ms-3 my-1" href="#item-3-1">
                          Item 3-1
                        </Nav.Link>
                        <Nav.Link className="ms-3 my-1" href="#item-3-2">
                          Item 3-2
                        </Nav.Link>
                      </Nav>
                    </Navbar>
                  </Navbar>
                </Col>
                <Col xs={8}>
                  <div
                    data-spy="scroll"
                    data-bs-target="#navbar-example3"
                    data-offset="0"
                    className="scrollspy-example-2"
                  >
                    <h4 id="item-1">Item 1</h4>
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
                    <h5 id="item-1-1">Item 1-1</h5>
                    <p>
                      Amet tempor mollit aliquip pariatur excepteur commodo do
                      ea cillum commodo Lorem et occaecat elit qui et. Aliquip
                      labore ex ex esse voluptate occaecat Lorem ullamco
                      deserunt. Aliqua cillum excepteur irure consequat id quis
                      ea. Sit proident ullamco aute magna pariatur nostrud
                      labore. Reprehenderit aliqua commodo eiusmod aliquip est
                      do duis amet proident magna consectetur consequat eu
                      commodo fugiat non quis. Enim aliquip exercitation ullamco
                      adipisicing voluptate excepteur minim exercitation minim
                      minim commodo adipisicing exercitation officia nisi
                      adipisicing. Anim id duis qui consequat labore adipisicing
                      sint dolor elit cillum anim et fugiat.
                    </p>
                    <h5 id="item-1-2">Item 1-2</h5>
                    <p>
                      Cillum nisi deserunt magna eiusmod qui eiusmod velit
                      voluptate pariatur laborum sunt enim. Irure laboris mollit
                      consequat incididunt sint et culpa culpa incididunt
                      adipisicing magna magna occaecat. Nulla ipsum cillum
                      eiusmod sint elit excepteur ea labore enim consectetur in
                      labore anim. Proident ullamco ipsum esse elit ut Lorem
                      eiusmod dolor et eiusmod. Anim occaecat nulla in non
                      consequat eiusmod velit incididunt.
                    </p>
                    <h4 id="item-2">Item 2</h4>
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
                    <h4 id="item-3">Item 3</h4>
                    <p>
                      Quis anim sit do amet fugiat dolor velit sit ea ea do
                      reprehenderit culpa duis. Nostrud aliqua ipsum fugiat
                      minim proident occaecat excepteur aliquip culpa aute
                      tempor reprehenderit. Deserunt tempor mollit elit ex
                      pariatur dolore velit fugiat mollit culpa irure ullamco
                      est ex ullamco excepteur.
                    </p>
                    <h5 id="item-3-1">Item 3-1</h5>
                    <p>
                      Deserunt quis elit Lorem eiusmod amet enim enim amet minim
                      Lorem proident nostrud. Ea id dolore anim exercitation
                      aute fugiat labore voluptate cillum do laboris labore. Ex
                      velit exercitation nisi enim labore reprehenderit labore
                      nostrud ut ut. Esse officia sunt duis aliquip ullamco
                      tempor eiusmod deserunt irure nostrud irure. Ullamco
                      proident veniam laboris ea consectetur magna sunt ex
                      exercitation aliquip minim enim culpa occaecat
                      exercitation. Est tempor excepteur aliquip laborum
                      consequat do deserunt laborum esse eiusmod irure proident
                      ipsum esse qui.
                    </p>
                    <h5 id="item-3-2">Item 3-2</h5>
                    <p>
                      Labore sit culpa commodo elit adipisicing sit aliquip elit
                      proident voluptate minim mollit nostrud aute reprehenderit
                      do. Mollit excepteur eu Lorem ipsum anim commodo sint
                      labore Lorem in exercitation velit incididunt. Occaecat
                      consectetur nisi in occaecat proident minim enim sunt
                      reprehenderit exercitation cupidatat et do officia.
                      Aliquip consequat ad labore labore mollit ut amet. Sit
                      pariatur tempor proident in veniam culpa aliqua excepteur
                      elit magna fugiat eiusmod amet officia.
                    </p>
                  </div>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={NestedNavScrollCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default NestedNavScrollSpy;
