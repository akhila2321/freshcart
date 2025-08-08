export const BasicListCode = `
 <ListGroup as="ul">
    <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
    <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
    <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item as="li">Vestibulum at eros</ListGroup.Item>
</ListGroup>
`.trim();

export const ActiveListItemCode = `
 <ListGroup as="ul">
    <ListGroup.Item as="li" active>Cras justo odio</ListGroup.Item>
    <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
    <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item as="li">Vestibulum at eros</ListGroup.Item>
</ListGroup>
`.trim();

export const DisabledListItemCode = `
<ListGroup as="ul">
    <ListGroup.Item as="li" disabled>Cras justo odio</ListGroup.Item>
    <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item as="li">Morbi leo risus</ListGroup.Item>
    <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item as="li">Vestibulum at eros</ListGroup.Item>
</ListGroup>
`.trim();

export const LinkButtonListItemCode = `
<ListGroup>
	<ListGroup.Item as={Link} href="" disabled action>
		Cras justo odio
	</ListGroup.Item>
	<ListGroup.Item as={Link} href="" action>
		Dapibus ac facilisis in
	</ListGroup.Item>
	<ListGroup.Item as={Link} href="" action>
		Morbi leo risus
	</ListGroup.Item>
	<ListGroup.Item as={Link} href="" action>
		Porta ac consectetur ac
	</ListGroup.Item>
	<ListGroup.Item as={Link} href="" action disabled>
		Vestibulum at eros
	</ListGroup.Item>
</ListGroup>
`.trim();

export const LinkButtonListItemCode2 = `
<ListGroup>
	<ListGroup.Item action type="button" as={ "button"} active>
		Cras justo odio
	</ListGroup.Item>
	<ListGroup.Item action type="button" as={ "button"}>
		Dapibus ac facilisis in
	</ListGroup.Item>
	<ListGroup.Item action type="button" as={ "button"}>
		Morbi leo risus
	</ListGroup.Item>
	<ListGroup.Item action type="button" as={ "button"}>
		Porta ac consectetur ac
	</ListGroup.Item>
	<ListGroup.Item action type="button" as={ "button"} disabled>
		Vestibulum at eros
	</ListGroup.Item>
</ListGroup>
`.trim();

export const FlushListItemCode = `
<ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
`.trim();

export const NumberedListItemCode = `
<ListGroup numbered>
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
</ListGroup>
`.trim();

export const NumberedListItemCode2 = `
<ListGroup numbered as="ol">
	<ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
		<div className="ms-2 me-auto">
			<div className="fw-bold">
				Subheading
			</div>
			Cras justo odio
		</div>
		<Badge bg="primary" pill>
			14
		</Badge>
	</ListGroup.Item>
	<ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
		<div className="ms-2 me-auto">
			<div className="fw-bold">
				Subheading
			</div>
			Cras justo odio
		</div>
		<Badge bg="primary" pill>
			14
		</Badge>
	</ListGroup.Item>
	<ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
		<div className="ms-2 me-auto">
			<div className="fw-bold">
				Subheading
			</div>
			Cras justo odio
		</div>
		<Badge bg="primary" pill>
			14
		</Badge>
	</ListGroup.Item>
</ListGroup>
`.trim();

export const HorizontalListItemCode = `
<ListGroup horizontal as="ul">
	<ListGroup.Item as="li">An item</ListGroup.Item>
	<ListGroup.Item as="li">A second item</ListGroup.Item>
	<ListGroup.Item as="li">A third item</ListGroup.Item>
</ListGroup>

<ListGroup horizontal={"sm"} as="ul">
	<ListGroup.Item as="li">An item</ListGroup.Item>
	<ListGroup.Item as="li">A second item</ListGroup.Item>
	<ListGroup.Item as="li">A third item</ListGroup.Item>
</ListGroup>

<ListGroup horizontal={"md"} as="ul">
	<ListGroup.Item as="li">An item</ListGroup.Item>
	<ListGroup.Item as="li">A second item</ListGroup.Item>
	<ListGroup.Item as="li">A third item</ListGroup.Item>
</ListGroup>

<ListGroup horizontal={"lg"} as="ul">
	<ListGroup.Item as="li">An item</ListGroup.Item>
	<ListGroup.Item as="li">A second item</ListGroup.Item>
	<ListGroup.Item as="li">A third item</ListGroup.Item>
</ListGroup>

<ListGroup horizontal={"xl"} as="ul">
	<ListGroup.Item as="li">An item</ListGroup.Item>
	<ListGroup.Item as="li">A second item</ListGroup.Item>
	<ListGroup.Item as="li">A third item</ListGroup.Item>
</ListGroup>

<ListGroup horizontal={"xxl"} as="ul">
	<ListGroup.Item as="li">An item</ListGroup.Item>
	<ListGroup.Item as="li">A second item</ListGroup.Item>
	<ListGroup.Item as="li">A third item</ListGroup.Item>
</ListGroup>
`.trim();

export const CheckBoxListItemCode = `
<ListGroup as="ul">
  <ListGroup.Item as="li" className="d-flex align-items-center gap-1">
    <Form.Check type="checkbox" className="me-1" />
    First checkbox
  </ListGroup.Item>
  <ListGroup.Item as="li" className="d-flex align-items-center gap-1">
    <Form.Check type="checkbox" className="me-1" />
    Second checkbox
  </ListGroup.Item>
  <ListGroup.Item as="li" className="d-flex align-items-center gap-1">
    <Form.Check type="checkbox" className="me-1" />
    Third checkbox
  </ListGroup.Item>
  <ListGroup.Item as="li" className="d-flex align-items-center gap-1">
    <Form.Check type="checkbox" className="me-1" />
    Fourth checkbox
  </ListGroup.Item>
  <ListGroup.Item as="li" className="d-flex align-items-center gap-1">
    <Form.Check type="checkbox" className="me-1" />
    Fifth checkbox
  </ListGroup.Item>
</ListGroup>
`.trim();

export const ContextualListItemCode = `
<ListGroup>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item variant="primary">This is a Primary list group item</ListGroup.Item>
    <ListGroup.Item variant="secondary">This is a Secondary list group item</ListGroup.Item>
    <ListGroup.Item variant="success">This is a Success list group item</ListGroup.Item>
    <ListGroup.Item variant="danger">This is a Danger list group item</ListGroup.Item>
    <ListGroup.Item variant="warning">This is a Warning list group item</ListGroup.Item>
    <ListGroup.Item variant="info">This is a Info list group item</ListGroup.Item>
    <ListGroup.Item variant="light">This is a Light list group item</ListGroup.Item>
    <ListGroup.Item variant="dark">This is a Dark list group item</ListGroup.Item>
</ListGroup>
`.trim();

export const ContextualListItemCode2 = `
 <ListGroup>
	<ListGroup.Item className="d-flex justify-content-between align-items-center">
	Cras justo odio <Badge bg="primary">14</Badge>{" "}
	</ListGroup.Item>
	<ListGroup.Item className="d-flex justify-content-between align-items-center">
	Dapibus ac facilisis in <Badge bg="danger">2</Badge>
	</ListGroup.Item>
	<ListGroup.Item className="d-flex justify-content-between align-items-center">
	Morbi leo risus <Badge bg="warning">1</Badge>
	</ListGroup.Item>
</ListGroup>
`.trim();
