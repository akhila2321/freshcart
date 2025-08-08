// import node module libraries
import Link from "next/link";
import { v4 as uuid } from "uuid";
import { Filter } from "react-feather";
import { Button, Form } from "react-bootstrap";
import { usePathname } from "next/navigation";
import { Grid, Grid3x3Gap, ListUl } from "react-bootstrap-icons";

const ProductFilters = ({
  sidebarToggle,
  filterButton = true,
  layoutButton = true,
  productCount,
}) => {
  const location = usePathname();
  const paths = location.split("/").filter((segment) => segment !== "");

  const viewLink = [
    { id: uuid(), icon: <ListUl size={16} />, link: "/shop/shop-list" },
    { id: uuid(), icon: <Grid />, link: "/shop/shop-grid" },
    { id: uuid(), icon: <Grid3x3Gap />, link: "/shop/shop-grid-3-column" },
  ];

  return (
    <div className="d-lg-flex justify-content-between align-items-center">
      <div className="mb-3 mb-lg-0">
        <p className="mb-0">
          <span className="text-dark">{productCount}</span> Products found
        </p>
      </div>

      <div className="d-md-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          {layoutButton ? (
            <div>
              {viewLink.map((item) => (
                <Link
                  href={item.link}
                  key={item.id}
                  className={`me-3 ${("/shop/" + paths[paths.length - 1]) === item.link
                    ? "active"
                    : "text-muted"
                    }`}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          ) : (
            ""
          )}

          {filterButton && (
            <div className="ms-2 d-lg-none">
              <Button
                className="text-muted"
                variant="outline-gray-400"
                onClick={sidebarToggle}
              >
                <Filter className="me-2" />
                Filters
              </Button>
            </div>
          )}
        </div>

        <div className="d-flex mt-2 mt-lg-0">
          <div className="me-2 flex-grow-1">
            <Form.Select>
              <option defaultValue="50">Show: 10</option>
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
    </div>
  );
};

export default ProductFilters;
