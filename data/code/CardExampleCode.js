export const BasicExampleCode = `
<Card style={{ width: "265px" }}>
  <Image src="/images/docs/placeholder-4by3.svg" className="card-img-top"
  alt="" />
  <Card.Body>
    <Card.Title as="h5" className="h3">
      Card title
    </Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk
      of the card's content.
    </Card.Text>
    <Button href="#" variant="primary">
      Go somewhere
    </Button>
  </Card.Body>
</Card>
`.trim();

export const CardBodyExampleCode = `
<Card>
    <Card.Body>This is some text within a card body.</Card.Body>
</Card>
`.trim();

export const CardTitleExampleCode = `
<Card style={{ maxWidth: "20rem" }}>
  <Card.Body>
    <Card.Title as="h3">
      Card title
    </Card.Title>
    <Card.Subtitle as="h6" className="mb-2 text-muted">
      Card subtitle
    </Card.Subtitle>
    <Card.Text as="p">
      Some quick example text to build on the card title and make up the bulk
      of the card's content.
    </Card.Text>
    <Card.Link href="">
      Card link
    </Card.Link>
    <Card.Link href="">
      Another link
    </Card.Link>
  </Card.Body>
</Card>
`.trim();

export const KitchenSinkCardCode = `
<Card style={{ width: "265px" }}>
  <Image src="/images/docs/placeholder-4by3.svg" alt="" className="card-img-top"
  />
  <Card.Body>
    <Card.Title as="h3">
      Card title
    </Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk
      of the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup as="ul" variant="flush">
    <ListGroup.Item as="li">
      Cras justo odio
    </ListGroup.Item>
    <ListGroup.Item as="li">
      Dapibus ac facilisis in
    </ListGroup.Item>
    <ListGroup.Item as="li">
      Vestibulum at eros
    </ListGroup.Item>
  </ListGroup>
  <Card.Body>
    <Card.Link href="">
      Card link
    </Card.Link>
    <Card.Link href="">
      Another link
    </Card.Link>
  </Card.Body>
</Card>
`.trim();

export const CardHeaderFooterCode = `
<Card>
  <Card.Header>
    Featured
  </Card.Header>
  <Card.Body>
    <Card.Title as="h3">
      Special title treatment
    </Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary" href="">
      Go somewhere
    </Button>
  </Card.Body>
</Card>
`.trim();

export const CardHeaderFooterCode2 = `
<Card className="text-center">
  <Card.Header>
    Featured
  </Card.Header>
  <Card.Body>
    <Card.Title>
      Special title treatment
    </Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">
      Go somewhere
    </Button>
  </Card.Body>
  <Card.Footer className="text-muted">
    2 days ago
  </Card.Footer>
</Card>
`.trim();

export const TextAlignmentCardCode = `
<Card style={{ width: "18rem" }} className="mb-3">
  <Card.Body>
    <Card.Title>
      Special title treatment
    </Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">
      Go somewhere
    </Button>
  </Card.Body>
</Card>

<Card style={{ width: "18rem" }} className="text-center mb-3">
  <Card.Body>
    <Card.Title>
      Special title treatment
    </Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">
      Go somewhere
    </Button>
  </Card.Body>
</Card>

<Card style={{ width: "18rem" }} className="text-end mb-3">
  <Card.Body>
    <Card.Title>
      Special title treatment
    </Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">
      Go somewhere
    </Button>
  </Card.Body>
</Card>
`.trim();

export const CardImageCode = `
<Card>
  <Image src="/images/blog/blog-img-1.jpg" alt="" className="card-img-top" />
  <Card.Body>
    <Card.Title as="h3">
      Card title
    </Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>
      <small className="text-muted">
        Last updated 3 mins ago
      </small>
    </Card.Text>
  </Card.Body>
</Card>
`.trim();

export const CardImageCode2 = `
<Card>
  <Card.Body>
    <Card.Title as="h3">
      Card title
    </Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>
      <small className="text-muted">
        Last updated 3 mins ago
      </small>
    </Card.Text>
  </Card.Body>
  <Image src="/images/blog/blog-img-1.jpg" className="card-img-bottom" />
</Card>
`.trim();

export const CardImageOverlaysCode = `
<Card className="text-white">
  <Image src="/images/blog/blog-img-1.jpg" className="rounded" alt="" />
  <div className="card-img-overlay">
    <Card.Title as="h3" className="text-white">
      Card title
    </Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>
      Last updated 3 mins ago
    </Card.Text>
  </div>
</Card>
`.trim();

export const HorizontalCardCode = `
<Card className="mb-3" style={{ maxWidth: "540px" }}>
  <Row>
    <Col md={4}>
      <Image src="/images/about/team-1.png" alt="" className="img-fluid rounded-start h-100"/>
    </Col>
    <Col md={8}>
      <Card.Body>
        <Card.Title as="h3">Card title</Card.Title>
        <Card.Text>This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
      </Card.Body>
    </Col>
  </Row>
</Card>
`.trim();

export const CardLayoutCode = `
<div className="card-group">
  <Card>
    <Image src="/images/docs/placeholder-4by3.svg" alt="" className="card-img-top"  />
    <Card.Body>
      <Card.Title as="h3">Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Image src="/images/docs/placeholder-4by3.svg" alt="" className="card-img-top" />
    <Card.Body>
      <Card.Title as="h3">Card title</Card.Title>
      <Card.Text>This card has supporting text below as a natural lead-in to additional content.</Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Image src="/images/docs/placeholder-4by3.svg" alt="" className="card-img-top" />
    <Card.Body>
      <Card.Title as="h3">Card title</Card.Title>
      <Card.Text>This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Card.Text>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </Card.Text>
    </Card.Body>
  </Card>
</div>
`.trim();

export const CardLayoutCode2 = `
<Row xs={1} md={2} className="g-4">
  <Col>
    <Card>
      <Image src="/images/docs/placeholder-4by3.svg" alt="" className="card-img-top" />
      <Card.Body>
        <Card.Title as="h3">Card title</Card.Title>
        <Card.Text>This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  <Col>
    <Card>
      <Image src="/images/docs/placeholder-4by3.svg" alt="" className="card-img-top"  />
      <Card.Body>
        <Card.Title as="h3">Card title</Card.Title>
        <Card.Text>This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  <Col>
    <Card>
      <Image src="/images/docs/placeholder-4by3.svg" alt="" className="card-img-top" />
      <Card.Body>
        <Card.Title as="h3">Card title</Card.Title>
        <Card.Text>This is a longer card with supporting text below as a natural lead-in
          to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  <Col>
    <Card>
      <Image src="/images/docs/placeholder-4by3.svg" alt="" className="card-img-top"/>
      <Card.Body>
        <Card.Title as="h3">Card title</Card.Title>
        <Card.Text>This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
</Row>
`.trim();
