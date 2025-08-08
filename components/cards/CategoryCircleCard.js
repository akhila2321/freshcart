// import node module libraries
import { Image } from "react-bootstrap";
import Link from "next/link";

const CategoryCircleCard = ({ image, category }) => {
  return (
    <div className="text-center mb-10">
      <Link href="#">
        <Image src={image} alt="" className="card-image rounded-circle" />
      </Link>

      <div className="mt-4">
        <h5 className="fs-6 mb-0">
          <Link href="" className="text-inherit">
            {category}
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default CategoryCircleCard;
