// import node module libraries
import { ListGroup } from "react-bootstrap";
import { ArrowRight } from "react-feather";
import Link from "next/link";

const AreaList = ({ areaList }) => {
  return (
    <ListGroup bsPrefix="list-unstyled">
      {areaList.map((area) => (
        <ListGroup.Item className="mb-2" key={area.id}>
          <Link href={area.link} className="text-reset">
            <ArrowRight className="me-1" size={14} />
            {area.name}
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default AreaList;
