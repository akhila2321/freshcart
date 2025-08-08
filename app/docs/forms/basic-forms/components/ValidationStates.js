// import node module libraries
import { useState } from "react";
import { Row, Col, Tab, Form, InputGroup, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { FormWithValidationCode } from "data/code/formsCode/BasicFormCode";

const ValidationStates = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <Row>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div id="validation" className="mb-4">
                    <h2>Validation states</h2>
                    <p>
                        It provides valuable, actionable feedback to your users with HTML5
                        form validation.
                    </p>
                </div>
                <div className="mb-10">
                    <CustomTab defaultActiveKey={"design"}>
                        <Tab.Pane title="Design" eventKey={"design"}>
                            <Row
                                className="g-3"
                                as={Form}
                                noValidate
                                validated={validated}
                                onSubmit={handleSubmit}
                            >
                                <Col md={4}>
                                    <Form.Label htmlFor="validationCustom01">
                                        First Name
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="validationCustom01"
                                        defaultValue="Mark"
                                        required
                                    />

                                    <Form.Control.Feedback type="valid">
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Col>
                                <Col md={4}>
                                    <Form.Label htmlFor="validationCustom02">
                                        Last name
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="validationCustom02"
                                        defaultValue="Otto"
                                        required
                                    />
                                    <Form.Control.Feedback type="valid">
                                        Looks good!
                                    </Form.Control.Feedback>
                                </Col>

                                <Col md={4}>
                                    <Form.Label htmlFor="validationCustomUsername">
                                        Username
                                    </Form.Label>
                                    <InputGroup className="mb-3" hasValidation>
                                        <InputGroup.Text id="inputGroupPrepend">
                                            @
                                        </InputGroup.Text>
                                        <Form.Control type="text" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a username.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Col>
                                <Col md={6}>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="validationCustom03"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid city.
                                    </Form.Control.Feedback>
                                </Col>
                                <Col md={3}>
                                    <Form.Label htmlFor="validationCustom04">State</Form.Label>
                                    <Form.Select
                                        id="validationCustom04"
                                        required
                                        isValid={false}
                                    >
                                        <option defaultValue={""} disabled>
                                            Choose...
                                        </option>
                                        <option>...</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Please select a valid state.
                                    </Form.Control.Feedback>
                                </Col>

                                <Col md={3}>
                                    <Form.Label htmlFor="validationCustom05">Zip</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="validationCustom05"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid zip.
                                    </Form.Control.Feedback>
                                </Col>

                                <Col xs={12}>
                                    <Form.Check>
                                        <Form.Check.Input
                                            type="checkbox"
                                            id="invalidCheck"
                                            required
                                        />
                                        <Form.Check.Label htmlFor="invalidCheck">
                                            Agree to terms and conditions
                                        </Form.Check.Label>
                                        <Form.Control.Feedback type="invalid">
                                            You must agree before submitting.
                                        </Form.Control.Feedback>
                                    </Form.Check>
                                </Col>
                                <Col xs={12}>
                                    <Button variant="primary" type="submit">
                                        Submit form
                                    </Button>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane title="Code" eventKey={"code"}>
                            <HighlightCode code={FormWithValidationCode} />
                        </Tab.Pane>
                    </CustomTab>
                </div>
            </Col>
        </Row>
    )
}

export default ValidationStates