// import node module libraries
import { Button } from "react-bootstrap";

const DeleteAccountButton = () => {
  return (
    <div>
      <h5 className="mb-4">Delete Account</h5>
      <p className="mb-2">Would you like to delete your account?</p>
      <p className="mb-5">
        This account contain 12 orders, Deleting your account will remove all
        the order details associated with it.
      </p>

      <Button href="#" variant="outline-danger">
        I want to delete my account
      </Button>
    </div>
  );
};

export default DeleteAccountButton;
