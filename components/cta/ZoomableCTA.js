// import node module libraries
import { Card, Image } from "react-bootstrap";
import Link from "next/link";
import { ChevronRight } from "react-feather";

const ZoomableCTA = ({ data }) => {
  const { title, image, link, variant } = data;

  return (
    <Card className="border-0 card-hover">
      <Link href={link} className="img-zoom">
        <Image src={image} alt="" className="rounded" />
      </Link>
      <div
        className={`position-absolute w-100 bottom-0 py-3 px-4 rounded-bottom bg-${variant}`}
      >
        <Link
          href="#"
          className="text-white d-flex align-items-center btn-transition"
        >
          {title}
          <ChevronRight className="fs-5" />
        </Link>
      </div>
    </Card>
  );
};

export default ZoomableCTA;
