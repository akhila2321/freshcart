"use client";
import { Fragment, useState, useMemo } from "react";
import { Row, Col, Form, Card, Image, Dropdown } from "react-bootstrap";
import Link from "next/link";
import { MoreVertical } from "react-feather";
import { Trash3, PencilSquare, EyeFill } from "react-bootstrap-icons";

// import custom components
import DashboardHeading from "components/dashboard/common/DashboardHeading";
import ActionMenuToggle from "components/common/ActionMenuToggle";
import FreshBadge from "components/common/FreshBadge";
import Pagination from "components/common/Pagination";

// import required data file
import { blogWithSlug } from "data/BlogPostData";

// import required hook
import usePagination from "hooks/usePagination";
import { useDebounce } from "hooks/useDebounce";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { pageNumber, changePageHandle } = usePagination();

  // Calculate the number of pages visited based on the current page number
  const itemPerPage = 8;
  const pagesVisited = pageNumber * itemPerPage;

  const debouncedSearch = useDebounce(searchQuery, 300);

  const filteredData = useMemo(() => {
    const search = debouncedSearch.toLowerCase();
    return blogWithSlug.filter(({ title, desc, shortDesc, date, status }) => {
      return (
        title.toLowerCase().includes(search) ||
        desc.toLowerCase().includes(search) ||
        shortDesc.toLowerCase().includes(search) ||
        date.includes(debouncedSearch) ||
        status.toLowerCase().includes(search)
      );
    });
  }, [debouncedSearch]);

  // Slice the blog data to get the posts for the current page
  const slicedData = filteredData.slice(
    pagesVisited,
    pagesVisited + itemPerPage
  );

  return (
    <Fragment>
      <DashboardHeading
        heading="Blog List"
        btnLabel="New Post"
        btnLink="/dashboard/blog/new-post"
        disabledLink={true}
      />

      <Row>
        <Col xl={12} className="mb-9">
          <Row className="d-flex justify-content-between flex-md-row flex-column gap-2">
            <Col lg={4} md={4}>
              <Form>
                <Form.Label htmlFor="postSearch" visuallyHidden>
                  Search Post
                </Form.Label>
                <Form.Control
                  type="search"
                  id="postSearch"
                  placeholder="Search Post"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Form>
            </Col>
            <Col lg={3} md={4}>
              <Form.Label htmlFor="postbyDate" visuallyHidden>
                Post by Date
              </Form.Label>
              <Form.Select id="postbyDate" defaultValue="Latest">
                <option value={"Latest"}>Latest</option>
                <option value="Popular">Popular</option>
                <option value="Oldest">Oldest</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Placeholder for Blog List Table */}
      <Row className="g-6">
        {slicedData.map((post) => (
          <Col lg={6} key={post.id}>
            <Card className="card-lg rounded-4 border-0 card-lift">
              <Row className="g-1 p-4">
                <Col md={4}>
                  <div className="img-zoom">
                    <Link href={`/dashboard/blog/${post.slug}`}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        className="rounded-3 object-fit-cover thumbnail-cover-img"
                        style={{ height: "200px", width: "100%" }}
                      />
                    </Link>
                  </div>
                </Col>
                <Col md={8}>
                  <Card.Body className="d-flex flex-column gap-4 gap-lg-8 h-100">
                    <div className="d-flex flex-column gap-4">
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <FreshBadge
                          content={post.status}
                          text={
                            post.status === "draft"
                              ? "dark-danger"
                              : "dark-success"
                          }
                          className="text-capitalize"
                          bg={
                            post.status === "draft"
                              ? "light-danger"
                              : "light-success"
                          }
                          pill={false}
                        />
                        <div>
                          <ActionMenuToggle
                            drop="down"
                            align="start"
                            toggle={<MoreVertical className="fs-5" size={18} />}
                          >
                            <Dropdown.Item
                              className="text-reset"
                              href={`/dashboard/blog/${post.slug}`}
                            >
                              <EyeFill className="me-3" />
                              View
                            </Dropdown.Item>
                            <Dropdown.Item className="text-reset">
                              <PencilSquare className="me-3" /> Edit
                            </Dropdown.Item>
                            <Dropdown.Item className="text-danger">
                              <Trash3 className="me-3 text-danger" /> Delete
                            </Dropdown.Item>
                          </ActionMenuToggle>
                        </div>
                      </div>
                      <Link
                        href={`/dashboard/blog/${post.slug}`}
                        className="text-reset"
                      >
                        <h3 className="mb-0 h5">{post.title}</h3>
                      </Link>
                    </div>
                    <div className="d-flex flex-md-row justify-content-between align-items-center mt-auto">
                      <small>{post.date}</small>
                      <small>
                        Read time:
                        <small className="text-dark">{post.read_time}</small>
                      </small>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
      {filteredData.length > itemPerPage && (
        <Col>
          <div className="mt-7 mt-lg-10">
            <Pagination
              totalRecords={filteredData.length}
              itemPerPage={itemPerPage}
              onPageChange={changePageHandle}
              pageNumber={pageNumber}
              pageCount={Math.ceil(filteredData.length / itemPerPage)}
              showLength={false}
              icon={false}
            />
          </div>
        </Col>
      )}
    </Fragment>
  );
};

export default Index;
