// import node module libraries
import Link from "next/link";
import { useState, useEffect } from "react";
import { Image, Modal, Button } from "react-bootstrap";

// import custom components
import FreshBadge from "components/common/FreshBadge";

const PromotionModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShowModal(false);

  return (
    <Modal
      id="modal-subscribe"
      centered
      size="lg"
      show={showModal}
      onHide={handleClose}
    >
      <Modal.Dialog bsPrefix="modal-content" centered size="lg">
        <Modal.Body className="p-0">
          <div className="d-flex align-items-center">
            <div className="d-none d-lg-block">
              <Image
                src="/images/banner/modal_img.jpg"
                alt=""
                className="img-fluid rounded-start"
              />
            </div>
            <div className="px-8 py-8 py-lg-0">
              <div className="position-absolute end-0 top-0 m-6">
                <Button
                  type="button"
                  bsPrefix="btn-close"
                  onClick={handleClose}
                />
              </div>

              <FreshBadge
                content={"7 Day Super Sale"}
                bg="light-danger"
                text={"danger"}
                className={"mb-4 px-4 py-2"}
              />
              <h2 className="display-6 fw-bold">
                Discount up to
                <br />
                <span className="text-primary">50%</span>
              </h2>
              <p className="lead mb-5">
                Seven day of grate deals - what could be better?
              </p>

              <div className="d-grid">
                <Link href="#" className="btn btn-primary">
                  Start Show Now
                </Link>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};

export default PromotionModal;
