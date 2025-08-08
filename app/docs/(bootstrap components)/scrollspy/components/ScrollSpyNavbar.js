// import node module libraries
import { Row, Col, Tab, Navbar, Nav, NavDropdown } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { ScrollSpyNavbarCode } from "data/code/ScrollSpyCode";

const ScrollSpyNavbar = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="example-in-navbar" className="mb-4">
          <h2>Scrollspy in navbar</h2>
          <p>
            Scroll the area below the navbar and watch the active class change.
            The dropdown items will be highlighted as well.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Navbar id="navbar-example2" bg="light" expand="lg">
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                  <Nav>
                    <Nav.Item>
                      <Nav.Link href="#fat">@fat</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#mdo">@mdo</Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Dropdown" id="navbarDropdown">
                      <NavDropdown.Item href="#one">one</NavDropdown.Item>
                      <NavDropdown.Item href="#two">two</NavDropdown.Item>

                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#three">three</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <div
                data-spy="scroll"
                data-bs-target="#navbar-example2"
                data-offset="0"
                className="scrollspy-example"
              >
                <h4 id="fat">@fat</h4>
                <p>
                  Ad leggings keytar, brunch id art party dolor labore.
                  Pitchfork yr enim lo-fi before they sold out qui. Tumblr
                  farm-to-table bicycle rights whatever. Anim keffiyeh carles
                  cardigan. Velit seitan mcsweeney&apos;s photo booth 3 wolf
                  moon irure. Cosby sweater lomo jean shorts, williamsburg
                  hoodie minim qui you probably haven&apos;t heard of them et
                  cardigan trust fund culpa biodiesel wes anderson aesthetic.
                  Nihil tattooed accusamus, cred irony biodiesel keffiyeh
                  artisan ullamco consequat.
                </p>
                <h4 id="mdo">@mdo</h4>
                <p>
                  Veniam marfa mustache skateboard, adipisicing fugiat velit
                  pitchfork beard. Freegan beard aliqua cupidatat
                  mcsweeney&apos;s vero. Cupidatat four loko nisi, ea helvetica
                  nulla carles. Tattooed cosby sweater food truck,
                  mcsweeney&apos;s quis non freegan vinyl. Lo-fi wes anderson +1
                  sartorial. Carles non aesthetic exercitation quis gentrify.
                  Brooklyn adipisicing craft beer vice keytar deserunt.
                </p>
                <h4 id="one">one</h4>
                <p>
                  Occaecat commodo aliqua delectus. Fap craft beer deserunt
                  skateboard ea. Lomo bicycle rights adipisicing banh mi, velit
                  ea sunt next level locavore single-origin coffee in magna
                  veniam. High life id vinyl, echo park consequat quis aliquip
                  banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi
                  DIY minim messenger bag. Cred ex in, sustainable delectus
                  consectetur fanny pack iphone.
                </p>
                <h4 id="two">two</h4>
                <p>
                  In incididunt echo park, officia deserunt mcsweeney&apos;s
                  proident master cleanse thundercats sapiente veniam. Excepteur
                  VHS elit, proident shoreditch +1 biodiesel laborum craft beer.
                  Single-origin coffee wayfarers irure four loko, cupidatat
                  terry richardson master cleanse. Assumenda you probably
                  haven&apos;t heard of them art party fanny pack, tattooed
                  nulla cardigan tempor ad. Proident wolf nesciunt sartorial
                  keffiyeh eu banh mi sustainable. Elit wolf voluptate, lo-fi ea
                  portland before they sold out four loko. Locavore enim nostrud
                  mlkshk brooklyn nesciunt.
                </p>
                <h4 id="three">three</h4>
                <p>
                  Ad leggings keytar, brunch id art party dolor labore.
                  Pitchfork yr enim lo-fi before they sold out qui. Tumblr
                  farm-to-table bicycle rights whatever. Anim keffiyeh carles
                  cardigan. Velit seitan mcsweeney&apos;s photo booth 3 wolf
                  moon irure. Cosby sweater lomo jean shorts, williamsburg
                  hoodie minim qui you probably haven&apos;t heard of them et
                  cardigan trust fund culpa biodiesel wes anderson aesthetic.
                  Nihil tattooed accusamus, cred irony biodiesel keffiyeh
                  artisan ullamco consequat.
                </p>
                <p>
                  Keytar twee blog, culpa messenger bag marfa whatever delectus
                  food truck. Sapiente synth id assumenda. Locavore sed
                  helvetica cliche irony, thundercats you probably haven&apos;t
                  heard of them consequat hoodie gluten-free lo-fi fap aliquip.
                  Labore elit placeat before they sold out, terry richardson
                  proident brunch nesciunt quis cosby sweater pariatur keffiyeh
                  ut helvetica artisan. Cardigan craft beer seitan readymade
                  velit. VHS chambray laboris tempor veniam. Anim mollit minim
                  commodo ullamco thundercats.
                </p>
              </div>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={ScrollSpyNavbarCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default ScrollSpyNavbar;
