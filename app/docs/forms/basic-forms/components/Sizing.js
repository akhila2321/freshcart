// import node module libraries
import { Row, Col, Tab, Form } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { InputSizeCode } from "data/code/formsCode/BasicFormCode";

const Sizing = () => {
    return (
        <Row>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div id="sizing" className="mb-4">
                    <h2>Sizing</h2>
                    <p>
                        Set heights using classes like
                        <code className="highlighter-rouge"> .form-control-lg </code>
                        and
                        <code className="highlighter-rouge"> .form-control-sm </code>.
                    </p>
                </div>
                <div className="mb-10">
                    <CustomTab defaultActiveKey={"design"}>
                        <Tab.Pane title="Design" eventKey={"design"}>
                            <div className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Large input"
                                    size="lg"
                                />
                            </div>

                            <div className="mb-3">
                                <Form.Control type="text" placeholder="Normal input" />
                            </div>

                            <div className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Small input"
                                    size="sm"
                                />
                            </div>
                        </Tab.Pane>
                        <Tab.Pane title="Code" eventKey={"code"}>
                            <HighlightCode code={InputSizeCode} />
                        </Tab.Pane>
                    </CustomTab>
                </div>
            </Col>
        </Row>
    )
}

export default Sizing