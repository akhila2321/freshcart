export const AlertCode = `
<Alert variant="primary">
    This is a primary alert—check it out!
</Alert>
<Alert variant="secondary">
    This is a secondary alert—check it out!
</Alert>
<Alert variant="success">
    This is a success alert—check it out!
</Alert>
<Alert variant="danger">
    This is a danger alert—check it out!
</Alert>
<Alert variant="warning">
    This is a warning alert—check it out!
</Alert>
<Alert variant="info">
    This is a info alert—check it out!
</Alert>
<Alert variant="light">
    This is a light alert—check it out!
</Alert>
<Alert variant="dark">
    This is a light alert—check it out!
</Alert>
`.trim();

export const AlertLiveCode = `
<Alert variant="primary" dismissible id="liveAlert" show={isOpen} onClose={()=>
    setIsOpen(false)} >
    <strong>
        Nice!
    </strong>
    You've triggered this alert.
</Alert>
<Button variant="primary" id="liveAlertBtn" onClick={()=>
    setIsOpen(true)} > Show live alert
</Button>
`.trim();

export const LinkColorCode = `
<Alert variant="primary">
    A simple primary alert with
    <Alert.Link href="" >
        {" "} an example link
    </Alert.Link>
    . Give it a click if you like.
</Alert>
<Alert variant="secondary">
    A simple secondary alert with
    <Alert.Link href="" >
        {" "} an example link
    </Alert.Link>
    . Give it a click if you like.
</Alert>
<Alert variant="success">
    A simple success alert with
    <Alert.Link href="" >
        {" "} an example link
    </Alert.Link>
    . Give it a click if you like.
</Alert>
<Alert variant="danger">
    A simple danger alert with
    <Alert.Link href="" >
        {" "} an example link
    </Alert.Link>
    . Give it a click if you like.
</Alert>
<Alert variant="warning">
    A simple warning alert with
    <Alert.Link href="" >
        {" "} an example link
    </Alert.Link>
    . Give it a click if you like.
</Alert>
<Alert variant="info">
    A simple info alert with
    <Alert.Link href="" >
        {" "} an example link
    </Alert.Link>
    . Give it a click if you like.
</Alert>
<Alert variant="light">
    A simple light alert with
    <Alert.Link href="" >
        {" "} an example link
    </Alert.Link>
    . Give it a click if you like.
</Alert>
<Alert variant="dark">
    A simple dark alert with
    <Alert.Link href="" >
        {" "} an example link
    </Alert.Link>
    . Give it a click if you like.
</Alert>
`.trim();

export const AdditionAlertCode = `
<Alert variant="success">
    <Alert.Heading as={ "h4"}>
        Well done!
    </Alert.Heading>
    <p>
        Aww yeah, you successfully read this important alert message. This example
        text is going to run a bit longer so that you can see how spacing within
        an alert works with this kind of content.
    </p>
    <hr />
    <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things nice
        and tidy.
    </p>
</Alert>
`.trim();

export const IconAlertCode = `
{/*Primary Alert  */}
<Alert variant="primary" className="d-flex align-items-center">
    <ExclamationCircleFill size={24} className="me-2"  />
    <div>An example alert with an icon</div>
</Alert>

{/* Success Alert */}
<Alert variant="success" className="d-flex align-items-center">
    <CheckCircleFill size={24} className="me-2"  />
    <div>An example success alert with an icon</div>
</Alert>

{/* Warning Alert */}
<Alert variant="warning" className="d-flex align-items-center">
    <ExclamationTriangleFill size={24} className="me-2" />
    <div>An example warning alert with an icon</div>
</Alert>

{/* Danger Alert */}
<Alert variant="danger" className="d-flex align-items-center">
    <ExclamationTriangleFill size={24} className="me-2" />
    <div>An example danger alert with an icon</div>
</Alert>
`.trim();

export const DismissingAlertCode = `
<Alert variant="warning" dismissible show={isOpen} onClose={()=>
    setIsOpen(false)} >
    <strong>
        Holy guacamole!
    </strong>
    You should check in on some of those fields below.
</Alert>
`.trim();
