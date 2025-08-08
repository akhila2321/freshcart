export const BasicExampleCode = `
<ButtonGroup>
  <Button variant="primary">Left</Button>
  <Button variant="primary">Middle</Button>
  <Button variant="primary">Right</Button>
</ButtonGroup>
`.trim();

export const BasicExampleCode2 = `
<ButtonGroup>
  <Button variant="primary" active href="">Active link</Button>
  <Button variant="primary" href="">Link</Button>
  <Button variant="primary" href="">Link</Button>
</ButtonGroup>
`.trim();

export const MixedButtonGroupCode = `
<ButtonGroup>
    <Button variant="danger">Left</Button>
    <Button variant="warning">Middle</Button>
    <Button variant="success">Right</Button>
</ButtonGroup>
`.trim();

export const OutlineButtonGroupCode = `
<ButtonGroup>
    <Button variant="outline-primary">Left</Button>
    <Button variant="outline-primary">Middle</Button>
    <Button variant="outline-primary">Right</Button>
</ButtonGroup>
`.trim();

export const CheckBoxButtonGroupCode = `
<ToggleButtonGroup type="checkbox" defaultValue={[1]} className="mb-2">
  <ToggleButton id="tbg-check-1" value={1} variant="outline-primary">
    Checkbox 1
  </ToggleButton>
  <ToggleButton id="tbg-check-2" value={2} variant="outline-primary">
    Checkbox 2
  </ToggleButton>
  <ToggleButton id="tbg-check-3" value={3} variant="outline-primary">
    Checkbox 3
  </ToggleButton>
</ToggleButtonGroup>
`.trim();

export const RadioButtonGroupCode = `
<ToggleButtonGroup type="radio" name="options" defaultValue={1}>
  <ToggleButton id="btnradio1" value={1} variant="outline-primary">
    Radio 1
  </ToggleButton>
  <ToggleButton id="btnradio2" value={2} variant="outline-primary">
    Radio 2
  </ToggleButton>
  <ToggleButton id="btnradio3" value={3} variant="outline-primary">
    Radio 3
  </ToggleButton>
</ToggleButtonGroup>
`.trim();

export const ToolbarButtonGroupCode = `
<ButtonToolbar aria-label="Toolbar with button groups">
  <ButtonGroup className="me-2" aria-label="First group">
    <Button variant="primary">
      1
    </Button>
    {" "}
    <Button variant="primary">
      2
    </Button>
    {" "}
    <Button variant="primary">
      3
    </Button>
    <Button variant="primary">
      4
    </Button>
  </ButtonGroup>
  <ButtonGroup className="me-2" aria-label="Second group">
    <Button variant="primary">
      5
    </Button>
    {" "}
    <Button variant="primary">
      6
    </Button>
    {" "}
    <Button variant="primary">
      7
    </Button>
  </ButtonGroup>
  <ButtonGroup aria-label="Third group">
    <Button variant="primary">
      8
    </Button>
  </ButtonGroup>
</ButtonToolbar>
`.trim();

export const ButtonGroupSizingCode = `
<ButtonGroup size="lg" className="mb-2">
  <Button variant="primary">Left</Button>
  <Button variant="primary">Middle</Button>
  <Button variant="primary">Right</Button>
</ButtonGroup>
<br />
<ButtonGroup className="mb-2">
  <Button variant="primary">Left</Button>
  <Button variant="primary">Middle</Button>
  <Button variant="primary">Right</Button>
</ButtonGroup>
<br />
<ButtonGroup size="sm" className="mb-2">
  <Button variant="primary">Left</Button>
  <Button variant="primary">Middle</Button>
  <Button variant="primary">Right</Button>
</ButtonGroup>
`.trim();

export const NestingButtonCode = `
<ButtonGroup>
  <Button variant="primary">1</Button>
  <Button variant="primary">2</Button>
  <DropdownButton as={ButtonGroup} title="Dropdown" id="btnGroupDrop1">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
</ButtonGroup>
`.trim();

export const VerticalButtonGroupCode = `
<ButtonGroup vertical>
	<Button variant="primary">Button</Button>
	<Button variant="primary">Button</Button>
	<DropdownButton as={ButtonGroup} title="Dropdown" id="btnGroupVerticalDrop1">
		<Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
		<Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
	</DropdownButton>
	<Button variant="primary">Button</Button>
	<Button variant="primary">Button</Button>
	<DropdownButton as={ButtonGroup} title="Dropdown" id="btnGroupVerticalDrop2">
		<Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
		<Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
	</DropdownButton>
    
    <DropdownButton as={ButtonGroup} title="Dropdown" id="btnGroupVerticalDrop3">
		<Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
		<Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
	</DropdownButton>
	<DropdownButton as={ButtonGroup} title="Dropdown" id="btnGroupVerticalDrop4">
		<Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
		<Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
	</DropdownButton>
</ButtonGroup>
`.trim();
