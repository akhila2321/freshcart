"use client";
// Imports
import { useState, useCallback } from "react";
import { Row, Col, Form, Card, Button } from "react-bootstrap";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Custom Components
import { ImageDropzone } from "components/common/ImageDropzone";

// Dynamic Imports
const Editor = dynamic(() => import("components/common/Editor"), {
  ssr: false,
});
const TagsInput = dynamic(() => import("components/common/TagsInput"), {
  ssr: false,
});

// Yup Validation Schema
const schema = yup
  .object({
    title: yup.string().required("Please enter post title"),
    short_desc: yup
      .string()
      .required("Please enter a message in the textarea."),
    category: yup.string().required("Please select a valid category"),
    seo_content: yup.string().required("Please enter SEO content"),
    meta_desc: yup.string().required("Please enter a message in the textarea."),
  })
  .required();

const CreateNewBlogForm = () => {
  const [images, setImages] = useState([]);
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  // Callback function drop images
  const onDropImage = useCallback((newImages) => {
    setImages(newImages);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const payload = {
      ...data,
      content,
      tags,
      coverImage: images.length > 0 ? images[0] : null,
      publish: data.publish || false,
      enableComments: data.enableComments || false,
    };

    console.log("Submitted Data:", payload);
  };

  return (
    <Row>
      <Col>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="needs-validation"
          noValidate
        >
          <Row>
            <Col lg={8}>
              <Card>
                <Card.Body className="p-6 d-flex flex-column gap-3">
                  <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      placeholder="Post Title"
                      isInvalid={!!errors.title}
                      {...register("title")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.title?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Cover</Form.Label>
                    <ImageDropzone onDropImage={onDropImage} images={images} />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Write a short description"
                      isInvalid={!!errors.short_desc}
                      {...register("short_desc")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.short_desc?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label htmlFor="content">Content</Form.Label>
                    <Editor value={content} onChange={setContent} />
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card>
                <Card.Body className="p-6 d-flex flex-column gap-3">
                  <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                      isInvalid={!!errors.category}
                      {...register("category")}
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select Category
                      </option>
                      <option value="recipes">Recipes</option>
                      <option value="company">Company</option>
                      <option value="retailer">Retailer</option>
                      <option value="category-4">Category 4</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.category?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <TagsInput value={tags} onChange={setTags} />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>SEO Content</Form.Label>
                    <Form.Control
                      placeholder="Meta Title"
                      isInvalid={!!errors.seo_content}
                      {...register("seo_content")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.seo_content?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>SEO Description</Form.Label>
                    <Form.Control
                      placeholder="Meta Descriptions"
                      isInvalid={!!errors.meta_desc}
                      {...register("meta_desc")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.meta_desc?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="d-flex justify-content-between">
                    <Form.Label className="ps-0">Publish</Form.Label>
                    <Form.Check type="switch" {...register("publish")} />
                  </Form.Group>

                  <Form.Group className="d-flex justify-content-between">
                    <Form.Label className="ps-0">Enable comments</Form.Label>
                    <Form.Check type="switch" {...register("enableComments")} />
                  </Form.Group>

                  <div className="d-flex gap-2">
                    <Button variant="primary" className="w-100" type="submit">
                      Post
                    </Button>
                    <Button variant="light" className="w-100" type="button">
                      Preview
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default CreateNewBlogForm;
