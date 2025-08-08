export const AccordionBasicCode = `
<Accordion.Item eventKey="0">
    <Accordion.Header as="h2" id="headingOne">
        Accordion Item #1
    </Accordion.Header>
    <Accordion.Body>
        <strong>
            This is the first item's accordion body.
        </strong>
        It is hidden by default, until the collapse plugin adds the appropriate
        classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default variables.
        It's also worth noting that just about any HTML can go within the
        <code>
            .accordion-body
        </code>
        , though the transition does limit overflow.
    </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
    <Accordion.Header as="h2" id="headingTwo">
        Accordion Item #2
    </Accordion.Header>
    <Accordion.Body>
        <strong>
            This is the second item's accordion body.
        </strong>
        It is hidden by default, until the collapse plugin adds the appropriate
        classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default variables.
        It's also worth noting that just about any HTML can go within the
        <code>
            .accordion-body
        </code>
        , though the transition does limit overflow.
    </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
    <Accordion.Header as="h2" id="headingThree">
        Accordion Item #3
    </Accordion.Header>
    <Accordion.Body>
        <strong>
            This is the third item's accordion body.
        </strong>
        It is hidden by default, until the collapse plugin adds the appropriate
        classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default variables.
        It's also worth noting that just about any HTML can go within the
        <code>
            .accordion-body
        </code>
        , though the transition does limit overflow.
    </Accordion.Body>
</Accordion.Item>
`.trim();

export const AccordionFlushCode = `
<Accordion flush defaultActiveKey="0" id="accordionFlushExample">
    <Accordion.Item eventKey="0">
        <Accordion.Header as="h2" id="flush-headingOne">
            Accordion Item #1
        </Accordion.Header>
        <Accordion.Body>
            Placeholder content for this accordion, which is intended to demonstrate
            the
            <code>
                .accordion-flush
            </code>
            class. This is the first item's accordion body.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
        <Accordion.Header as="h2" id="flush-headingTwo">
            Accordion Item #2
        </Accordion.Header>
        <Accordion.Body>
            Placeholder content for this accordion, which is intended to demonstrate
            the
            <code>
                .accordion-flush
            </code>
            class. This is the second item's accordion body. Let's imagine this being
            filled with some actual content.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
        <Accordion.Header as="h2" id="flush-headingThree">
            Accordion Item #3
        </Accordion.Header>
        <Accordion.Body>
            Placeholder content for this accordion, which is intended to demonstrate
            the
            <code>
                .accordion-flush
            </code>
            class. This is the third item's accordion body. Nothing more exciting
            happening here in terms of content, but just filling up the space to make
            it look, at least at first glance, a bit more representative of how this
            would look in a real-world application.
        </Accordion.Body>
    </Accordion.Item>
</Accordion>
`.trim();
