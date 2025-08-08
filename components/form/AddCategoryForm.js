// import node module libraries
import dynamic from "next/dynamic";
import { useState } from "react";
import { Row, Col, Form, Button, Image, Card } from "react-bootstrap";
import { PencilFill } from "react-bootstrap-icons";
import Flatpickr from "react-flatpickr";

// import custom components
const Editor = dynamic(() => import("components/common/Editor"), {
  ssr: false,
});

const AddCategoryForm = () => {
  const [categoryImg, setCategoryImg] = useState(null);

  return (
    <Row>
      <Col lg={12} xs={12}>
        <Card className="mb-6 shadow border-0">
          <Card.Body className="p-6">
            <h4 className="mb-5 h5">Category Image</h4>
            <div className="mb-4 d-flex">
              <div className="position-relative">
                <Image
                  className="image  icon-shape icon-xxxl bg-light rounded-4"
                  src={categoryImg ? categoryImg : "/images/icons/bakery.svg"}
                  alt="Image"
                />

                <div className="file-upload position-absolute end-0 top-0 mt-n2 me-n1">
                  <Form.Control
                    bsPrefix="file-input"
                    type="file"
                    onChange={(e) => {
                      setCategoryImg(URL.createObjectURL(e.target.files[0]));
                    }}
                  />
                  <span className="icon-shape icon-sm rounded-circle bg-white">
                    <PencilFill size={12} className="text-muted" />
                  </span>
                </div>
              </div>
            </div>

            <h4 className="mb-4 h5 mt-5">Category Information</h4>
            <Row>
              <Col lg={6} className="mb-3">
                <Form.Label>Category Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Category Name"
                  required
                />
              </Col>

              <Col lg={6} className="mb-3">
                <Form.Label>Slug</Form.Label>
                <Form.Control type="text" placeholder="Slug" required />
              </Col>

              <Col lg={6} className="mb-3">
                <Form.Label>Parent Category</Form.Label>
                <Form.Select>
                  <option defaultValue="categoryname">Category Name</option>
                  <option value="Dairy, Bread & Eggs">
                    Dairy, Bread & Eggs
                  </option>
                  <option value="Snacks & Munchies">Snacks & Munchies</option>
                  <option value="Fruits & Vegetables">
                    Fruits & Vegetables
                  </option>
                </Form.Select>
              </Col>
              <Col lg={6} className="mb-3">
                <Form.Label>Date</Form.Label>
                <Flatpickr className="form-control" placeholder="Select Date" />
              </Col>
              <Col lg={12} className="mb-3">
                <Form.Label>Description</Form.Label>
                <Editor />
              </Col>

              <Col lg={12} className="mb-3">
                <Form.Label id="productSKU">Status</Form.Label>
                <br />
                <Form.Check
                  type="radio"
                  label="Active"
                  inline
                  name="inlineRadioOptions"
                  defaultChecked
                />
                <Form.Check
                  type="radio"
                  label="Disabled"
                  inline
                  name="inlineRadioOptions"
                  defaultChecked
                />
              </Col>

              <Col lg={12} className="mb-3 mt-5">
                <h4 className="mb-4 h5">Meta Data</h4>
                <div className="mb-3">
                  <Form.Label>Meta Title</Form.Label>
                  <Form.Control type="text" placeholder="Title" />
                </div>

                <div className="mb-3">
                  <Form.Label>Meta Description</Form.Label>
                  <Form.Control
                    type="text"
                    as="textarea"
                    rows={3}
                    placeholder="Meta Description"
                  />
                </div>
              </Col>

              <Col lg={12}>
                <Button variant="primary">Create Product</Button>
                <Button variant="secondary" className="ms-2">
                  Save
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default AddCategoryForm;
