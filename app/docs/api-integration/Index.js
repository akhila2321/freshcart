"use client";

// import node module libraries
import { Row, Col, Card } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import required data files
import { APIIntegrationLinks } from "data/SidebarContentLinks";
import { HighlightCode } from "components/common/HighlightCode";

const Index = ({ data }) => {
  const mockAPICode = `// import sub components
//Here Index is client component in which we can't use async()
import Index from "./Index";

const APIIntegration = async () => {
    const getData = async () => {
        const response = await fetch('https://dummyjson.com/products/1');
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        return response.json();
    }
    const data = await getData();
    return <Index data={data} />;
};

export default APIIntegration;
`;

  const mockResultCode = `"use client";

// import node module libraries
import { Card, Container } from "react-bootstrap"

const Index = ({ data }) => {
    return (
        <Container>
            <Card className="p-5 my-3">
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </Card>
        </Container>
    )
}

export default Index`;

  return (
    <DocsInnerLayout links={APIIntegrationLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-7" id="initial">
            <h1 className="mb-0 fw-bold">API Integration</h1>
            <p className="mb-6 lead text-muted">
              An API integration is the connection between two or more applications, via their APIs, that lets those systems exchange data. API integrations power processes throughout many high-performing businesses that keep data in sync and enhance productivity.
            </p>
          </div>

        </Col>
      </Row>
      <Row className="docs-example mt-7">
        <Col md={12} xs={12}>
          <div id="api-code">
            <h4 className="mb-3">
              api-demo/page.js
            </h4>
          </div>
        </Col>
        <Col md={12} xs={12}>
          <HighlightCode className="p-5 bg-dark mt-4" code={mockAPICode} />
        </Col>
      </Row>


      <Row className="docs-example mt-7">
        <Col md={12} xs={12}>
          <div id="result-code">
            <h4 className="mb-3">
              api-demo/Index.js
            </h4>
          </div>
        </Col>
        <Col md={12} xs={12}>
          <HighlightCode className="p-5 bg-dark mt-4" code={mockResultCode} />
        </Col>
      </Row>

      <Row className="docs-example mt-7" id="colors">
        <Col md={12} xs={12}>
          <div id="result">
            <h4 className="mb-3">
              Final result @ <code>http://localhost:3000/api-demo</code> url.
            </h4>
          </div>
        </Col>
        <Col md={12} xs={12}>
          <Card className="p-5 my-3">
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </Card>
        </Col>
      </Row>
    </DocsInnerLayout>
  );
};

export default Index;
