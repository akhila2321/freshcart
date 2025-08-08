// import node module libraries
import { Form } from "react-bootstrap";

const DeliveryInstruction = () => {
  return (
    <div className="mt-5">
      <Form.Label htmlFor="DeliveryInstructions">
        Delivery instructions
      </Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Write delivery instructions "
      />
      <Form.Text as="p">
        Add instructions for how you want your order shopped and/or delivered
      </Form.Text>
    </div>
  );
};

export default DeliveryInstruction;
