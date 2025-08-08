export const SimpleBreadcrumbCode = `
<Breadcrumb as={"nav"}>
    <Breadcrumb.Item active>
        Home
    </Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb as={"nav"}>
    <Breadcrumb.Item href="">
        Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="" active>
        Library
    </Breadcrumb.Item>
</Breadcrumb>
<Breadcrumb as={"nav"}>
    <Breadcrumb.Item href="">
        Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
        Library
    </Breadcrumb.Item>
    <Breadcrumb.Item active>
        Data
    </Breadcrumb.Item>
</Breadcrumb>
`.trim();

export const DividerBreadcrumbCode = `
<Breadcrumb as="nav">
    <Breadcrumb.Item href="">
        Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="" active>
        Library
    </Breadcrumb.Item>
</Breadcrumb>
`.trim();
