// import node module libraries
import { Fragment, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

// import custom components
import AddAddressModal from "components/modal/AddAddressModal";
import AddressCard from "components/cards/AddressCard";

// import required hooks
import useToggle from "hooks/useToggle";

// import required data files
import { addressListData } from "data/user/AddressListData";

const AddressList = () => {
  const { isToggled, toggle, handleClose } = useToggle();
  return (
    <Fragment>
      <div className="py-6 p-md-6 p-lg-10">
        <div className="d-flex justify-content-between mb-6">
          <h2 className="mb-0">Address</h2>

          <Button href="#" variant="outline-primary" onClick={() => toggle()}>
            Add a new address
          </Button>
        </div>

        <Row>
          {addressListData.map((item) => (
            <Col lg={5} xxl={4} xs={12} className="mb-4" key={item.id}>
              <AddressCard data={item} isDefault={item.isDefault} />
            </Col>
          ))}
        </Row>
      </div>

      {/* Add Address Modal */}
      <AddAddressModal isAddressOpen={isToggled} addressClose={handleClose} />
    </Fragment>
  );
};

export default AddressList;
