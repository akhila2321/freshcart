// import node module libraries
import { Dropdown } from "react-bootstrap";
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";

const SocialShare = () => {
  return (
    <div className="mt-8">
      <Dropdown>
        <Dropdown.Toggle variant="outline-secondary">Share</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="">
            <Facebook className="me-2" />
            Facebook
          </Dropdown.Item>

          <Dropdown.Item href="">
            <Twitter className="me-2" />
            Twitter
          </Dropdown.Item>

          <Dropdown.Item href="">
            <Instagram className="me-2" />
            Facebook
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default SocialShare;
