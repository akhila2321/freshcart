// import node module libraries
import Link from "next/link";
import { Trash2 } from "react-feather";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

// import custom components
import TanstackTable from "components/table/TanstackTable";
import Checkbox from "components/table/Checkbox";
import FreshBadge from "components/common/FreshBadge";
import FreshTippy from "components/common/FreshTippy";

// import required hooks
import { useWishlist } from "hooks/useWishlist";
import useCartOperations from "hooks/useCartOperations";

const WishListTable = ({ data }) => {
  const { removeWishlistItem } = useWishlist();
  const { addItemToCart } = useCartOperations();

  const columns = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: table.getToggleAllRowsSelectedHandler(),
          }}
        />
      ),
      cell: ({ row }) => (
        <div className="px-1">
          <Checkbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler(),
            }}
          />
        </div>
      ),
    },
    {
      accessorKey: "image",
      header: "",
      cell: ({ row }) => {
        return (
          <Image
            src={row.original.featuredImage}
            className="icon-shape icon-xxl"
            alt=""
          />
        );
      },
    },
    {
      accessorFn: (row) => `${row.product_title} ${row.unit}`,
      accessorKey: "product_title",
      header: "Product",
      cell: ({ row }) => {
        return (
          <div>
            <h5 className="fs-6 mb-0">
              <Link href="#" className="text-inherit">
                {row?.original?.product_title}
              </Link>
            </h5>
            <small>{row.original.unit}</small>
          </div>
        );
      },
    },
    {
      accessorKey: "price",
      header: "Amount",
      cell: ({ getValue }) => {
        return `$${getValue().toFixed(2)}`;
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        if (row.original.stocks > 1) {
          return (
            <FreshBadge content={"In Stock"} bg={"success"} pill={false} />
          );
        } else {
          return (
            <FreshBadge content={"Out of Stock"} bg={"danger"} pill={false} />
          );
        }
      },
    },
    {
      accessorKey: "",
      header: "Actions",
      cell: ({ row }) => {
        if (row.original.stocks > 1) {
          return (
            <Button
              variant="primary"
              size="sm"
              onClick={() => addItemToCart(row?.original)}
            >
              Add to cart
            </Button>
          );
        } else {
          return (
            <Button variant="dark" size="sm">
              Contact us
            </Button>
          );
        }
      },
    },
    {
      accessorKey: "id",
      header: "Remove",
      cell: ({ row, getValue }) => {
        return (
          <FreshTippy content="Delete">
            <Trash2
              size={14}
              className="text-muted"
              onClick={() => removeWishlistItem(row?.original.id)}
            />
          </FreshTippy>
        );
      },
    },
  ];

  return (
    <section className="mt-8 mb-14">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="mb-8">
              <h1 className="mb-1">My Wishlist</h1>
              {data.length > 0 && (
                <p>There are {data.length} products in this wishlist.</p>
              )}
            </div>
          </Col>
          {/* WishList Items */}
          <div>
            {data.length > 0 ? (
              <div className="table-responsive">
                <TanstackTable
                  columns={columns}
                  data={data}
                  pagination={false}
                />
              </div>
            ) : (
              <div className="w-100 text-center">
                <h4 className="fs-4">You have no items</h4>
              </div>
            )}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default WishListTable;
