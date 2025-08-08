// import node module libraries
import { useState, useCallback } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import dynamic from "next/dynamic";

// import custom components
import { ImageDropzone } from "components/common/ImageDropzone";
const Editor = dynamic(() => import("components/common/Editor"), {
  ssr: false,
});

const AddProductForm = () => {
  const [images, setImages] = useState([]);

  const onDropImage = useCallback((newImages) => {
    setImages(newImages);
  }, []);

  return (
    <Row>
      <Col lg={8} xs={12}>
        <Card className="mb-6 card-lg">
          <Card.Body className="p-6">
            <h4 className="mb-4 h5">Product Information</h4>
            <Row>
              <Col lg={6} className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Product Name" required />
              </Col>
              <Col lg={6} className="mb-3">
                <Form.Label>Product Category</Form.Label>
                <Form.Select>
                  <option defaultValue={""}>Product Category</option>
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
                <Form.Label>Weight</Form.Label>
                <Form.Control type="text" placeholder="Weight" required />
              </Col>
              <Col lg={6} className="mb-3">
                <Form.Label>Weight</Form.Label>
                <Form.Select>
                  <option defaultValue={""}>Select Units</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Form.Select>
              </Col>
              <Col className="mb-3 mt-5" lg={12}>
                <h4 className="mb-3 h5">Product Images</h4>
                <ImageDropzone onDropImage={onDropImage} images={images} />
              </Col>
              <Col lg={12} className="mb-3 mt-5">
                <h4 className="mb-3 h5">Product Descriptions</h4>
                <Editor />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4} xs={12}>
        <Card className="mb-6 card-lg">
          <Card.Body className="p-6">
            <Form.Check type="switch">
              <Form.Check.Input
                type="checkbox"
                id="flexSwitchStock"
                defaultChecked
              />
              <Form.Check.Label htmlFor="flexSwitchStock">
                In Stock
              </Form.Check.Label>
            </Form.Check>

            <div>
              <div className="mb-3">
                <Form.Label>Product Code</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Title" />
              </div>

              <div className="mb-3">
                <Form.Label>Product SKU</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Title" />
              </div>

              <div className="mb-3">
                <Form.Label>Status</Form.Label>
                <br />
                <Form.Check
                  type="radio"
                  inline
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  label="Active"
                />

                <Form.Check
                  type="radio"
                  inline
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  label="Disabled"
                />
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card className="mb-6 card-lg">
          <Card.Body className="p-6">
            <h4 className="mb-4 h5">Product Price</h4>
            <div className="mb-3">
              <Form.Label>Regular Price</Form.Label>
              <Form.Control type="text" placeholder="$0.00" />
            </div>

            <div className="mb-3">
              <Form.Label>Sale Price</Form.Label>
              <Form.Control type="text" placeholder="$0.00" />
            </div>
          </Card.Body>
        </Card>

        <Card className="mb-6 card-lg">
          <Card.Body className="p-6">
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
          </Card.Body>
        </Card>

        <div className="d-grid">
          <Button variant="primary">Create Product</Button>
        </div>
      </Col>
    </Row>
  );
};

export default AddProductForm;
