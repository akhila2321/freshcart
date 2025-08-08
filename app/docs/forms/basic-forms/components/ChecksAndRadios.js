// import node module libraries
import { Row, Col, Tab, Form } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
    InputCheckCode,
    InputCheckFiveCode,
    InputCheckFourCode,
    InputCheckThreeCode,
    InputCheckTwoCode
} from "data/code/formsCode/BasicFormCode";

const ChecksAndRadios = () => {
    return (
        <Row>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="mb-4" id="select-menu">
                    <h2 id="checks-radios">Checks and radios</h2>
                    <p>
                        Create consistent cross-browser and cross-device checkboxes and
                        radios with our completely rewritten checks component.
                    </p>
                </div>
                <div className="mb-6">
                    <CustomTab defaultActiveKey={"design"}>
                        <h3 className="fw-semibold mb-1" id="checks">
                            Checks
                        </h3>
                        <Tab.Pane title="Design" eventKey={"design"}>
                            <Form.Check className="form-check">
                                <Form.Check.Input type="checkbox" id="flexCheckDefault" />
                                <Form.Check.Label htmlFor="flexCheckDefault">
                                    Default checkbox
                                </Form.Check.Label>
                            </Form.Check>
                            <Form.Check>
                                <Form.Check.Input
                                    type="checkbox"
                                    id="flexCheckChecked"
                                    defaultChecked
                                />
                                <Form.Check.Label htmlFor="flexCheckChecked">
                                    Checked checkbox
                                </Form.Check.Label>
                            </Form.Check>
                        </Tab.Pane>
                        <Tab.Pane title="Code" eventKey={"code"}>
                            <HighlightCode code={InputCheckCode} />
                        </Tab.Pane>
                    </CustomTab>
                </div>

                <div className="mb-6">
                    <h3 className="fw-semibold mb-1" id="indeterminate">
                        Indeterminate
                    </h3>
                    <p>
                        Checkboxes can utilize the
                        <code> :indeterminate </code>
                        pseudo class when manually set via JavaScript (there is no
                        available HTML attribute for specifying it).
                    </p>
                    <CustomTab defaultActiveKey={"design"}>
                        <Tab.Pane title="Design" eventKey={"design"}>
                            <Form.Check>
                                <Form.Check.Input
                                    type="checkbox"
                                    id="flexCheckIndeterminate"
                                />
                                <Form.Check.Label htmlFor="flexCheckIndeterminate">
                                    Indeterminate checkbox
                                </Form.Check.Label>
                            </Form.Check>
                        </Tab.Pane>
                        <Tab.Pane title="Code" eventKey={"code"}>
                            <HighlightCode code={InputCheckTwoCode} />
                        </Tab.Pane>
                    </CustomTab>
                </div>

                <div className="mb-10">
                    <h3 className="fw-semibold mb-1" id="disabled-check">
                        Disabled
                    </h3>
                    <p>
                        Add the
                        <code> disabled </code>
                        attribute and the associated
                        <code> &lt;label&gt; </code>s are automatically styled to match
                        with a lighter color to help indicate the input’s state.
                    </p>
                    <CustomTab defaultActiveKey={"design"}>
                        <Tab.Pane title="Design" eventKey={"design"}>
                            <Form.Check>
                                <Form.Check.Input
                                    type="checkbox"
                                    id="flexCheckDisabled"
                                    disabled
                                />
                                <Form.Check.Label htmlFor="flexCheckDisabled">
                                    Disabled checkbox
                                </Form.Check.Label>
                            </Form.Check>
                            <Form.Check>
                                <Form.Check.Input
                                    type="checkbox"
                                    id="flexCheckCheckedDisabled"
                                    defaultChecked
                                    disabled
                                />
                                <Form.Check.Label htmlFor="flexCheckCheckedDisabled">
                                    Disabled checked checkbox
                                </Form.Check.Label>
                            </Form.Check>
                        </Tab.Pane>
                        <Tab.Pane title="Code" eventKey={"code"}>
                            <HighlightCode code={InputCheckThreeCode} />
                        </Tab.Pane>
                    </CustomTab>
                </div>

                <div className="mb-6">
                    <h3 className="fw-semibold mb-1" id="radios">
                        Radios
                    </h3>
                    <CustomTab defaultActiveKey={"design"}>
                        <Tab.Pane title="Design" eventKey={"design"}>
                            <Form.Check>
                                <Form.Check.Input
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                />
                                <Form.Check.Label htmlFor="flexRadioDefault1">
                                    Default radio
                                </Form.Check.Label>
                            </Form.Check>
                            <Form.Check>
                                <Form.Check.Input
                                    type="radio"
                                    name="flexRadioDefault"
                                    id="flexRadioDefault2"
                                    defaultChecked
                                />
                                <Form.Check.Label htmlFor="flexRadioDefault2">
                                    Default checked radio
                                </Form.Check.Label>
                            </Form.Check>
                        </Tab.Pane>
                        <Tab.Pane title="Code" eventKey={"code"}>
                            <HighlightCode code={InputCheckFourCode} />
                        </Tab.Pane>
                    </CustomTab>
                </div>

                <div className="mb-10">
                    <h3 className="fw-semibold mb-1" id="disabled-radio">
                        Disabled
                    </h3>
                    <p>
                        Add the
                        <code> disabled </code>
                        attribute and the associated
                        <code> &lt;label&gt; </code>s are automatically styled to match
                        with a lighter color to help indicate the input’s state.
                    </p>
                    <CustomTab defaultActiveKey={"design"}>
                        <Tab.Pane title="Design" eventKey={"design"}>
                            <Form.Check>
                                <Form.Check.Input
                                    type="radio"
                                    name="flexRadioDisabled"
                                    id="flexRadioDisabled"
                                    disabled
                                />
                                <Form.Check.Label htmlFor="flexRadioDisabled">
                                    Disabled radio
                                </Form.Check.Label>
                            </Form.Check>
                            <Form.Check>
                                <Form.Check.Input
                                    type="radio"
                                    name="flexRadioDisabled"
                                    id="flexRadioCheckedDisabled"
                                    defaultChecked
                                    disabled
                                />
                                <Form.Check.Label htmlFor="flexRadioCheckedDisabled">
                                    Disabled checked radio
                                </Form.Check.Label>
                            </Form.Check>
                        </Tab.Pane>
                        <Tab.Pane title="Code" eventKey={"code"}>
                            <HighlightCode code={InputCheckFiveCode} />
                        </Tab.Pane>
                    </CustomTab>
                </div>
            </Col>
        </Row>
    )
}

export default ChecksAndRadios