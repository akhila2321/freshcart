export const ButtonCode = `
<Button variant="primary" className="mb-2">
    Primary
</Button>
<Button variant="secondary" className="mb-2">
    Secondary
</Button>
<Button variant="success" className="mb-2">
    Success
</Button>
<Button variant="danger" className="mb-2">
    Danger
</Button>
<Button variant="warning" className="mb-2">
    Warning
</Button>
<Button variant="info" className="mb-2">
    Info
</Button>
<Button variant="light" className="mb-2">
    Light
</Button>
<Button variant="dark" className="mb-2">
    Dark
</Button>
<Button variant="gray-400" className="mb-2">
    Gray 400
</Button>
<Button variant="link" className="mb-2">
    Link
</Button>
`.trim();

export const OutlineButtonCode = `
<Button variant="outline-primary" className="mb-2">
    Primary
</Button>
<Button variant="outline-secondary" className="mb-2">
    Secondary
</Button>
<Button variant="outline-success" className="mb-2">
    Success
</Button>
<Button variant="outline-danger" className="mb-2">
    Danger
</Button>
<Button variant="outline-warning" className="mb-2">
    Warning
</Button>
<Button variant="outline-info" className="mb-2">
    Info
</Button>
<Button variant="outline-light" className="mb-2">
    Light
</Button>
<Button variant="outline-dark" className="mb-2">
    Dark
</Button>
<Button variant="outline-gray-400" className="mb-2">
    Gray 400
</Button>
`.trim();

export const SoftButtonCode = `
<Button variant="soft-primary" className="mb-2">Primary</Button>
<Button variant="soft-secondary" className="mb-2">Secondary</Button>
<Button variant="soft-success" className="mb-2">Success</Button>
<Button variant="soft-danger" className="mb-2">Danger</Button>
<Button variant="soft-warning" className="mb-2">Warning</Button>
<Button variant="soft-info" className="mb-2">Info</Button>
`.trim();

export const GhostButtonCode = `
<Button variant="ghost-primary" className="mb-2">
    Primary
</Button>
<Button variant="ghost-secondary" className="mb-2">
    Secondary
</Button>
<Button variant="ghost-success" className="mb-2">
    Success
</Button>
<Button variant="ghost-danger" className="mb-2">
    Danger
</Button>
<Button variant="ghost-warning" className="mb-2">
    Warning
</Button>
<Button variant="ghost-info" className="mb-2">
    Info
</Button>
`.trim();

export const TagButtonCode = `
<Button href="" variant="primary">
    Link
</Button>
<Button variant="primary" type="submit">
    Buttom
</Button>
<Button as="input" type="button" value="Input" variant="primary" />
<Button as="input" type="submit" value="Submit" />
<Button as="input" type="reset" value="Reset" />
`.trim();

export const ButtonSizesCode = `
<Button size="lg" variant="primary">
    Large Button
</Button>
<Button variant="primary">
    Default Button
</Button>
<Button size="sm" variant="primary">
    Small Button
</Button>
<Button size="xs" variant="primary">
    Xtra Small Button
</Button>
`.trim();

export const BlockButtonCode = `
<div className="d-grid gap-2">
    <Button variant="primary">Button</Button>
    <Button variant="primary">Button</Button>
</div>
`.trim();

export const BlockButtonCode2 = `
<div className="d-grid gap-2 d-md-block">
    <Button variant="primary">Button</Button>
    <Button variant="primary">Button</Button>
</div>
`.trim();

export const BlockButtonCode3 = `
<div className="d-grid gap-2 col-6 mx-auto">
    <Button variant="primary">Button</Button>
    <Button variant="primary">Button</Button>
</div>
`.trim();

export const BlockButtonCode4 = `
 <div className="d-grid gap-2 d-md-flex justify-content-md-end">
    <Button variant="primary">Button</Button>
    <Button variant="primary">Button</Button>
</div>
`.trim();

export const IconButtonCode = `
<Button variant="primary">
    Your Text Goes Here
    <ShoppingBag size={14} className="ms-1" />
</Button>
`.trim();

export const IconButtonCode2 = `
<Button variant="primary" className="btn-icon">
    +
</Button>
{" "}
<Button variant="primary" className="btn-icon">
    <Spinner animation="border" size="sm" />
</Button>
{" "}
<Button variant="white" className="btn-icon border border-2 rounded-circle btn-dashed ms-2">
    +
</Button>
`.trim();

export const IconButtonCode3 = `
<Button variant="primary" size="lg">
    +
</Button>
{" "}
<Button variant="primary">
    +
</Button>
{" "}
<Button variant="primary" size="sm">
    +
</Button>
`.trim();

export const ActiveButtonCode = `
<Button href="" variant="primary" active>
    Primary link
</Button>
{" "}
<Button href="" variant="secondary" active>
    Link
</Button>
`.trim();

export const DisabledButtonCode = `
<Button variant="primary" disabled>
    Primary button
</Button>
{" "}
<Button variant="secondary" disabled>
    Button
</Button>
`.trim();

export const ToggleButtonCode = `
<Button variant="primary" active={buttonList.btnOne} onClick={() => handleClick("btnOne")}>
Toggle button
</Button>

<Button variant="primary" active={buttonList.btnTwo} onClick={() => handleClick("btnTwo")}>
Active toggle button
</Button>

<Button variant="primary" disabled>Disabled toggle button</Button>
`.trim();
