export const DefaultPopoverCode = `
<OverlayTrigger
    trigger="click"
    placement="right"
    overlay={
    <Popover id="popover-basic">
        <Popover.Header as="h3">Popover title</Popover.Header>
        <Popover.Body>
        And here's some amazing content. It's very engaging.
        Right?
        </Popover.Body>
    </Popover>
    }
>
    <Button variant="danger">Click to toggle popover</Button>
</OverlayTrigger>
`.trim();

export const DirectionalPopoverCode = `
{["top", "right", "bottom", "left"].map((placement) => (
    <OverlayTrigger
    trigger="click"
    key={placement}
    placement={placement}
    overlay={
        <Popover id={\`popover-positioned-\${placement}\`}>
        <Popover.Body>
            Vivamus sagittis lacus vel augue laoreet rutrum
            faucibus.
        </Popover.Body>
        </Popover>
    }
    >
    <Button variant="secondary" className="me-2 mb-1">
        Popover on {placement}
    </Button>
    </OverlayTrigger>
))}
`.trim();

export const DismissNextClickCode = `
<OverlayTrigger
trigger="focus"
placement="right"
overlay={
<Popover id="popover-basic">
    <Popover.Header as="h3">
    Dismissible popover
    </Popover.Header>
    <Popover.Body>
    And here's some amazing content. It's very engaging.
    Right?
    </Popover.Body>
</Popover>
}
>
<Button variant="danger">Dismissible popover</Button>
</OverlayTrigger>
`.trim();

export const DisabledPopoverCode = `
<OverlayTrigger
    placement="right"
    overlay={
    <Popover>
        <Popover.Body>Disabled popover</Popover.Body>
    </Popover>
    }
>
    <span className="d-inline-block">
    <Button
        variant="primary"
        disabled
        style={{ pointerEvents: "none" }}
    >
        Disabled button
    </Button>
    </span>
</OverlayTrigger>
`.trim();
