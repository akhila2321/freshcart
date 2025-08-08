// import node module libraries
import { Form, InputGroup, Button } from "react-bootstrap";
import { Search } from "react-feather";

const SearchBar = ({ className }) => {
  return (
    <Form action="#" className={className}>
      <InputGroup>
        <Form.Control
          className="rounded"
          type="search"
          placeholder="Search for products"
        />
        <span className="input-group-append">
          <Button
            variant="white"
            className="border border-start-0 ms-n10 rounded-0 rounded-end"
          >
            <Search size={16} />
          </Button>
        </span>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
