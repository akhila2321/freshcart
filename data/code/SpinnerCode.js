export const BorderSpinnerCode = `
<Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
</Spinner>
`.trim();

export const SpinnerColorCode = `
<Spinner animation="border" variant="primary" className="me-2" />
<Spinner animation="border" variant="secondary" className="me-2" />
<Spinner animation="border" variant="success" className="me-2" />
<Spinner animation="border" variant="danger" className="me-2" />
<Spinner animation="border" variant="warning" className="me-2" />
<Spinner animation="border" variant="info" className="me-2" />
<Spinner animation="border" variant="light" className="me-2" />
<Spinner animation="border" variant="dark" />
`.trim();

export const GrowingSpinnerCode = `
<Spinner animation="grow" />
`.trim();

export const GrowingSpinnerCode2 = `
<Spinner animation="grow" variant="primary" className="me-2" />
<Spinner animation="grow" variant="secondary" className="me-2" />
<Spinner animation="grow" variant="success" className="me-2" />
<Spinner animation="grow" variant="danger" className="me-2" />
<Spinner animation="grow" variant="warning" className="me-2" />
<Spinner animation="grow" variant="info" className="me-2" />
<Spinner animation="grow" variant="light" className="me-2" />
<Spinner animation="grow" variant="dark" />
`.trim();

export const SpinnerAlignmentCode = `
<Spinner animation="border" role="status" className="m-5">
    <span className="visually-hidden">Loading...</span>
</Spinner>
`.trim();

export const FlexCenterSpinnerCode = `
<Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
</Spinner>
`.trim();

export const FlexEndSpinnerCode = `
<Spinner animation="border" role="status" className="ms-auto">
    <span className="visually-hidden">Loading...</span>
</Spinner>

`.trim();

export const FloatSpinnerCode = `
<Spinner animation="border" role="status" className="float-right" >
        <span className="visually-hidden">Loading...</span>
</Spinner>
`.trim();

export const SpinnerTextAlignCode = `
<div className="text-center">
    <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
    </Spinner>
</div>
`.trim();

export const SpinnerSmallSizeCode = `
<Spinner animation="border" size="sm" className="me-2" />
<Spinner animation="grow" size="sm" />
`.trim();

export const SpinnerCustomSize = `
<Spinner
    animation="border"
    style={{ width: "3rem", height: "3rem" }}
    className="me-2"
/>
<Spinner
    animation="grow"
    style={{ width: "3rem", height: "3rem" }}
/>
`.trim();

export const SpinnerButtonCode = `
<Button variant="primary" disabled className="me-2">
<Spinner
as="span"
animation="border"
size="sm"
role="status"
aria-hidden="true"
/>
<span className="visually-hidden">Loading...</span>
</Button>

<Button variant="primary" disabled>
<Spinner
as="span"
animation="border"
size="sm"
role="status"
aria-hidden="true"
/>
Loading...
</Button>
`.trim();

export const SpinnerButtonCode2 = `
<Button variant="primary" disabled className="me-2">
<Spinner
as="span"
animation="grow"
size="sm"
role="status"
aria-hidden="true"
/>
<span className="visually-hidden">Loading...</span>
</Button>

<Button variant="primary" disabled>
<Spinner
as="span"
animation="grow"
size="sm"
role="status"
aria-hidden="true"
/>
Loading...
</Button>
`.trim();
