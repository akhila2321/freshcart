// import node module libraries
import { Row, Col, Tab, Form } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
    InputOneCode,
    InputPhoneCode,
    TextAreaCode,
    InputSearchCode,
    InputThreeCode,
    InputTwoCode,
    InputURLCode,
} from "data/code/formsCode/BasicFormCode";

const FormControls = () => {
    return (
        <Row>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div id="basicForm" className="mb-4">
                    <h2>Form Control</h2>
                    <p>
                        Textual form controls—like
                        <code> &lt;input&gt; </code>
                        s,
                        <code> &lt;select&gt; </code>
                        s, and
                        <code> &lt;textarea&gt; </code>
                        s—are styled with the
                        <code> .form-control </code>
                        class. Included are styles for general appearance, focus state,
                        sizing, and more.
                    </p>
                </div>
                <div className="mb-6">
                    <h3 className="fw-semibold mb-1" id="input">
                        Input
                    </h3>
                    <CustomTab defaultActiveKey={"design"}>
                        <Tab.Pane title="Design" eventKey={"design"}>
                            <div className="mb-3">
                                <Form.Label htmlFor="textInput">Input</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="textInput"
                                    placeholder="Input Text"
                                />
                            </div>
                        </Tab.Pane>
                        <Tab.Pane title="Code" eventKey={"code"}>
                            <HighlightCode code={InputOneCode} />
                        </Tab.Pane>
                    </CustomTab>
                </div>

                <div className="mb-6">
                    <h3 className="fw-semibold mb-1" id="email">
                        Email
                    </h3>
                    <CustomTab defaultActiveKey={"design"}>
                        <Tab.Pane title="Design" eventKey={"design"}>
                            <div className="mb-3">
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    id="email"
                                    placeholder="email@example.com"
                                />
                            </div>
                        </Tab.Pane>
                        <Tab.Pane title="Code" eventKey={"code"}>
                            <HighlightCode code={InputTwoCode} />
                        </Tab.Pane>
                    </CustomTab>
                </div>

                <div className="mb-6">
                    <h3 className="fw-semibold mb-1" id="password">
                        Password
                    </h3>
                    <CustomTab defaultActiveKey={"design"}>
                        <Tab.Pane title="Design" eventKey={"design"}>
                            <div className="mb-3">
                                <Form.Label htmlFor="password">Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    id="password"
                                    placeholder="email@example.com"
                                    defaultValue="passwordexample"
                                />
                            </div>
                        </Tab.Pane>
                        <Tab.Pane title="Code" eventKey={"code"}>
                            <HighlightCode code={InputThreeCode} />
                        </Tab.Pane>
                    </CustomTab>
                </div>

                <div className="mb-6">
                    <h3 className="fw-semibold mb-1" id="textarea">
                        Textarea
                    </h3>
                    <CustomTab defaultActiveKey={"design"}>
                        <Tab.Pane title="Design" eventKey={"design"}>
                            <div className="mb-3">
                                <Form.Label htmlFor="textarea-input">Textarea</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    id="textarea-input"
                                    defaultValue={"Hello World!"}
                                />
                            </div>
                        </Tab.Pane>
                        <Tab.Pane title="Code" eventKey={"code"}>
                            <HighlightCode code={TextAreaCode} />
                        </Tab.Pane>
                    </CustomTab>
                </div>

                <div className="mb-6">
                    <h3 className="fw-semibold mb-1" id="search">
                        Search
                    </h3>
                    <CustomTab defaultActiveKey={"design"}>
                        <Tab.Pane title="Design" eventKey={"design"}>
                            <div className="mb-3">
                                <Form.Label htmlFor="search-input">Search</Form.Label>
                                <Form.Control
                                    type="search"
                                    id="search-input"
                                    defaultValue="Search components"
                                />
                            </div>
                        </Tab.Pane>
                        <Tab.Pane title="Code" eventKey={"code"}>
                            <HighlightCode code={InputSearchCode} />
                        </Tab.Pane>
                    </CustomTab>
                </div>

                <div className="mb-6">
                    <h3 className="fw-semibold mb-1" id="url">
                        Url
                    </h3>
                    <CustomTab defaultActiveKey={"design"}>
                        <Tab.Pane title="Design" eventKey={"design"}>
                            <div className="mb-3">
                                <Form.Label htmlFor="url-input">URL</Form.Label>
                                <Form.Control
                                    type="url"
                                    id="url-input"
                                    defaultValue="https://getbootstrap.com"
                                />
                            </div>
                        </Tab.Pane>
                        <Tab.Pane title="Code" eventKey={"code"}>
                            <HighlightCode code={InputURLCode} />
                        </Tab.Pane>
                    </CustomTab>
                </div>

                <div className="mb-6">
                    <h3 className="fw-semibold mb-1" id="phone">
                        Phone
                    </h3>
                    <CustomTab defaultActiveKey={"design"}>
                        <Tab.Pane title="Design" eventKey={"design"}>
                            <div className="mb-3">
                                <Form.Label htmlFor="telinput">Phone</Form.Label>
                                <Form.Control
                                    type="tel"
                                    id="telinput"
                                    defaultValue="+91 12 3456 7890"
                                />
                            </div>
                        </Tab.Pane>
                        <Tab.Pane title="Code" eventKey={"code"}>
                            <HighlightCode code={InputPhoneCode} />
                        </Tab.Pane>
                    </CustomTab>
                </div>
            </Col>
        </Row>
    )
}

export default FormControls