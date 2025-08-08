// import node module libraries
import { Row, Col, Tab, Form, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { FormTwoCode } from "data/code/components-code/FormCode";

const DisabledAndReadonly = () => {
    return (
        <Row>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div id="disiabledState" className="mb-4">
                    <h2>Disabled & Readonly Fields</h2>
                    <p>
                        Use <code> readonly </code> or <code> disabled </code> attributes
                        for <code> .form-control </code>
                    </p>
                </div>
                <div className="mb-10">
                    <CustomTab defaultActiveKey={"design"}>
                        <Tab.Pane title="Design" eventKey={"design"}>
                            <Form>
                                <fieldset disabled>
                                    <legend>Disabled fieldset example</legend>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="disabledTextInput">
                                            Disabled input
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="disabledTextInput"
                                            placeholder="Disabled input"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="disabledSelect">
                                            Disabled select menu
                                        </Form.Label>
                                        <Form.Select id="disabledSelect">
                                            <option>Disabled select</option>
                                        </Form.Select>
                                    </div>
                                    <div className="mb-3">
                                        <Form.Check>
                                            <Form.Check.Input
                                                type="checkbox"
                                                id="disabledFieldsetCheck"
                                                disabled
                                            />
                                            <Form.Check.Label htmlFor="disabledFieldsetCheck">
                                                Can&apos;t check this
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </div>
                                    <Button type="submit" variant="primary">
                                        Submit
                                    </Button>
                                </fieldset>
                            </Form>
                        </Tab.Pane>
                        <Tab.Pane title="Code" eventKey={"code"}>
                            <HighlightCode code={FormTwoCode} />
                        </Tab.Pane>
                    </CustomTab>
                </div>
            </Col>
        </Row>
    )
}

export default DisabledAndReadonly