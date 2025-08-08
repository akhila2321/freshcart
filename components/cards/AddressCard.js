// import node module libraries
import { Card, Button, Form } from "react-bootstrap";
import Link from "next/link";

const AddressCard = ({ data, defaultTextAsButton = true }) => {
  const {
    id,
    fName,
    lName,
    address,
    address2,
    city,
    country,
    zip,
    phone,
    isDefault,
    type,
  } = data;

  return (
    <Card>
      <Card.Body className="p-6">
        <Form.Check className="form-check mb-4">
          <Form.Check.Input
            type="radio"
            name="flexRadioDefault"
            id={"addressRadio" + id}
            defaultChecked={isDefault}
          />
          <Form.Check.Label
            className="text-dark fw-semibold"
            htmlFor={"addressRadio" + id}
          >
            {type}
          </Form.Check.Label>
        </Form.Check>

        <p className="mb-6">
          {fName} {lName}
          <br />
          {`${address}, ${address2}`}
          <br />
          {`${city} ${zip}`} {country} <br />
          {phone}
        </p>
        {isDefault ? (
          defaultTextAsButton ? (
            <Button variant="info" size="sm">
              Default address
            </Button>
          ) : (
            <span className="text-danger">Default address</span>
          )
        ) : (
          <Link href="" className="link-primary">
            Set as Default
          </Link>
        )}

        <div className="mt-4">
          <Link href="#" className="text-inherit">
            Edit
          </Link>
          <Link href="#" className="text-danger ms-3">
            Delete
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AddressCard;
