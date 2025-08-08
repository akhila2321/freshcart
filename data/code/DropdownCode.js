export const BasicDropdownCode = `
<Dropdown>
  <Dropdown.Toggle variant="secondary" id="dropdownMenuButton">
    Dropdown Button
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#">
      Action
    </Dropdown.Item>
    <Dropdown.Item href="#">
      Another action
    </Dropdown.Item>
    <Dropdown.Item href="#">
      Something else
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
`.trim();

export const DropdownOptionCode = `
{['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
    (variant) => (
    <DropdownButton
        as={ButtonGroup}
        key={variant}
        id={\`dropdown-variants-\${variant}\`}
        variant={variant.toLowerCase()}
        title={variant}
        className="me-1 mb-1"                                    
        >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3"> Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </DropdownButton>  
    ),
)}  
`.trim();

export const DropdownSizeCode = `
<div className="mb-3">
	{[DropdownButton, SplitButton].map((DropdownType, idx) => (
	<DropdownType as={ButtonGroup} key={idx} id={\`dropdown-button-drop-\${idx}\`}
	size="lg" variant="secondary" title={idx===0 ? "Large button" :
	"Large split button"} className="me-1 mb-2">
		<Dropdown.Item eventKey="1">
			Action
		</Dropdown.Item>
		<Dropdown.Item eventKey="2">
			Another action
		</Dropdown.Item>
		<Dropdown.Item eventKey="3">
			Something else here
		</Dropdown.Item>
		<Dropdown.Divider />
		<Dropdown.Item eventKey="4">
			Separated link
		</Dropdown.Item>
	</DropdownType>
	))} {[DropdownButton, SplitButton].map((DropdownType, idx) => (
	<DropdownType as={ButtonGroup} key={idx} id={\`dropdown-button-drop-\${idx}\`}
	size="sm" variant="secondary" title={idx===0 ? "Small button" :
	"Small split button"} className="mt-2 mt-xl-0 me-1">
		<Dropdown.Item eventKey="1">
			Action
		</Dropdown.Item>
		<Dropdown.Item eventKey="2">
			Another action
		</Dropdown.Item>
		<Dropdown.Item eventKey="3">
			Something else here
		</Dropdown.Item>
		<Dropdown.Divider />
		<Dropdown.Item eventKey="4">
			Separated link
		</Dropdown.Item>
	</DropdownType>
	))}
</div>
`.trim();

export const DropdownDirectionCode = `
<div className="mb-1">
    {directionArr.map((item) => { 
        if (item.type.includes("splitleft")) { 
            return(
	        <Dropdown as={ButtonGroup} drop={item.direction} key={item.title} className="mb-1">
		        <Dropdown.Toggle split variant="secondary"/>
		        <Dropdown.Menu>
			        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
			        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
			        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
			        <Dropdown.Divider />
			        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
		        </Dropdown.Menu>
		
                <Button variant="secondary">Split dropleft</Button>
	        </Dropdown>);
        } else if (item.type.includes("split")) { 
            return (
	        <Dropdown as={ButtonGroup} drop={item.direction} className="me-1 mb-1" key={item.title}>
		    <Button variant="secondary">{item.title}</Button>
		    <Dropdown.Toggle split variant="secondary" />
		        <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
		        </Dropdown.Menu>
	        </Dropdown>)}
            else { 
        return (
	        <DropdownButton as={ButtonGroup} drop={item.direction} variant="secondary" title={item.title} className="me-1 mb-1" key={item.title}>
		        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
	        </DropdownButton>
	); } })}
</div>
`.trim();

export const DropdownMenuAlignmentCode = `
<Dropdown as={ButtonGroup} className="me-1 mb-1">
    <Dropdown.Toggle variant="secondary">Dropdown</Dropdown.Toggle>
        <Dropdown.Menu as="ul">
            <Dropdown.Item as="li">Menu item</Dropdown.Item>
            <Dropdown.Item as="li">Menu item</Dropdown.Item>
            <Dropdown.Item as="li">Menu item</Dropdown.Item>
        </Dropdown.Menu>
</Dropdown>
<Dropdown as={ButtonGroup} className="me-1 mb-1" align={"end"}>
    <Dropdown.Toggle variant="secondary">Right-aligned menu</Dropdown.Toggle>
        <Dropdown.Menu as="ul">
            <Dropdown.Item as="li">Menu item</Dropdown.Item>
            <Dropdown.Item as="li">Menu item</Dropdown.Item>
            <Dropdown.Item as="li">Menu item</Dropdown.Item>
        </Dropdown.Menu>
</Dropdown>

<Dropdown as={ButtonGroup} className="me-1 mb-1" align={{ lg: "start" }}>
    <Dropdown.Toggle variant="secondary">Left-aligned, right-aligned lg</Dropdown.Toggle>
        <Dropdown.Menu as="ul" align={"end"}>
            <Dropdown.Item as="li">Menu item</Dropdown.Item>
            <Dropdown.Item as="li">Menu item</Dropdown.Item>
            <Dropdown.Item as="li">Menu item</Dropdown.Item>
        </Dropdown.Menu>
</Dropdown>

<Dropdown as={ButtonGroup} className="me-1 mb-1" align={{ lg: "start" }} >
     <Dropdown.Toggle variant="secondary"> Right-aligned, left-aligned lg</Dropdown.Toggle>
        <Dropdown.Menu as="ul" align={"end"}>
            <Dropdown.Item as="li">Menu item</Dropdown.Item>
            <Dropdown.Item as="li">Menu item</Dropdown.Item>
            <Dropdown.Item as="li">Menu item</Dropdown.Item>
            </Dropdown.Menu>
</Dropdown>

<Dropdown as={ButtonGroup} className="me-1 mb-1" drop="start">
    <Dropdown.Toggle variant="secondary">Dropstart</Dropdown.Toggle>
    <Dropdown.Menu as="ul">
        <Dropdown.Item as="li">Menu item</Dropdown.Item>
        <Dropdown.Item as="li">Menu item</Dropdown.Item>
        <Dropdown.Item as="li">Menu item</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>

<Dropdown as={ButtonGroup} className="me-1 mb-1" drop="end">
    <Dropdown.Toggle variant="secondary">Dropend</Dropdown.Toggle>
        <Dropdown.Menu as="ul">
            <Dropdown.Item as="li">Menu item</Dropdown.Item>
            <Dropdown.Item as="li">Menu item</Dropdown.Item>
            <Dropdown.Item as="li">Menu item</Dropdown.Item>
        </Dropdown.Menu>
</Dropdown>

<Dropdown as={ButtonGroup} className="me-1 mb-1" drop="up">
    <Dropdown.Toggle variant="secondary">Dropup</Dropdown.Toggle>
        <Dropdown.Menu as="ul">
            <Dropdown.Item as="li">Menu item</Dropdown.Item>
            <Dropdown.Item as="li">Menu item</Dropdown.Item>
            <Dropdown.Item as="li">Menu item</Dropdown.Item>
        </Dropdown.Menu>
</Dropdown>
`.trim();

export const DropdownMenuRightAlignmentCode = `
<Dropdown as={ButtonGroup} align={{ lg: "start" }}>
	<Dropdown.Toggle variant="secondary" className="text-wrap">
	Left-aligned but right aligned when large screen
	</Dropdown.Toggle>
	<Dropdown.Menu as="ul">
		<Dropdown.Item as="li">Action</Dropdown.Item>
		<Dropdown.Item as="li">Another action</Dropdown.Item>
		<Dropdown.Item as="li">Something else here</Dropdown.Item>
	</Dropdown.Menu>
</Dropdown>

<Dropdown as={ButtonGroup} className="mt-2"	align={{ lg: "start" }}>
	<Dropdown.Toggle variant="secondary" className="text-wrap">
	Right-aligned but left aligned when large screen
	</Dropdown.Toggle>
	<Dropdown.Menu as="ul">
		<Dropdown.Item as="li">Action</Dropdown.Item>
		<Dropdown.Item as="li">Another action</Dropdown.Item>
		<Dropdown.Item as="li">Something else here</Dropdown.Item>
	</Dropdown.Menu>
</Dropdown>
`.trim();

export const DropdownMenuContentCode = `
<Dropdown.Menu className="d-block position-static" show>
	<Dropdown.Header as={ "h6"}>Dropdown header</Dropdown.Header>
	<Dropdown.Item href="">Action</Dropdown.Item>
	<Dropdown.Item href="">Another action</Dropdown.Item>
</Dropdown.Menu>
`.trim();

export const DropdownMenuContentCode2 = `
<Dropdown.Menu className="d-block position-static" show>
    <Dropdown.Header as={"h6"}>Dropdown header</Dropdown.Header>
    <Dropdown.Item href="">Action</Dropdown.Item>
    <Dropdown.Item href="">Another action</Dropdown.Item>
    <Dropdown.Item href="">Something else here</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="">Separated link</Dropdown.Item>
</Dropdown.Menu>
`.trim();

export const DropdownMenuContextTextCode = `
<Dropdown.Menu  className="p-4 text-muted position-static d-block" style={{ maxWidth: "200px" }} show >
    <p>Some example text that's free-flowing within the dropdown menu.</p>
    <p className="mb-0">And this is more example text.</p>
</Dropdown.Menu>
`.trim();

export const DropdownMenuContentFormCode = `
<Dropdown.Menu className="position-static d-block" show>
	<Form className="px-4 py-3">
		<div className="mb-3">
			<Form.Label htmlFor="exampleDropdownFormEmail1">
				Email address
			</Form.Label>
			<Form.Control type="email" id="exampleDropdownFormEmail1" placeholder="email@example.com"
			/>
		</div>
		<div className="mb-3">
			<Form.Label htmlFor="exampleDropdownFormPassword1">
				Password
			</Form.Label>
			<Form.Control type="email" id="exampleDropdownFormPassword1" placeholder="Password"
			/>
		</div>
		<div className="mb-3">
			<Form.Check>
				<Form.Check.Input type="checkbox" id="dropdownCheck" />
				<Form.Check.Label htmlFor="dropdownCheck">
					Remember me
				</Form.Check.Label>
			</Form.Check>
		</div>
		<Button variant="primary" type="submit">
			Sign in
		</Button>
	</Form>
	<Dropdown.Divider />
	<Dropdown.Item href="">
		New around here? Sign up
	</Dropdown.Item>
	<Dropdown.Item href="">
		Forgot password?
	</Dropdown.Item>
</Dropdown.Menu>
`.trim();

export const DropdownMenuContentForm2Code = `
<Dropdown.Menu className="position-static d-block" show>
	<Form className="px-4 py-3">
		<div className="mb-3">
			<Form.Label htmlFor="exampleDropdownFormEmail2">
				Email address
			</Form.Label>
			<Form.Control type="email" id="exampleDropdownFormEmail2" placeholder="email@example.com"
			/>
		</div>
		<div className="mb-3">
			<Form.Label htmlFor="exampleDropdownFormPassword2">
				Password
			</Form.Label>
			<Form.Control type="email" id="exampleDropdownFormPassword2" placeholder="Password"
			/>
		</div>
		<div className="mb-3">
			<Form.Check>
				<Form.Check.Input type="checkbox" id="dropdownCheck" />
				<Form.Check.Label htmlFor="dropdownCheck">
					Remember me
				</Form.Check.Label>
			</Form.Check>
		</div>
		<Button variant="primary" type="submit">
			Sign in
		</Button>
	</Form>
</Dropdown.Menu>
`.trim();

export const DropdownOffsetCode = `
<div className="d-flex">
	<Dropdown className="me-1">
	<Dropdown.Toggle
		variant="secondary"
		id="dropdownMenuOffset"
	>
		Offset
	</Dropdown.Toggle>
	<Dropdown.Menu as="ul">
		<Dropdown.Item as="li" href="">
		Action
		</Dropdown.Item>
		<Dropdown.Item as="li" href="">
		Another action
		</Dropdown.Item>
		<Dropdown.Item as="li" href="">
		Something else here
		</Dropdown.Item>
	</Dropdown.Menu>
	</Dropdown>

	<Dropdown as={ButtonGroup} drop="down">
	<Button variant="secondary">Reference</Button>
	<Dropdown.Toggle split variant="secondary" />
	<Dropdown.Menu as="ul">
		<Dropdown.Item as="li">Action</Dropdown.Item>
		<Dropdown.Item as="li">Another action</Dropdown.Item>
		<Dropdown.Item as="li">Something else here</Dropdown.Item>
		<Dropdown.Divider />
		<Dropdown.Item as="li">Separated link</Dropdown.Item>
	</Dropdown.Menu>
	</Dropdown>
</div>
`.trim();

export const DropdownAutoCloseCode = `
<Dropdown as={ButtonGroup} className="mb-1 me-1" autoClose>
    <Dropdown.Toggle variant="secondary" id="defaultDropdown">Default dropdown</Dropdown.Toggle>
        <Dropdown.Menu as="ul">
        <Dropdown.Item as="li">Menu item</Dropdown.Item>
        <Dropdown.Item as="li">Menu item</Dropdown.Item>
        <Dropdown.Item as="li">Menu item</Dropdown.Item>
        </Dropdown.Menu>
</Dropdown>

<Dropdown as={ButtonGroup} className="mb-1" autoClose="outside">
    <Dropdown.Toggle variant="secondary" id="dropdownMenuClickableOutside">Clickable outside</Dropdown.Toggle>
        <Dropdown.Menu as="ul">
        <Dropdown.Item as="li">Menu item</Dropdown.Item>
        <Dropdown.Item as="li">Menu item</Dropdown.Item>
        <Dropdown.Item as="li">Menu item</Dropdown.Item>
        </Dropdown.Menu>
</Dropdown>

<Dropdown as={ButtonGroup} className="mb-1 me-1" autoClose="inside">
    <Dropdown.Toggle variant="secondary" id="dropdownMenuClickableInside">Clickable inside</Dropdown.Toggle>
        <Dropdown.Menu as="ul">
        <Dropdown.Item as="li">Menu item</Dropdown.Item>
        <Dropdown.Item as="li">Menu item</Dropdown.Item>
        <Dropdown.Item as="li">Menu item</Dropdown.Item>
        </Dropdown.Menu>
</Dropdown>

<Dropdown as={ButtonGroup} className="mb-1 me-1" autoClose={false} >
    <Dropdown.Toggle variant="secondary" id="dropdownMenuClickableInside">Manual close</Dropdown.Toggle>
        <Dropdown.Menu as="ul">
        <Dropdown.Item as="li">Menu item</Dropdown.Item>
        <Dropdown.Item as="li">Menu item</Dropdown.Item>
        <Dropdown.Item as="li">Menu item</Dropdown.Item>
        </Dropdown.Menu>
</Dropdown>
`.trim();

export const DropdownWithColorFilterCode = `
<div className="d-flex gap-5" id="dropdownFilter">
	<Dropdown.Menu show	className="pt-0 mx-0 shadow overflow-hidden position-static d-block" style={{ width:"280px"}}>
	<Form className="p-2 mb-2 bg-light border-bottom">
		<Form.Control type="search" autoComplete={false} placeholder="Type to filter..."/>
	</Form>
	
	<ListGroup as="ul" bsPrefix="list-unstyled"	className="mb-0">
		<Dropdown.Item	as="li"	className="d-flex align-items-center gap-2 py-2">
		<Badge	bg="success" className="d-inline-block icon-xs"	/>
		Action
		</Dropdown.Item>
		<Dropdown.Item
		as="li"
		className="d-flex align-items-center gap-2 py-2"
		>
		<Badge bg="primary" className="d-inline-block icon-xs"	/>
		Another action
		</Dropdown.Item>
		<Dropdown.Item	as="li"	className="d-flex align-items-center gap-2 py-2">
		<Badge bg="danger" className="d-inline-block icon-xs" />
		Something else here
		</Dropdown.Item>
		<Dropdown.Item
		as="li"
		className="d-flex align-items-center gap-2 py-2"
		>
		<Badge bg="info" className="d-inline-block icon-xs" />
		Something else here
		</Dropdown.Item>
	</ListGroup>
	</Dropdown.Menu>

	<Dropdown.Menu
	show
	className="border-0 pt-0 mx-0 shadow overflow-hidden position-static d-block"
	style={{ width: "280px" }}
	variant="dark"
	>
	<Form className="p-2 mb-2 bg-dark border-bottom border-dark">
		<Form.Control
		type="search"
		autoComplete={false}
		placeholder="Type to filter..."
		/>
	</Form>
	<ListGroup
		as="ul"
		bsPrefix="list-unstyled"
		className="mb-0"
	>
		<Dropdown.Item
		as="li"
		className="d-flex align-items-center gap-2 py-2"
		>
		<Badge
			bg="success"
			className="d-inline-block icon-xs"
		/>
		Action
		</Dropdown.Item>
		<Dropdown.Item
		as="li"
		className="d-flex align-items-center gap-2 py-2"
		>
		<Badge
			bg="primary"
			className="d-inline-block icon-xs"
		/>
		Another action
		</Dropdown.Item>
		<Dropdown.Item
		as="li"
		className="d-flex align-items-center gap-2 py-2"
		>
		<Badge bg="danger" className="d-inline-block icon-xs" />
		Something else here
		</Dropdown.Item>
		<Dropdown.Item
		as="li"
		className="d-flex align-items-center gap-2 py-2"
		>
		<Badge bg="info" className="d-inline-block icon-xs" />
		Something else here
		</Dropdown.Item>
	</ListGroup>
	</Dropdown.Menu>
</div>
`.trim();

export const DropdownWithIconCode = `
<div className="d-flex gap-5 " id="dropdownIcons">
<Dropdown.Menu show className="mx-0 shadow d-block position-static" style={{
width: "220px" }}>

	<Dropdown.Item as="li" className="d-flex gap-2 align-items-center"><Files size={16}  />Documents</Dropdown.Item>
	<Dropdown.Item as="li" className="d-flex gap-2 align-items-center"><ImageFill size={16}  />Photos</Dropdown.Item>
	<Dropdown.Item as="li" className="d-flex gap-2 align-items-center"><Film size={16}  />Movies</Dropdown.Item>
	<Dropdown.Item as="li" className="d-flex gap-2 align-items-center"><MusicNoteBeamed size={16}  />Music
	</Dropdown.Item><Dropdown.Item as="li" className="d-flex gap-2 align-items-center"><Joystick size={16}  />Games</Dropdown.Item>
	<Dropdown.Divider />

	<Dropdown.Item as="li" className="d-flex gap-2 align-items-center"><Trash size={16}  />Trash</Dropdown.Item>
</Dropdown.Menu>

<Dropdown.Menu show className="mx-0 border-0 shadow d-block position-static"
style={{ width: "220px" }} variant="dark">
	<Dropdown.Item as="li" className="d-flex gap-2 align-items-center"><Files size={16}  />Documents</Dropdown.Item>
	<Dropdown.Item as="li" className="d-flex gap-2 align-items-center"><ImageFill size={16}  />Photos</Dropdown.Item>
	<Dropdown.Item as="li" className="d-flex gap-2 align-items-center"><Film size={16}  />Movies</Dropdown.Item>
	<Dropdown.Item as="li" className="d-flex gap-2 align-items-center"><MusicNoteBeamed size={16}  />Music
	</Dropdown.Item>
	<Dropdown.Item as="li" className="d-flex gap-2 align-items-center"><Joystick size={16} />Games</Dropdown.Item>
	<Dropdown.Divider />
	<Dropdown.Item as="li" className="d-flex gap-2 align-items-center"><Trash size={16}  />Trash</Dropdown.Item>
</Dropdown.Menu>
</div>
`.trim();
