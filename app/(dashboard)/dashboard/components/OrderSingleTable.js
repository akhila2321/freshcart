// import node module libraries
import { Fragment } from "react";
import { Row, Col, Image, Card, Button, Table, Form } from "react-bootstrap";
import Link from "next/link";

const OrderSingleTable = ({ data }) => {
  return (
    <Fragment>
      <Row>
        <Col xs={12}>
          <Table className="mb-0 text-nowrap table-centered" responsive>
            <thead className="bg-light">
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Link href="#" className="text-inherit">
                      <div className="d-flex align-items-center">
                        <div>
                          <Image
                            src={item.image}
                            alt=""
                            className="icon-shape icon-lg"
                          />
                        </div>
                        <div className="ms-lg-4 mt-2 mt-lg-0">
                          <h5 className="mb-0 h6">{item.product}</h5>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td>
                    <span className="text-body">${item.price.toFixed(2)}</span>
                  </td>
                  <td>{item.qty}</td>
                  <td>${item.total.toFixed(2)}</td>
                </tr>
              ))}

              <tr>
                <td className="border-bottom-0 pb-0"></td>
                <td className="border-bottom-0 pb-0"></td>
                <td colSpan="1" className="fw-medium text-dark">
                  Sub Total :
                </td>
                <td className="fw-medium text-dark">$80.00</td>
              </tr>
              <tr>
                <td className="border-bottom-0 pb-0"></td>
                <td className="border-bottom-0 pb-0"></td>
                <td colSpan="1" className="fw-medium text-dark">
                  Shipping Cost
                </td>
                <td className="fw-medium text-dark">$10.00</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td colSpan="1" className="fw-semibold text-dark">
                  Grand Total
                </td>
                <td className="fw-semibold text-dark">$90.00</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      <Card.Body className="p-6">
        <Row>
          <Col md={6} className="mb-4 mb-lg-0">
            <h6>Payment Info</h6>
            <span>Cash on Delivery</span>
          </Col>
          <Col md={6}>
            <h5>Notes</h5>
            <Form.Control
              className="mb-3"
              as="textarea"
              rows={3}
              placeholder="Write note for order"
            />
            <Button variant="primary"> Save Notes</Button>
          </Col>
        </Row>
      </Card.Body>
    </Fragment>
  );
};

export default OrderSingleTable;
