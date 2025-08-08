export const BGBadgeCode = `
<Badge bg="primary" as="span">
    Primary
</Badge>
<Badge bg="secondary" as="span">
    Secondary
</Badge>
<Badge bg="success" as="span">
    Success
</Badge>
<Badge bg="danger" as="span">
    Danger
</Badge>
<Badge bg="warning" text="dark" as="span">
    Warning
</Badge>
<Badge bg="info" text="dark" as="span">
    Info
</Badge>
<Badge bg="light" text="dark" as="span">
    Light
</Badge>
<Badge bg="dark" as="span">
    Dark
</Badge>
`.trim();

export const SoftBadgeCode = `
<Badge as="span" bg="light-primary" text="primary">
    Primary
</Badge>
<Badge as="span" bg="light-secondary">
    Secondary
</Badge>
<Badge as="span" bg="light-success" text="success">
    Success
</Badge>
<Badge as="span" bg="light-danger" text="danger">
    Danger
</Badge>
<Badge as="span" bg="light-warning" text="dark">
    Warning
</Badge>
<Badge as="span" bg="light-info" text="info">
    Info
</Badge>
`.trim();

export const PillBadgeCode = `
<Badge bg="primary" pill={true}>
    Primary
</Badge>
<Badge bg="secondary" pill={true}>
    Secondary
</Badge>
<Badge bg="success" pill={true}>
    Success
</Badge>
<Badge bg="danger" pill={true}>
    Danger
</Badge>
<Badge bg="warning" pill={true} text="dark">
    Warning
</Badge>
<Badge bg="info" pill={true} text="dark">
    Info
</Badge>
<Badge bg="light" pill={true} text="dark">
    Light
</Badge>
<Badge bg="dark" pill={true}>
    Dark
</Badge>
`.trim();

export const ButtonBadgeCode = `
<Button variant="primary">
    Notifications
    <Badge bg="secondary">
        4
    </Badge>
</Button>
`.trim();

export const PositionBadgeCode = `
<Button variant="primary" className="position-relative">
    Inbox
    <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
        99+
    </Badge>
</Button>
`.trim();

export const PositionBadgeCode2 = `
<Button variant="primary" className="position-relative">
    Profile
    <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle p-2 border border-light rounded-circle">
        
    </Badge>
</Button>
`.trim();

export const SimpleBadgeCode = `
<h1>
    Example heading
    <Badge bg="secondary">
        New
    </Badge>
</h1>
<h2>
    Example heading
    <Badge bg="secondary">
        New
    </Badge>
</h2>
<h3>
    Example heading
    <Badge bg="secondary">
        New
    </Badge>
</h3>
<h4>
    Example heading
    <Badge bg="secondary">
        New
    </Badge>
</h4>
<h5>
    Example heading
    <Badge bg="secondary">
        New
    </Badge>
</h5>
<h6>
    Example heading
    <Badge bg="secondary">
        New
    </Badge>
</h6>
`.trim();
