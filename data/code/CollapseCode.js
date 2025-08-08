export const SimpleCollapseCode = `
<p>
  <Button variant="primary" href="" className="mb-2 mb-md-0" onClick={(e)=>
    { e.preventDefault(); setOpen(!open); }} > Link with href
  </Button>
  {" "}
  <Button variant="primary" onClick={()=>
    setOpen(!open)}> Button with data-bs-target
  </Button>
</p>
<Collapse id="collapseExample" in={open}>
  <Card>
    <Card.Body>
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
      richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
      anderson cred nesciunt sapiente ea proident.
    </Card.Body>
  </Card>
</Collapse>
`.trim();

export const MultiTargetCollapseCode = `
<p>
  <Button variant="primary" className="mb-2 mb-md-0" href="#multiCollapseExample1"
  aria-expanded={isOpen} onClick={(e)=>
    { e.preventDefault(); setIsOpen(!isOpen); }} > Toggle first element
  </Button>
  {" "}
  <Button variant="primary" className="mb-2 mb-md-0" aria-expanded={isOpen2}
  onClick={()=>
    { setIsOpen2(!isOpen2); }} > Toggle second element
  </Button>
  {" "}
  <Button variant="primary" onClick={multiToggle}>
    Toggle both elements
  </Button>
</p>
<Row>
  <Col>
    <Collapse className="multi-collapse" in={isOpen} dimension={ "height"}>
      <div id="multiCollapseExample1">
        <Card body>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
          anderson cred nesciunt sapiente ea proident.
        </Card>
      </div>
    </Collapse>
  </Col>
  <Col>
    <Collapse className="multi-collapse" dimension={ "height"} in={isOpen2}>
      <div id="multiCollapseExample2">
        <Card body>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
          anderson cred nesciunt sapiente ea proident.
        </Card>
      </div>
    </Collapse>
  </Col>
</Row>
`.trim();

export const HorizontalCollpaseCode = `
<p>
  <Button variant="primary" onClick={()=>
    setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="collapseWidthExample"
    > Toggle width collapse
  </Button>
</p>
<div style={{ minHeight: "120px" }}>
  <Collapse in={isOpen} dimension={ "width"} id="collapseWidthExample">
    <div id="collapseWidthExample">
      <Card body style={{ width: "300px" }} className="border shadow-none">
        This is some placeholder content for a horizontal collapse. It's hidden
        by default and shown when triggered.
      </Card>
    </div>
  </Collapse>
</div>
`.trim();

export const AccordionCode = `
<Accordion id="accordionExample" defaultActiveKey={"collapseOne"}>
  {/* Accordion One */}
  <Card>
    <ContextAwareToggle title={"Collapsible Group Item #1"} eventKey={"collapseOne"} />
    <Accordion.Collapse eventKey="collapseOne">
      <div id="collapseOne">
        <Card.Body>
          Anim pariatur cliche reprehenderit, enim eiusmod high
          life accusamus terry richardson ad squid. 3 wolf moon
          officia aute, non cupidatat skateboard dolor brunch.
          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
          wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et.
          Nihil anim keffiyeh helvetica, craft beer labore wes
          anderson cred nesciunt sapiente ea proident. Ad vegan
          excepteur butcher vice lomo. Leggings occaecat craft
          beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven&apos;t heard of them accusamus labore
          sustainable VHS.
        </Card.Body>
      </div>
    </Accordion.Collapse>
  </Card>

  {/* Accordion Two */}
  <Card>
    <ContextAwareToggle title={"Collapsible Group Item #2"} eventKey={"collapseTwo"} />
    <Accordion.Collapse eventKey="collapseTwo">
      <div id="collapseTwo">
        <Card.Body>
          Anim pariatur cliche reprehenderit, enim eiusmod high
          life accusamus terry richardson ad squid. 3 wolf moon
          officia aute, non cupidatat skateboard dolor brunch.
          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
          wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et.
          Nihil anim keffiyeh helvetica, craft beer labore wes
          anderson cred nesciunt sapiente ea proident. Ad vegan
          excepteur butcher vice lomo. Leggings occaecat craft
          beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven&apos;t heard of them accusamus labore
          sustainable VHS.
        </Card.Body>
      </div>
    </Accordion.Collapse>
  </Card>
  {/* Accordion Three */}
  <Card>
    <ContextAwareToggle title={"Collapsible Group Item #3"} eventKey={"collapseThree"}/>
    <Accordion.Collapse eventKey="collapseThree">
      <div id="collapseThree">
        <Card.Body>
          Anim pariatur cliche reprehenderit, enim eiusmod high
          life accusamus terry richardson ad squid. 3 wolf moon
          officia aute, non cupidatat skateboard dolor brunch.
          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
          wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et.
          Nihil anim keffiyeh helvetica, craft beer labore wes
          anderson cred nesciunt sapiente ea proident. Ad vegan
          excepteur butcher vice lomo. Leggings occaecat craft
          beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven&apos;t heard of them accusamus labore
          sustainable VHS.
        </Card.Body>
      </div>
    </Accordion.Collapse>
  </Card>
</Accordion>
`.trim();
