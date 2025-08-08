export const InputGroupOneCode = `
<InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    <Form.Control type="text" placeholder="Username" />
</InputGroup>

<InputGroup className="mb-3">
    <Form.Control type="text" placeholder="Recipient's username" />
    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
</InputGroup>

    <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
<InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon3">https://example.com/users/</InputGroup.Text>
    <Form.Control type="text" id="basic-url" />
</InputGroup>

<InputGroup className=" mb-3">
    <InputGroup.Text className="input-group-text">$</InputGroup.Text>
    <Form.Control type="text" />
    <InputGroup.Text>.00</InputGroup.Text>
</InputGroup>

<InputGroup className="mb-3">
    <Form.Control type="text" placeholder="Username" />
    <InputGroup.Text>@</InputGroup.Text>
    <Form.Control type="text" placeholder="Server" />
</InputGroup>

<InputGroup>
    <InputGroup.Text className="input-group-text">With textarea</InputGroup.Text>
    <Form.Control as="textarea" rows={2} />
</InputGroup>
`.trim();

export const InputGroupTwoCode = `
<InputGroup size="sm" className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
    <Form.Control type="text" />
</InputGroup>

<InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
    <Form.Control type="text" />
</InputGroup>

<InputGroup size="lg">
    <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
    <Form.Control type="text" />
</InputGroup>
`.trim();

export const InputGroupThreeCode = `
<InputGroup>
    <InputGroup.Text>First and last name</InputGroup.Text>
    <Form.Control type="text" />
    <Form.Control type="text" />
</InputGroup>
`.trim();

export const InputGroupFourCode = `
<InputGroup className="mb-3">
    <InputGroup.Text>$</InputGroup.Text>
    <InputGroup.Text>0.00</InputGroup.Text>
    <Form.Control type="text" />
</InputGroup>

<InputGroup>
    <Form.Control type="text" />
    <InputGroup.Text>$</InputGroup.Text>
    <InputGroup.Text>0.00</InputGroup.Text>
</InputGroup>
`.trim();

export const InputGroupFiveCode = `
<InputGroup className="mb-3">
    <Button variant="outline-secondary" type="button" id="button-addon1">Button</Button>
    <Form.Control type="text" placeholder="" />
</InputGroup>

<InputGroup className="mb-3">
    <Form.Control type="text" placeholder="Recipient's username" />
    <Button variant="outline-secondary" type="button" id="button-addon2">Button</Button>
</InputGroup>

<InputGroup className="mb-3">
    <Button variant="outline-secondary" type="button">Button</Button>
    <Button variant="outline-secondary" type="button">Button</Button>
    <Form.Control type="text" placeholder="" />
</InputGroup>

<InputGroup>
    <Form.Control type="text" placeholder="Recipient's username"/>
    <Button variant="outline-secondary">Button</Button>
    <Button variant="outline-secondary">Button</Button>
</InputGroup>
`.trim();

export const InputGroupSixCode = `
<InputGroup className="mb-3">
<Dropdown>
    <Dropdown.Toggle variant="outline-secondary ">Dropdown</Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="">Action</Dropdown.Item>
        <Dropdown.Item href="">Another action</Dropdown.Item>
        <Dropdown.Item href="">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
<Form.Control type="text" />
</InputGroup>

<InputGroup className="mb-3">
<Form.Control type="text" />
<Dropdown>
<Dropdown.Toggle variant="outline-secondary ">Dropdown</Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="">Action</Dropdown.Item>
        <Dropdown.Item href="">Another action</Dropdown.Item>
        <Dropdown.Item href="">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
</InputGroup>

<InputGroup>
<Dropdown>
    <Dropdown.Toggle variant="outline-secondary ">Dropdown</Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item href="">Action</Dropdown.Item>
        <Dropdown.Item href="">Another action</Dropdown.Item>
        <Dropdown.Item href="">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
<Form.Control type="text" />
<Dropdown>
    <Dropdown.Toggle variant="outline-secondary ">Dropdown</Dropdown.Toggle>
    <Dropdown.Menu className="dropdown-menu-end">
        <Dropdown.Item href="">Action</Dropdown.Item>
        <Dropdown.Item href="">Another action</Dropdown.Item>
        <Dropdown.Item href="">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
</InputGroup>
`.trim();

export const InputGroupSevenCode = `
<InputGroup className="mb-3">
<Button variant="outline-secondary">Action</Button>
<Dropdown drop="down">
    <Dropdown.Toggle variant="outline-secondary" split />
    <Dropdown.Menu>
        <Dropdown.Item href="">Action</Dropdown.Item>
        <Dropdown.Item href="">Another action</Dropdown.Item>
        <Dropdown.Item href="">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
<Form.Control type="text" />
</InputGroup>

<InputGroup className="mb-3">
    <Form.Control type="text" />
    <Button variant="outline-secondary">Action</Button>
    <Dropdown drop="down">
        <Dropdown.Toggle variant="outline-secondary" split />
        <Dropdown.Menu className="dropdown-menu-end">
            <Dropdown.Item href="">Action</Dropdown.Item>
            <Dropdown.Item href="">Another action</Dropdown.Item>
            <Dropdown.Item href="">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="">Separated link</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
</InputGroup>
`.trim();

export const InputGroupEightCode = `
<InputGroup className="input-group mb-3">
    <InputGroup.Text htmlFor="inputGroupSelect01">Options</InputGroup.Text>
    <Form.Select id="inputGroupSelect01">
        <option value="">Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Select>
</InputGroup>

<InputGroup className=" mb-3">
    <Form.Select id="inputGroupSelect02">
    <option value="">Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    </Form.Select>
    <InputGroup.Text htmlFor="inputGroupSelect02">Options</InputGroup.Text>
</InputGroup>

<InputGroup className=" mb-3">
    <Button variant="outline-secondary" type="button">Button</Button>
    <Form.Select id="inputGroupSelect03">
        <option value="">Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Select>
</InputGroup>

<InputGroup>
    <Form.Select id="inputGroupSelect04">
        <option value="">Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Select>
    <Button variant="outline-secondary" type="button">Button</Button>
</InputGroup>
`.trim();

export const InputGroupNineCode = `
<InputGroup className="mb-3">
    <InputGroup.Text htmlFor="inputGroupFile01">Upload</InputGroup.Text>
    <Form.Control type="file" id="inputGroupFile01" />
</InputGroup>
<InputGroup className=" mb-3">
    <Form.Control type="file" id="inputGroupFile02" />
    <InputGroup.Text htmlFor="inputGroupFile02">Upload</InputGroup.Text>
</InputGroup>
<InputGroup className=" mb-3">
    <Button variant="outline-secondary" type="button" id="inputGroupFileAddon03">Button</Button>
    <Form.Control type="file" id="inputGroupFile03" />
</InputGroup>
<InputGroup>
    <Form.Control type="file" id="inputGroupFile04" />
    <Button variant="outline-secondary" type="button" id="inputGroupFileAddon04">Button</Button>
</InputGroup>
`.trim();
