// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import AccountDetailsForm from "components/form/AccountDetailsForm";
import ChangePasswordForm from "components/form/ChangePasswordForm";

// import required data file
import { FormTwoCode } from "data/code/components-code/FormCode";

const FormTwo = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="" className="mb-4">
          <h2 className="mb-0">Form #2</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <div className="py-6 p-md-6 p-lg-10">
                <AccountDetailsForm />
                <hr className="my-10" />
                <ChangePasswordForm />
              </div>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={FormTwoCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default FormTwo;
