// import node module libraries
import Link from "next/link";
import { ArrowRight } from "react-feather";

const VerticalCTA = ({ data }) => {
  if (!data) return null;
  const { title, desc, image, link } = data;

  return (
    <div
      className="pt-8 px-6 px-xl-8 rounded"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "470px",
      }}
    >
      <div>
        <h3 className="fw-bold text-white">{title}</h3>
        <p className="text-white">{desc}</p>
        <Link href={link} className="btn btn-primary">
          Shop Now
          <ArrowRight className="ms-1" size={14} />
        </Link>
      </div>
    </div>
  );
};

export default VerticalCTA;
