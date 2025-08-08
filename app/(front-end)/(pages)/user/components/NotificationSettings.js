// import node module libraries
import { Form } from "react-bootstrap";

// import required data files
import { websiteNotification } from "data/user/NotificationData";

const NotificationSettings = () => {
  return (
    <div className="py-6 p-md-6 p-lg-10">
      <div className="mb-6">
        <h2 className="mb-0">Notification settings</h2>
      </div>

      {/* Email Notification */}
      <div className="mb-10">
        <div className="border-bottom pb-3 mb-5">
          <h5 className="mb-0">Email Notifications</h5>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-6">
          <div>
            <h6 className="mb-1">Weekly Notification</h6>
            <p className="mb-0">
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose .
            </p>
          </div>

          <Form.Check type="switch">
            <Form.Check.Input type="checkbox" id="flexSwitchCheckDefault" />
            <Form.Label htmlFor="flexSwitchCheckDefault"></Form.Label>
          </Form.Check>

        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-1">Account Summary</h6>
            <p className="mb-0 pe-12">
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis eguris eu sollicitudin massa. Nulla
              ipsum odio, aliquam in odio et, fermentum blandit nulla.
            </p>
          </div>

          <Form.Check type="switch">
            <Form.Check.Input
              type="checkbox"
              id="flexSwitchCheckChecked"
              defaultChecked
            />
            <Form.Check.Label htmlFor="flexSwitchCheckChecked"></Form.Check.Label>
          </Form.Check>
        </div>
      </div>

      {/* Order Updates */}
      <div className="mb-10">
        <div className="border-bottom pb-3 mb-5">
          <h5 className="mb-0">Order updates</h5>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-6">
          <div>
            <h6 className="mb-0">Text messages</h6>
          </div>

          <Form.Check type="switch">
            <Form.Check.Input
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault2"
            />
            <Form.Check.Label htmlFor="flexSwitchCheckDefault2"></Form.Check.Label>
          </Form.Check>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-1">Call before checkout</h6>
            <p className="mb-0">
              We&apos;ll only call if there are pending changes
            </p>
          </div>

          <Form.Check type="switch">
            <Form.Check.Input
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked2"
              defaultChecked
            />
            <Form.Check.Label htmlFor="flexSwitchCheckChecked2"></Form.Check.Label>
          </Form.Check>
        </div>
      </div>

      {/* Website Notification */}
      <div className="mb-6">
        <div className="border-bottom pb-3 mb-5">
          <h5 className="mb-0">Website Notification</h5>
        </div>
        <div>
          {websiteNotification.map((item) => (
            <Form.Check key={item.id}>
              <Form.Check.Input
                type="checkbox"
                defaultChecked={item.isChecked}
              />
              <Form.Check.Label>{item.title}</Form.Check.Label>
            </Form.Check>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
