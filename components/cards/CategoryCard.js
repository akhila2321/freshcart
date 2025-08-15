// import node module libraries
import Link from "next/link";
import { Card, Image } from "react-bootstrap";

const CategoryCard = ({ category, type = "image" }) => {
  const { title, image, link, type: categoryType } = category;
  
  // Split title into type and name if it contains a comma
  const [typePart, namePart] = title.includes('&') || title.includes(',') 
    ? title.split(/[&,]/).map(part => part.trim())
    : ['', title];

  if (type === "image") {
    return (
      <Card.Link
        href={link}
        as={Link}
        className="text-decoration-none text-inherit"
      >
        <Card className="card-product mb-3 h-100 border-0 shadow-sm">
          <Card.Body className="text-center p-3">
            <div className="position-relative" style={{ height: '100px' }}>
              <Image 
                src={image} 
                alt={title} 
                className="img-fluid h-100"
                style={{
                  objectFit: 'contain',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  width: 'auto',
                  transition: 'transform 0.2s ease-in-out'
                }}
              />
            </div>
            <div className="mt-3">
              {typePart && (
                <div className="text-muted small mb-1">{typePart}{title.includes('&') || title.includes(',') ? ' &' : ''}</div>
              )}
              <div className="fw-medium text-truncate">
                {namePart || title}
              </div>
            </div>
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
        <Card className="h-100 border-0 shadow-sm">
          <Card.Body className="text-center p-3">
            <div className="position-relative mb-3" style={{ height: '60px' }}>
              <Image 
                src={image} 
                alt={title}
                className="h-100"
                style={{
                  objectFit: 'contain',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  width: 'auto',
                  transition: 'transform 0.2s ease-in-out'
                }}
              />
            </div>
            <div>
              {typePart && (
                <div className="text-muted small mb-1">{typePart}{title.includes('&') || title.includes(',') ? ' &' : ''}</div>
              )}
              <div className="fw-medium text-truncate">
                {namePart || title}
              </div>
            </div>
          </Card.Body>
        </Card>
      </Card.Link>
    );
  }
};

export default CategoryCard;
