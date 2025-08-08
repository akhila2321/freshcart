// import node module libraries
import { Fragment } from "react";
import { Row, Col, Tab, Nav } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { HorizontalPillsCode, VerticalPillsCode } from "data/code/NavTabCode";

const HorizontalPills = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4 mt-4">
            <h3 className="fw-semibold mb-1">Horizontal pills</h3>
            <p>The tabs plugin also works with pills.</p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Tab.Container defaultActiveKey="pills-home-tab">
                  <Nav variant="pills" className="mb-3">
                    <Nav.Item>
                      <Nav.Link eventKey="pills-home-tab">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="pills-profile-tab">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="pills-contact-tab">Contact</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="pills-home-tab">
                      <p>
                        Consequat occaecat ullamco amet non eiusmod nostrud
                        dolore irure incididunt est duis anim sunt officia.
                        Fugiat velit proident aliquip nisi incididunt nostrud
                        exercitation proident est nisi. Irure magna elit commodo
                        anim ex veniam culpa eiusmod id nostrud sit cupidatat in
                        veniam ad. Eiusmod consequat eu adipisicing minim anim
                        aliquip cupidatat culpa excepteur quis. Occaecat sit eu
                        exercitation irure Lorem incididunt nostrud.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="pills-profile-tab">
                      <p>
                        Consequat occaecat ullamco amet non eiusmod nostrud
                        dolore irure incididunt est duis anim sunt officia.
                        Fugiat velit proident aliquip nisi incididunt nostrud
                        exercitation proident est nisi. Irure magna elit commodo
                        anim ex veniam culpa eiusmod id nostrud sit cupidatat in
                        veniam ad. Eiusmod consequat eu adipisicing minim anim
                        aliquip cupidatat culpa excepteur quis. Occaecat sit eu
                        exercitation irure Lorem incididunt nostrud.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="pills-contact-tab">
                      <p>
                        Consequat occaecat ullamco amet non eiusmod nostrud
                        dolore irure incididunt est duis anim sunt officia.
                        Fugiat velit proident aliquip nisi incididunt nostrud
                        exercitation proident est nisi. Irure magna elit commodo
                        anim ex veniam culpa eiusmod id nostrud sit cupidatat in
                        veniam ad. Eiusmod consequat eu adipisicing minim anim
                        aliquip cupidatat culpa excepteur quis. Occaecat sit eu
                        exercitation irure Lorem incididunt nostrud.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={HorizontalPillsCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4">
            <h3 className="fw-semibold mb-1">Vertical pills</h3>
            <p>And with vertical pills.</p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Tab.Container
                  id="left-tabs-example"
                  defaultActiveKey="v-pills-home"
                >
                  <Row>
                    <Col md={4} xs={12}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link
                            eventKey="v-pills-home"
                            id="v-pills-home-tab"
                          >
                            Home
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="v-pills-profile"
                            id="v-pills-profile-tab"
                          >
                            Profile
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="v-pills-messages"
                            id="v-pills-messages-tab"
                          >
                            Messages
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="v-pills-settings"
                            id="v-pills-settings-tab"
                          >
                            Settings
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col md={8} xs={12}>
                      <Tab.Content>
                        <Tab.Pane eventKey="v-pills-home">
                          <p>
                            Cillum ad ut irure tempor velit nostrud occaecat
                            ullamco aliqua anim Lorem sint. Veniam sint duis
                            incididunt do esse magna mollit excepteur laborum
                            qui. Id id reprehenderit sit est eu aliqua occaecat
                            quis et velit excepteur laborum mollit dolore
                            eiusmod. Ipsum dolor in occaecat commodo et
                            voluptate minim reprehenderit mollit pariatur.
                            Deserunt non laborum enim et cillum eu deserunt
                            excepteur ea incididunt minim occaecat.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane
                          eventKey="v-pills-profile"
                          id="v-pills-profile"
                        >
                          <p>
                            Eu dolore ea ullamco dolore Lorem id cupidatat
                            excepteur reprehenderit consectetur elit id dolor
                            proident in cupidatat officia. Voluptate excepteur
                            commodo labore nisi cillum duis aliqua do. Aliqua
                            amet qui mollit consectetur nulla mollit velit
                            aliqua veniam nisi id do Lorem deserunt amet. Culpa
                            ullamco sit adipisicing labore officia magna elit
                            nisi in aute tempor commodo eiusmod.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane
                          eventKey="v-pills-messages"
                          id="v-pills-messages"
                        >
                          <p>
                            Fugiat id quis dolor culpa eiusmod anim velit
                            excepteur proident dolor aute qui magna. Ad proident
                            laboris ullamco esse anim Lorem Lorem veniam quis
                            Lorem irure occaecat velit nostrud magna nulla.
                            Velit et et proident Lorem do ea tempor officia
                            dolor. Reprehenderit Lorem aliquip labore est magna
                            commodo est ea veniam consectetur.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane
                          eventKey="v-pills-settings"
                          id="v-pills-settings"
                        >
                          <p>
                            Fugiat id quis dolor culpa eiusmod anim velit
                            excepteur proident dolor aute qui magna. Ad proident
                            laboris ullamco esse anim Lorem Lorem veniam quis
                            Lorem irure occaecat velit nostrud magna nulla.
                            Velit et et proident Lorem do ea tempor officia
                            dolor. Reprehenderit Lorem aliquip labore est magna
                            commodo est ea veniam consectetur.
                          </p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={VerticalPillsCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default HorizontalPills;
