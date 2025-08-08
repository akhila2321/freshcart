export const SimplePlaceholderCode = `
<div className="d-flex">
  <Card className="w-lg-50 w-xl-50 me-lg-4">
    <Image src="/images/docs/4by3.jpg" alt="" className="card-img-top" />
    <Card.Body>
      <Card.Title as="h3">
        Card title
      </Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Button href="" variant="primary">
        Go somewhere
      </Button>
    </Card.Body>
  </Card>
  <Card className="w-lg-50 w-xl-50">
    <Image src="/images/docs/4by3.jpg" alt="" className="card-img-top" />
    <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
      <Placeholder as={Card.Text} animation="glow">
        <Placeholder xs={7} />
        <Placeholder xs={4} />
        {" "}
        <Placeholder xs={4} />
        <Placeholder xs={6} />
        {" "}
        <Placeholder xs={8} />
      </Placeholder>
      <Placeholder.Button variant="primary" xs={6} />
    </Card.Body>
  </Card>
</div>
`.trim();

export const PlaceholderWidthCode = `
<Placeholder xs={6} />
<Placeholder className="w-75" />
<Placeholder className="25%" />
`.trim();

export const PlaceholderColorCode = `
<Placeholder xs={12} bg="primary" />
<Placeholder xs={12} bg="secondary" />
<Placeholder xs={12} bg="success" />
<Placeholder xs={12} bg="danger" />
<Placeholder xs={12} bg="warning" />
<Placeholder xs={12} bg="info" />
<Placeholder xs={12} bg="light" />
<Placeholder xs={12} bg="dark" />
`.trim();

export const PlaceholderSizeCode = `
<Placeholder xs={12} size="lg" />
<Placeholder xs={12} />
<Placeholder xs={12} size="sm" />
<Placeholder xs={12} size="xs" />
`.trim();

export const PlaceholderAnimationCode = `
<Placeholder as="p" animation="glow">
<Placeholder xs={12} />
</Placeholder>
<Placeholder as="p" animation="wave" className="mb-0">
<Placeholder xs={12} />
</Placeholder>
              `.trim();
