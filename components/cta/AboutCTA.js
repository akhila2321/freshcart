// import node module libraries
import { Card, Image, Button } from "react-bootstrap";

const AboutCTA = ({ data }) => {
  const { image, title, desc, actionLabel, actionLink } = data;

  return (
    <Card className="bg-light mb-6 border-0">
      <Card.Body className="p-8">
        <div className="mb-4">
          <Image src={image} alt="" />
        </div>
        <h4>{title}</h4>
        <p>{desc}</p>

        <Button href={actionLink} variant="dark" className="mt-2">
          {actionLabel}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AboutCTA;
