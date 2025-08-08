// import node module libraries
import { Button, Image } from "react-bootstrap";

// import required hook
import { useParse } from "hooks/useParse";

const DiscountOnShareCTA = ({ data }) => {
  const { title, desc, image, actionLabel, actionLink } = data;

  const { textContent } = useParse(desc);

  return (
    <div className="mb-4 bg-light d-lg-flex justify-content-between align-items-center rounded">
      <div className="p-10">
        <h2 className="mb-1 fw-bold">{title}</h2>
        {textContent}
        <Button href={actionLink} variant="dark" className="mt-5">
          {actionLabel}
        </Button>
      </div>
      <div className="p-6 d-lg-block d-none">
        <Image src={image} alt="" className="img-fluid" />
      </div>
    </div>
  );
};

export default DiscountOnShareCTA;
