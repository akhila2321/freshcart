// import node module libraries
import { Form, InputGroup, Button } from "react-bootstrap";
import { Search } from "react-feather";
import { v4 as uuid } from "uuid";

const categoryLinks = [
  { id: uuid(), category: "All Categories" },
  { id: uuid(), category: "Milk Drinks" },
  { id: uuid(), category: "Curd & Yogurt" },
  { id: uuid(), category: "Eggs" },
  { id: uuid(), category: "Buns & Bakery" },
  { id: uuid(), category: "Cheese" },
  { id: uuid(), category: "Condensed Milk" },
  { id: uuid(), category: "Dairy Products" },
];

const SearchInputFormTwo = () => {
  return (
    <Form>
      <InputGroup>
        <Form.Select onChange={() => { }}>
          {categoryLinks.map((item) => (
            <option key={item.category}>{item.category}</option>
          ))}
        </Form.Select>
        <Form.Control
          type="text"
          className="w-45"
          placeholder="Search for products"
        />
        <Button bsPrefix="input-group-text bg-transparent" type="submit">
          <Search size={16} />
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchInputFormTwo;
