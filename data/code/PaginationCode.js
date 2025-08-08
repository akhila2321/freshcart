export const DefaultPaginationCode = `
<Pagination className="mb-0">
    <Pagination.Prev>Previous</Pagination.Prev>
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Next>Next</Pagination.Next>
</Pagination>
`.trim();

export const PaginationWithIconCode = `
<Pagination>
        <Pagination.Prev><ChevronLeft size="18px" /></Pagination.Prev>
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Next><ChevronRight size="18px" /></Pagination.Next>
</Pagination>
`.trim();

export const DisabledPaginationCode = `
<Pagination className="mb-0">
    <Pagination.Prev disabled>Previous</Pagination.Prev>
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item active>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Next>Next</Pagination.Next>
</Pagination>
`.trim();

export const PaginationSizeCode = `
<Pagination size="lg">
    <Pagination.Item active>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
</Pagination>
`.trim();

export const PaginationSizeCode2 = `
<Pagination size="sm">
    <Pagination.Item active>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
</Pagination>

`.trim();

export const PaginationAlignmentCode = `       
<Pagination className="justify-content-center mb-0">
    <Pagination.Prev disabled>Previous</Pagination.Prev>
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Next>Next</Pagination.Next>
</Pagination>`.trim();

export const PaginationAlignmentCode2 = `
<Pagination className="justify-content-end mb-0 ">
    <Pagination.Prev disabled>Previous</Pagination.Prev>
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Next>Next</Pagination.Next>
</Pagination>
`.trim();
