export const TypographyHeadingCode = `
<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
<h4>h4. Bootstrap heading</h4>
<h5>h5. Bootstrap heading</h5>
<h6>h6. Bootstrap heading</h6>
`.trim();

export const TypographyFancyHeadingCode = `
<h3>Fancy display heading
<small className="text-muted">With faded secondary text</small>
</h3>
`.trim();

export const TypographyDisplayCode = `

<h1 className="display-1">Display 1</h1>
<h1 className="display-2">Display 2</h1>
<h1 className="display-3">Display 3</h1>
<h1 className="display-4">Display 4</h1>
<h1 className="display-5">Display 5</h1>
<h1 className="display-6">Display 6</h1>
`.trim();

export const TypographyBodyTextCode = `
<p>
In ultricies fermentum aliquet. Pellentesque dui magna, condimentum non ullamcorper at, cursus in sem. Nunc condimentum, purus ac sagittis ultricies, metus leo pharetra mi,
non vehicula felis elit et nisi. Etiam venenatis commodo libero, vel ullamcorper nibh lobortis vel. Aliquam auctor porta tortor, nec consequat nibh finibus a. Sed ultrices
risus eget iaculis luctus. Mauris vel gravida magna.
</p>
`.trim();

export const TypographyLeadCode = `
<p className="lead">This is a lead paragraph. It stands out from regular paragraphs.</p>
`.trim();

export const TypographyInlineTextCode = `
<p>You can use the mark tag to <mark>highlight</mark>text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
`.trim();

export const BlockquotesCode = `
<blockquote className="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
</blockquote>
`.trim();

export const BlockquotesNamingCode = `
<figure>
<blockquote className="blockquote">
<p>A well-known quote, contained in a blockquote element.</p>
</blockquote>
<figcaption className="blockquote-footer">
Someone famous in
<cite title="Source Title">Source Title</cite>
</figcaption>
</figure>
`.trim();

export const BlockquotesAlignmentCode = `
<figure className="text-center">
<blockquote className="blockquote">
<p>A well-known quote, contained in a blockquote element.</p>
</blockquote>
<figcaption className="blockquote-footer">
Someone famous in
<cite title="Source Title">Source Title</cite>
</figcaption>
</figure>
`.trim();

export const BlockquotesAlignmentRightCode = `
<figure className="text-end">
<blockquote className="blockquote">
<p>A well-known quote, contained in a blockquote element.</p>
</blockquote>
<figcaption className="blockquote-footer">
Someone famous in
<cite title="Source Title">Source Title</cite>
</figcaption>
</figure>
`.trim();

export const TypographyListCode = `
<ListGroup bsPrefix="list-unstyled" as="ul">
<ListGroup.Item as="li">Lorem ipsum dolor sit amet</ListGroup.Item>
<ListGroup.Item as="li">Consectetur adipiscing eListGroup.Itemt</ListGroup.Item>
<ListGroup.Item as="li">Integer molestie lorem at massa</ListGroup.Item>
<ListGroup.Item as="li">Facilisis in pretium nisl aliquet</ListGroup.Item>
<ListGroup.Item as="li">Nulla volutpat aliquam velit
    <ul>
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
        <li>Vestibulum laoreet porttitor sem</li>
        <li>Ac tristique libero volutpat at</li>
    </ul>
</ListGroup.Item>
<ListGroup.Item as="li">Faucibus porta lacus fringilla vel</ListGroup.Item>
<ListGroup.Item as="li">Aenean sit amet erat nunc</ListGroup.Item>
<ListGroup.Item as="li">Eget porttitor lorem</ListGroup.Item>
</ListGroup>
`.trim();

export const TypographyInlineListCode = `
<ListGroup bsPrefix="list-inline">
<ListGroup.Item bsPrefix="list-inline-item">
Lorem ipsum
</ListGroup.Item>
<ListGroup.Item bsPrefix="list-inline-item">
Phasellus iaculis
</ListGroup.Item>
<ListGroup.Item bsPrefix="list-inline-item">
Nulla volutpat
</ListGroup.Item>
</ListGroup>
`.trim();

export const DescriptionListCode = `
<Row as="dl">
<Col as="dt" sm={3}>Description lists</Col>
<Col as="dd" sm={9}>A description list is perfect for defining terms.</Col>
<Col as="dt" sm={3}>Euismod</Col>
<Col as="dd" sm={9}>
<p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
<p>Donec id elit non mi porta gravida at eget metus.</p>
</Col>
<Col sm={3} as="dt">Malesuada porta</Col>
<Col sm={9} as="dd">tiam porta sem malesuada magna mollis euismod.</Col>
<Col sm={3} as="dt" className="text-truncate">Truncated term is truncated</Col>
<Col sm={9} as="dd">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
</Col>
<Col sm={3} as="dt">Nesting</Col>
<Col sm={9} as="dd">
<Row as="dl">
    <Col sm={4} as="dt">Nested definition list</Col>
    <Col sm={8} as="dd">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</Col>
</Row>
</Col>
</Row>
`.trim();

export const LetterSpacingCode = `
<div>
    <h3 className="ls-xs mb-3">Heading Title of Letter space</h3>
    <h3 className="ls-sm mb-3">Heading Title of Letter space</h3>
    <h3 className="ls-base mb-3">Heading Title of Letter space</h3>
    <h3 className="ls-md mb-3">Heading Title of Letter space</h3>
    <h3 className="ls-lg mb-3">Heading Title of Letter space</h3>
    <h3 className="ls-xl mb-3">Heading Title of Letter space</h3>
    <h3 className="ls-xxl mb-3">Heading Title of Letter space</h3>
</div>
`.trim();
