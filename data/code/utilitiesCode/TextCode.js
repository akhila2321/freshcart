export const TextAligmentCode = `
<p className="text-start">Start aligned text on all viewport sizes.</p>
<p className="text-center">Center aligned text on all viewport sizes.</p>
<p className="text-end">End aligned text on all viewport sizes.</p>
<p className="text-sm-start">Start aligned text on viewports sized SM (small) or wider.</p>
<p className="text-md-start">Start aligned text on viewports sized MD (medium) or wider.</p>
<p className="text-lg-start">Start aligned text on viewports sized LG (large) or wider.</p>
<p className="text-xl-start">Start aligned text on viewports sized XL (extra-large) or wider.</p>
`.trim();

export const TextWrappingCode = `
 <Badge bg={"primary"} className="text-wrap" style={{ width: "6rem" }}>This text should wrap.</Badge>
`.trim();

export const TextWrappingTwoCode = `
<div className="text-nowrap bg-light border" style={{ width: "8rem" }>
     This text should overflow the parent.
</div>
`.trim();

export const TextBreakCode = `
<p className="text-break">
    Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a type
    specimen book.
</p>
`.trim();

export const TextTransformCode = `
<p className="text-lowercase">Lowercased text.</p>
<p className="text-uppercase">Uppercased text.</p>
<p className="text-capitalize">CapiTaliZed text.</p>
`.trim();

export const FontSizeCode = `
<p className="fs-1">.fs-1 text</p>
<p className="fs-2">.fs-2 text</p>
<p className="fs-3">.fs-3 text</p>
<p className="fs-4">.fs-4 text</p>
<p className="fs-5">.fs-5 text</p>
<p className="fs-6">.fs-6 text</p>
`.trim();

export const FontWeightCode = `
<p className="fw-bold">Bold text.</p>
<p className="fw-bolder">Bolder weight text (relative to the parent element).</p>
<p className="fw-normal">Normal weight text.</p>
<p className="fw-light">Light weight text.</p>
<p className="fw-lighter">Lighter weight text (relative to the parent element).</p>
<p className="fst-italic">Italic text.</p>
<p className="fst-normal">Text with normal font style</p>
`.trim();

export const LineHeightCode = `
<p className="lh-1">
This is a long paragraph written to show how the line-height
of an element is affected by our utilities. Classes are
applied to the element itself or sometimes the parent element.
These classes can be customized as needed with our utility
API.
</p>
<p className="lh-sm">
This is a long paragraph written to show how the line-height
of an element is affected by our utilities. Classes are
applied to the element itself or sometimes the parent element.
These classes can be customized as needed with our utility
API.
</p>
<p className="lh-base">
This is a long paragraph written to show how the line-height
of an element is affected by our utilities. Classes are
applied to the element itself or sometimes the parent element.
These classes can be customized as needed with our utility
API.
</p>
<p className="lh-lg">
This is a long paragraph written to show how the line-height
of an element is affected by our utilities. Classes are
applied to the element itself or sometimes the parent element.
These classes can be customized as needed with our utility
API.
</p>
`.trim();

export const MonospaceCode = `
<p className="font-monospace">This is in monospace</p>
`.trim();

export const ResetCode = `
<p className="text-muted">Muted text with a <Link href="#" className="text-reset">reset link</Link>.</p>
`.trim();

export const TextDecorationCode = `
<p className="text-decoration-underline">This text has a line underneath it.</p>
<p className="text-decoration-line-through">This text has a line going through it.</p>
<Link href="#" className="text-decoration-none">This link has its text decoration removed</Link>
`.trim();
