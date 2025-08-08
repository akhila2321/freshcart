// import custom components
import TanstackTable from "components/table/TanstackTable";

const OrdersTable = ({ columns, data }) => {
  if (!data) return null;

  return (
    <div className="py-6 p-md-6 p-lg-10">
      <h2 className="mb-6">Your Orders</h2>
      <TanstackTable
        columns={columns}
        data={data}
        className="table-responsive-xxl border-0"
        tdClass="align-middle border-top-0"
      />
    </div>
  );
};

export default OrdersTable;
