export const ScrollSpyNavbarCode = `
<Navbar id="navbar-example2" bg="light" expand="lg">
<Navbar.Brand href="#">
Navbar
</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse className="justify-content-end">
<Nav>
    <Nav.Item><Nav.Link href="#fat">@fat</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link href="#mdo">@mdo</Nav.Link></Nav.Item>
    <NavDropdown title="Dropdown" id="navbarDropdown">
    <NavDropdown.Item href="#one">one</NavDropdown.Item>
    <NavDropdown.Item href="#two">two</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#three">three</NavDropdown.Item>
    </NavDropdown>
</Nav>
</Navbar.Collapse>
</Navbar>
<div data-spy="scroll" data-bs-target="#navbar-example2" data-offset="0"
className="scrollspy-example">
  <h4 id="fat">
    @fat
  </h4>
  <p>
    Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim
    lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever.
    Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf
    moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui
    you probably haven't heard of them et cardigan trust fund culpa biodiesel
    wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel
    keffiyeh artisan ullamco consequat.
  </p>
  <h4 id="mdo">
    @mdo
  </h4>
  <p>
    Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard.
    Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi,
    ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney's
    quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic
    exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar
    deserunt.
  </p>
  <h4 id="one">
    one
  </h4>
  <p>
    Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea.
    Lomo bicycle rights adipisicing banh mi, velit ea sunt next level locavore
    single-origin coffee in magna veniam. High life id vinyl, echo park consequat
    quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi
    DIY minim messenger bag. Cred ex in, sustainable delectus consectetur fanny
    pack iphone.
  </p>
  <h4 id="two">
    two
  </h4>
  <p>
    In incididunt echo park, officia deserunt mcsweeney's proident master
    cleanse thundercats sapiente veniam. Excepteur VHS elit, proident shoreditch
    +1 biodiesel laborum craft beer. Single-origin coffee wayfarers irure four
    loko, cupidatat terry richardson master cleanse. Assumenda you probably
    haven't heard of them art party fanny pack, tattooed nulla cardigan tempor
    ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit
    wolf voluptate, lo-fi ea portland before they sold out four loko. Locavore
    enim nostrud mlkshk brooklyn nesciunt.
  </p>
  <h4 id="three">
    three
  </h4>
  <p>
    Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim
    lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever.
    Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf
    moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui
    you probably haven't heard of them et cardigan trust fund culpa biodiesel
    wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel
    keffiyeh artisan ullamco consequat.
  </p>
  <p>
    Keytar twee blog, culpa messenger bag marfa whatever delectus food truck.
    Sapiente synth id assumenda. Locavore sed helvetica cliche irony, thundercats
    you probably haven't heard of them consequat hoodie gluten-free lo-fi fap
    aliquip. Labore elit placeat before they sold out, terry richardson proident
    brunch nesciunt quis cosby sweater pariatur keffiyeh ut helvetica artisan.
    Cardigan craft beer seitan readymade velit. VHS chambray laboris tempor
    veniam. Anim mollit minim commodo ullamco thundercats.
  </p>
</div>
`.trim();

export const NestedNavScrollCode = `
  <Row>
  <Col xs={4}>
  <Navbar id="navbar-example3" bg="light" expand="lg" variant="light" className="flex-column">
    <Navbar.Brand href="#">Navbar</Navbar.Brand>
   
    <Navbar variant="pills" bsPrefix="nav" className="flex-column" defaultActiveKey={"#item-1"}>
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
`.trim();

export const ListGroupScrollSpyCode = `
<Row>
    <Col xs={4}>
      <ListGroup id="list-example">
        {links.map((item) => (
          <ListGroup.Item
            href={item.link}
            className={\${activeLink === item.link ? "active" : ""}\}
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
`.trim();
