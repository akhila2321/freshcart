// import node module libraries
import React, { useState } from "react";
import Link from "next/link";
import { Modal, Button, Form, ListGroup } from "react-bootstrap";
import SimpleBar from "simplebar-react";

// import require data files
import { deliveryLocationRates } from "data/DeliveryLocationRates";

export const LocationModal = ({ isLocationOpen, locationClose }) => {
  const [isActive, setIsActive] = useState(null);

  return (
    <Modal
      id="locationModal"
      size="sm"
      show={isLocationOpen}
      onHide={locationClose}
      centered
    >
      <Modal.Dialog centered bsPrefix="modal-content">
        <Modal.Body className="p-6">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h5 className="mb-1" id="locationModalLabel">
                Choose your Delivery Location
              </h5>
              <p className="mb-0 small">
                Enter your address and we will specify the offer you area.
              </p>
            </div>
            <Button
              type="button"
              bsPrefix="btn-close"
              onClick={locationClose}
            />
          </div>

          {/*Location Search Field*/}
          <div className="my-5">
            <Form.Control type="search" placeholder="Search your area" />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="mb-0">Select Location</h6>
            <Link
              href="#"
              className="btn btn-outline-gray-400 text-muted btn-sm"
            >
              Clear All
            </Link>
          </div>

          {/* Location List */}
          <div>
            <SimpleBar style={{ maxHeight: 300 }}>
              <ListGroup variant="flush">
                {deliveryLocationRates.map((item) => (
                  <ListGroup.Item
                    key={item.id}
                    className={`d-flex justify-content-between align-items-center px-2 py-3 list-group-item-action ${isActive === item.id ? "active" : ""
                      }`}
                    onClick={() => setIsActive(item.id)}
                  >
                    <span>{item.location}</span>
                    <span>Min:${item.rate}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </SimpleBar>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};
