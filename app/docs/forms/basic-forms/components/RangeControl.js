// import node module libraries
import { Fragment } from "react";
import { Row, Col, Tab, Form } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
    InputRangeCode,
    InputRangeFourCode,
    InputRangeThreeCode,
    InputRangeTwoCode
} from "data/code/formsCode/BasicFormCode";

const RangeControl = () => {
    return (
        <Fragment>
            <Row>
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div id="range" className="mb-4">
                        <h2>Range</h2>
                        <p>
                            Create custom
                            <code className="highlighter-rouge">
                                &lt;input type=&quot;range&quot;&gt;
                            </code>
                            controls with
                            <code className="highlighter-rouge">.custom-range.</code>
                            The track (the background) and thumb (the value) are both styled
                            to appear the same across browsers. As only IE and Firefox support
                            “filling” their track from the left or right of the thumb as a
                            means to visually indicate progress, we do not currently support
                            it.
                        </p>
                    </div>
                    <div className="mb-6">
                        <CustomTab defaultActiveKey={"design"}>
                            <Tab.Pane title="Design" eventKey={"design"}>
                                <Form.Label htmlFor="customRange1">Example range</Form.Label>
                                <Form.Range type="range" id="customRange1" />
                            </Tab.Pane>
                            <Tab.Pane title="Code" eventKey={"code"}>
                                <HighlightCode code={InputRangeCode} />
                            </Tab.Pane>
                        </CustomTab>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className="mb-4">
                        <h3 className="fw-semibold mb-1">Disabled</h3>
                        <p>
                            Add the
                            <code>disabled</code>
                            boolean attribute on an input to give it a grayed out appearance
                            and remove pointer events.
                        </p>
                    </div>
                    <div className="mb-6">
                        <CustomTab defaultActiveKey={"design"}>
                            <Tab.Pane title="Design" eventKey={"design"}>
                                <Form.Label htmlFor="disabledRange">Disabled range</Form.Label>
                                <Form.Range type="range" id="disabledRange" disabled />
                            </Tab.Pane>
                            <Tab.Pane title="Code" eventKey={"code"}>
                                <HighlightCode code={InputRangeTwoCode} />
                            </Tab.Pane>
                        </CustomTab>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className="mb-4">
                        <h3 className="fw-semibold mb-1">Mix and max</h3>
                        <p>
                            Add the
                            <code> disabled </code>
                            boolean attribute on an input to give it a grayed out appearance
                            and remove pointer events.
                        </p>
                    </div>
                    <div className="mb-6">
                        <CustomTab defaultActiveKey={"design"}>
                            <Tab.Pane title="Design" eventKey={"design"}>
                                <Form.Label htmlFor="customRange2">Example range</Form.Label>
                                <Form.Range type="range" min={0} max={5} id="customRange2" />
                            </Tab.Pane>
                            <Tab.Pane title="Code" eventKey={"code"}>
                                <HighlightCode code={InputRangeThreeCode} />
                            </Tab.Pane>
                        </CustomTab>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className="mb-4">
                        <h3 className="mb-1 fw-semibold">Steps</h3>
                        <p>
                            By default, range inputs “snap” to integer values. To change this,
                            you can specify a<code> step </code>
                            value. In the example below, we double the number of steps by
                            using
                            <code> step=&quot;0.5&quot; </code>.
                        </p>
                    </div>
                    <div className="mb-10">
                        <CustomTab defaultActiveKey={"design"}>
                            <Tab.Pane title="Design" eventKey={"design"}>
                                <Form.Label htmlFor="customRange3">Example range</Form.Label>
                                <Form.Range
                                    type="range"
                                    min={0}
                                    max={5}
                                    step={0.5}
                                    id="customRange3"
                                />
                            </Tab.Pane>
                            <Tab.Pane title="Code" eventKey={"code"}>
                                <HighlightCode code={InputRangeFourCode} />
                            </Tab.Pane>
                        </CustomTab>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
}

export default RangeControl