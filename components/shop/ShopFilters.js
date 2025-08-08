// import node module libraries
import Link from "next/link";
import { Form } from "react-bootstrap";
import { Grid, Grid3x3Gap, ListUl } from "react-bootstrap-icons";

const ShopFilters = ({ productCount }) => {
  return (
    <div className="d-md-flex justify-content-between align-items-center">
      <div>
        <p className="mb-3 mb-md-0">
          <span className="text-dark">{productCount} </span>
          Products found
        </p>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <Link href="shop-list" className="text-muted me-3">
          <ListUl />
        </Link>
        <Link href="shop-grid" className="me-3 active">
          <Grid />
        </Link>
        <Link href="shop-grid-3-column" className="me-3 text-muted">
          <Grid3x3Gap />
        </Link>

        <div className="me-2">
          <Form.Select>
            <option defaultValue="50">Show: 50</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </Form.Select>
        </div>

        <div>
          <Form.Select>
            <option defaultValue={""}>Sort by: Featured</option>
            <option value="Low to High">Price: Low to High</option>
            <option value="High to Low">Price: High to Low</option>
            <option value="Release Date">Release Date</option>
            <option value="Avg. Rating">Avg. Rating</option>
          </Form.Select>
        </div>
      </div>
    </div>
  );
};

export default ShopFilters;
