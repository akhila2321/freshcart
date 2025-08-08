// import node module libraries
import Link from "next/link";
import { Card, Image } from "react-bootstrap";

const CategoryCard = ({ category, type = "image" }) => {
  const { title, image, link } = category;

  if (type === "image") {
    return (
      <Card.Link
        href={link}
        as={Link}
        className="text-decoration-none text-inherit"
      >
        <Card className="card-product mb-lg-4">
          <Card.Body className="text-center py-8">
            <Image src={image} alt="" className="mb-3 img-fluid" />
            <div className="text-truncate">{title}</div>
          </Card.Body>
        </Card>
      </Card.Link>
    );
  } else if (type === "icon") {
    return (
      <Card.Link
        href={link}
        as={Link}
        className="text-decoration-none text-inherit"
      >
        <Card className="mb-3 card-lift">
          <Card.Body className="text-center py-6">
            <div className="my-5">
              <Image src={image} alt="" />
            </div>

            <div>{title}</div>
          </Card.Body>
        </Card>
      </Card.Link>
    );
  }
};

export default CategoryCard;
