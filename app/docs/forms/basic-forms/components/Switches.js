// import node module libraries
import { Row, Col, Tab, Form } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { InputSwitchCode } from "data/code/formsCode/BasicFormCode";

const Switches = () => {
    return (
        <Row>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="mb-10">
                    <h2 id="switches">Switches</h2>
                    <p>
                        A switch has the markup of a custom checkbox but uses the
                        <code>.form-switch</code>
                        class to render a toggle switch. Consider using
                        <code>role=&quot;switch&quot;</code>
                        to more accurately convey the nature of the control to assistive
                        technologies that support this role. In older assistive
                        technologies, it will simply be announced as a regular checkbox as
                        a fallback. Switches also support the
                        <code>disabled</code>
                        attribute.
                    </p>
                    <CustomTab defaultActiveKey={"design"}>
                        <Tab.Pane title="Design" eventKey={"design"}>
                            <Form.Check className=" mb-2" type="switch">
                                <Form.Check.Input id="flexSwitchCheckDefault" />
                                <Form.Check.Label htmlFor="flexSwitchCheckDefault">
                                    Default switch checkbox input
                                </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="mb-2" type="switch">
                                <Form.Check.Input
                                    id="flexSwitchCheckChecked"
                                    defaultChecked
                                />
                                <Form.Check.Label htmlFor="flexSwitchCheckChecked">
                                    Checked switch checkbox input
                                </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="mb-2" type="switch">
                                <Form.Check.Input
                                    type="switch"
                                    role="switch"
                                    id="flexSwitchCheckDisabled"
                                    disabled
                                />
                                <Form.Check.Label htmlFor="flexSwitchCheckDisabled">
                                    Disabled switch checkbox input
                                </Form.Check.Label>
                            </Form.Check>
                            <Form.Check type="switch">
                                <Form.Check.Input
                                    type="switch"
                                    role="switch"
                                    id="flexSwitchCheckCheckedDisabled"
                                    defaultChecked
                                    disabled
                                />
                                <Form.Check.Label htmlFor="flexSwitchCheckCheckedDisabled">
                                    Disabled checked switch checkbox input
                                </Form.Check.Label>
                            </Form.Check>
                        </Tab.Pane>
                        <Tab.Pane title="Code" eventKey={"code"}>
                            <HighlightCode code={InputSwitchCode} />
                        </Tab.Pane>
                    </CustomTab>
                </div>
            </Col>
        </Row>
    )
}

export default Switches