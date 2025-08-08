// import node module libraries
import { Fragment, useState, useCallback } from "react";
import { Form, Button } from "react-bootstrap";

// import custom components
import StarRater from "./StarRater";
import { ImageDropzone } from "components/common/ImageDropzone";

const CreateReview = () => {
  const [images, setImages] = useState([]);

  const onDropImage = useCallback((newImages) => {
    setImages(newImages);
  }, []);

  return (
    <Fragment>
      <div>
        <h3 className="mb-5">Create Review</h3>
        <div className="border-bottom py-4 mb-4">
          <h4 className="mb-3">Overall rating</h4>
          <StarRater />
          <div className="rater"></div>
        </div>
        <div className="border-bottom py-4 mb-4">
          <h4 className="mb-0">Rate Features</h4>
          <div className="my-5">
            <h5>Flavor</h5>
            <StarRater />
          </div>
          <div className="my-5">
            <h5>Value for money</h5>
            <StarRater />
          </div>
          <div className="my-5">
            <h5>Scent</h5>
            <StarRater />
          </div>
        </div>
      </div>

      {/* Create Review Form */}
      <div className="border-bottom py-4 mb-4">
        <h5>Add a headline</h5>
        <Form.Control type="text" placeholder="What’s most important to know" />
      </div>

      <div className="border-bottom py-4 mb-4">
        <h5>Add a photo or video</h5>
        <p>Shoppers find images and videos more helpful than text alone.</p>

        <ImageDropzone onDropImage={onDropImage} images={images} />
      </div>

      <div className="py-4 mb-4">
        <h5>Add a written review</h5>
        <Form.Control
          as="textarea"
          rows="3"
          placeholder="What did you like or dislike? What did you use this product for?"
        />
      </div>

      <div className="d-flex justify-content-end">
        <Button href="#" variant="primary">
          Submit Review
        </Button>
      </div>
    </Fragment>
  );
};

export default CreateReview;
