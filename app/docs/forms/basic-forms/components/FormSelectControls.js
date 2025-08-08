// import node module libraries
import { Fragment } from "react";
import { Row, Col, Tab, Form } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
    InputMultiSelectCode,
    InputSelectCode,
    InputSelectedCode
} from "data/code/formsCode/BasicFormCode";

const FormSelectControls = () => {
    return (
        <Fragment>
            <Row>
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className="mb-10">
                        <h2 id="select">Select</h2>
                        <p>
                            Customize the native
                            <code> &lt;select&gt; </code>s with custom CSS that changes the
                            element’s initial appearance.
                        </p>
                        <CustomTab defaultActiveKey={"design"}>
                            <Tab.Pane title="Design" eventKey={"design"}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="selectOne">
                                        Select
                                        <span className="text-secondary">(Optional)</span>
                                    </Form.Label>
                                    <Form.Select>
                                        <option defaultValue="Open this select">
                                            Open this select menu
                                        </option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane title="Code" eventKey={"code"}>
                                <HighlightCode code={InputSelectCode} />
                            </Tab.Pane>
                        </CustomTab>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className="mb-10">
                        <h3 className="fw-semibold mb-1" id="multiple">
                            Multiple Select
                        </h3>
                        <CustomTab defaultActiveKey={"design"}>
                            <Tab.Pane title="Design" eventKey={"design"}>
                                <div className="mb-3">
                                    <Form.Label>Multiple select</Form.Label>
                                    <Form.Select multiple>
                                        <option value="">Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane title="Code" eventKey={"code"}>
                                <HighlightCode code={InputMultiSelectCode} />
                            </Tab.Pane>
                        </CustomTab>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className="mb-4" id="select-size">
                        <h2>Select Menu Sizes</h2>
                        <p>
                            You may also choose from small and large custom selects to match
                            our similarly sized text inputs.
                        </p>
                    </div>
                    <div className="mb-10">
                        <CustomTab defaultActiveKey={"design"}>
                            <Tab.Pane title="Design" eventKey={"design"}>
                                <Form.Select size="lg" className="mb-3">
                                    <option value="">Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>

                                <Form.Select size="sm">
                                    <option value="">Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Tab.Pane>
                            <Tab.Pane title="Code" eventKey={"code"}>
                                <HighlightCode code={InputSelectedCode} />
                            </Tab.Pane>
                        </CustomTab>
                    </div>
                </Col>
            </Row>

        </Fragment>
    )
}

export default FormSelectControls