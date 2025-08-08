export const InputOneCode = `
<div className="mb-3">
    <Form.Label htmlFor="textInput">Input</Form.Label>
    <Form.Control type="text" id="textInput" placeholder="Input Text" />
</div>
`.trim();

export const InputTwoCode = `
<div className="mb-3">
    <Form.Label htmlFor="email">Email</Form.Label>
    <Form.Control type="email" id="email" placeholder="email@example.com" />
</div>
`.trim();

export const InputThreeCode = `
<div className="mb-3">
    <Form.Label htmlFor="password">Password</Form.Label>
    <Form.Control type="password" id="password" placeholder="email@example.com" defaultValue="passwordexample" />
</div>
`.trim();

export const TextAreaCode = `
<div className="mb-3">
    <Form.Label htmlFor="textarea-input">Textarea</Form.Label>
    <Form.Control as="textarea" rows={5} id="textarea-input" defaultValue={"Hello World!"} />
</div>
`.trim();

export const InputSearchCode = `
<div className="mb-3">
    <Form.Label htmlFor="search-input">Search</Form.Label>
    <Form.Control type="search" id="search-input" defaultValue="Search components" />
</div>
`.trim();

export const InputURLCode = `
<div className="mb-3">
    <Form.Label htmlFor="url-input">URL</Form.Label>
    <Form.Control type="url" id="url-input" defaultValue="https://getbootstrap.com" />
</div>
`.trim();

export const InputPhoneCode = `
<div className="mb-3">
    <Form.Label htmlFor="telinput">Phone</Form.Label>
    <Form.Control type="tel" id="telinput" defaultValue="+91 12 3456 7890" />
</div>
`.trim();

export const InputSizeCode = `
<div className="mb-3">
    <Form.Control type="text" placeholder="Large input" size="lg" />
</div>

<div className="mb-3">
    <Form.Control type="text" placeholder="Normal input" />
</div>

<div className="mb-3">
    <Form.Control type="text" placeholder="Small input" size="sm" />
</div>
`.trim();

export const InputSelectCode = `
<div className="mb-3">
    <Form.Label htmlFor="selectOne">Select<span className="text-secondary">(Optional)</span></Form.Label>
    <Form.Select>
        <option defaultValue="Open this select">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Select>
</div>
`.trim();

export const InputMultiSelectCode = `
<div className="mb-3">
    <Form.Label>Multiple select</Form.Label>
    <Form.Select multiple>
        <option value="">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </Form.Select>
</div>
`.trim();

export const InputSelectedCode = `
<Form.Select size="lg" className="mb-3">
    <option value="">Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Form.Select>

<Form.Select size="sm">
    <option value="">Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</Form.Select>
`.trim();

export const InputCheckCode = `
<Form.Check className="form-check">
    <Form.Check.Input type="checkbox" value="" id="flexCheckDefault" />
    <Form.Check.Label htmlFor="flexCheckDefault">Default checkbox</Form.Check.Label>
</Form.Check>

<Form.Check>
    <Form.Check.Input type="checkbox" value="" id="flexCheckChecked" defaultChecked />
    <Form.Check.Label htmlFor="flexCheckChecked">Checked checkbox</Form.Check.Label>
</Form.Check>
`.trim();

export const InputCheckTwoCode = `
<Form.Check>
    <Form.Check.Input type="checkbox" id="flexCheckIndeterminate" />
    <Form.Check.Label htmlFor="flexCheckIndeterminate">Indeterminate checkbox</Form.Check.Label>
</Form.Check>
`.trim();

export const InputCheckThreeCode = `
<Form.Check>
    <Form.Check.Input type="checkbox" id="flexCheckDisabled" disabled />
    <Form.Check.Label htmlFor="flexCheckDisabled">Disabled checkbox</Form.Check.Label>
</Form.Check>

<Form.Check>
    <Form.Check.Input type="checkbox" value="" id="flexCheckCheckedDisabled" defaultChecked disabled />
    <Form.Check.Label htmlFor="flexCheckCheckedDisabled">Disabled checked checkbox</Form.Check.Label>
</Form.Check>
`.trim();

export const InputCheckFourCode = `
<Form.Check>
    <Form.Check.Input type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
    <Form.Check.Label htmlFor="flexRadioDefault1">Default radio</Form.Check.Label>
</Form.Check>

<Form.Check>
    <Form.Check.Input type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
    <Form.Check.Label htmlFor="flexRadioDefault2">Default checked radio</Form.Check.Label>
</Form.Check>
`.trim();

export const InputCheckFiveCode = `
<Form.Check>
    <Form.Check.Input type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
    <Form.Check.Label htmlFor="flexRadioDisabled">Disabled radio</Form.Check.Label>
</Form.Check>

<Form.Check>
    <Form.Check.Input type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" defaultChecked disabled />
    <Form.Check.Label htmlFor="flexRadioCheckedDisabled">Disabled checked radio</Form.Check.Label>
</Form.Check>
`.trim();

export const InputSwitchCode = `
<Form.Check className=" mb-2" type="switch">
    <Form.Check.Input id="flexSwitchCheckDefault" />
    <Form.Check.Label htmlFor="flexSwitchCheckDefault">
    Default switch checkbox input
    </Form.Check.Label>
</Form.Check>

<Form.Check className="mb-2" type="switch">
    <Form.Check.Input
    id="flexSwitchCheckChecked"
    defaultChecked
    />
    <Form.Check.Label htmlFor="flexSwitchCheckChecked">
    Checked switch checkbox input
    </Form.Check.Label>
</Form.Check>

<Form.Check className="mb-2" type="switch">
    <Form.Check.Input
    type="switch"
    role="switch"
    id="flexSwitchCheckDisabled"
    disabled
    />
    <Form.Check.Label htmlFor="flexSwitchCheckDisabled">
    Disabled switch checkbox input
    </Form.Check.Label>
</Form.Check>

<Form.Check type="switch">
    <Form.Check.Input
    type="switch"
    role="switch"
    id="flexSwitchCheckCheckedDisabled"
    defaultChecked
    disabled
    />
    <Form.Check.Label htmlFor="flexSwitchCheckCheckedDisabled">
    Disabled checked switch checkbox input
    </Form.Check.Label>
</Form.Check>
`.trim();

export const FormWithValidationCode = `
    <Row className="g-3" as={Form}  validated={validated} onSubmit={handleSubmit}>

        <Col md={4}>
            <Form.Label htmlFor="validationCustom01">First Name</Form.Label>
            <Form.Control type="text" id="validationCustom01" defaultValue="Mark" required />
            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        </Col>

        <Col md={4}>
            <Form.Label htmlFor="validationCustom02">Last name</Form.Label>
            <Form.Control type="text" id="validationCustom02" defaultValue="Otto" required />
            <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        </Col>

        <Col md={4}>
            <Form.Label htmlFor="validationCustomUsername">Username</Form.Label>
            <InputGroup className="mb-3" hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control type="text" required />
                <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
            </InputGroup>
        </Col>
    
        <Col md={6}>
            <Form.Label>City</Form.Label>
            <Form.Control type="text" id="validationCustom03" required />
            <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
        </Col>
    
        <Col md={3}>
            <Form.Label htmlFor="validationCustom04">State</Form.Label>
            <Form.Select id="validationCustom04" required isValid={false}>
            <option selected disabled value="">Choose...</option>
            <option>...</option>
            </Form.Select>
    
            <Form.Control.Feedback type="invalid">Please select a valid state.</Form.Control.Feedback>
        </Col>

        <Col md={3}>
            <Form.Label htmlFor="validationCustom05">Zip</Form.Label>
            <Form.Control type="text" id="validationCustom05" required />
            <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
        </Col>

        <Col xs={12}>
            <Form.Check>
            <Form.Check.Input type="checkbox" id="invalidCheck"  required />
            <Form.Check.Label htmlFor="invalidCheck">Agree to terms and conditions</Form.Check.Label>
            <Form.Control.Feedback type="invalid">You must agree before submitting.</Form.Control.Feedback>
            </Form.Check>
        </Col>

        <Col xs={12}>
            <Button variant="primary" type="submit">Submit form</Button>
        </Col>
    </Row>
`.trim();

export const FormTwoCode = `
    <Form>
    <fieldset disabled>
    <legend>Disabled fieldset example</legend>

    <div className="mb-3">
        <Form.Label htmlFor="disabledTextInput"> Disabled input </Form.Label>
        <Form.Control type="text" id="disabledTextInput" placeholder="Disabled input" />
    </div>

    <div className="mb-3">
    <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
    <Form.Select id="disabledSelect">
        <option>Disabled select</option>
    </Form.Select>
    </div>

    <div className="mb-3">
    <Form.Check>
        <Form.Check.Input type="checkbox" id="disabledFieldsetCheck" disabled />
        <Form.Check.Label htmlFor="disabledFieldsetCheck">Can't check this</Form.Check.Label>
    </Form.Check>
    </div>

    <Button type="submit" variant="primary">Submit</Button>
    </fieldset>

    </Form>
`.trim();

export const InputRangeCode = `
<Form.Label htmlFor="customRange1">Example range</Form.Label>
<Form.Range type="range" id="customRange1" />
`.trim();

export const InputRangeTwoCode = `
<Form.Label htmlFor="disabledRange">Disabled range</Form.Label>
<Form.Range type="range" id="disabledRange" disabled />
`.trim();

export const InputRangeThreeCode = `
<Form.Label htmlFor="customRange2">Example range</Form.Label>
<Form.Range type="range" min={0} max={5} id="customRange2" />
`.trim();

export const InputRangeFourCode = `
<Form.Label htmlFor="customRange3">Example range</Form.Label>
<Form.Range type="range" min={0} max={5} step={0.5} id="customRange3" />
`.trim();
