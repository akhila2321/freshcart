export const TooltipsCode = `
{["top", "right", "bottom", "left"].map((placement) => (
    <OverlayTrigger
    key={placement}
    placement={placement}
    overlay={
        <Tooltip id={\`tooltip-$\{placement}\`}>
        Tooltip on <strong>{placement}</strong>.
        </Tooltip>
    }
    >
    <Button variant="secondary" className="me-1 mb-2">
        Tooltip on {placement}
    </Button>
    </OverlayTrigger>
))}
`.trim();
