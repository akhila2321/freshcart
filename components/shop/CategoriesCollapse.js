// import node module libraries
import { Fragment } from "react";
import {
  Accordion,
  AccordionContext,
  useAccordionButton,
  Nav,
} from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";

// import require hooks
import { useContext } from "react";

// import required routes files
import { CategoryNavigation } from "routes/CategoryNavigation";

const CategoriesCollapse = ({ ...props }) => {
  //Custom Toggle
  function CustomToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = activeEventKey === eventKey;
    return (
      <Nav.Item className="border-bottom w-100">
        <Nav.Link
          href="#"
          className="nav-link"
          onClick={decoratedOnClick}
          aria-expanded={isCurrentEventKey ? true : false}
        >
          {children}

          <ChevronRight size={10} />
        </Nav.Link>
      </Nav.Item>
    );
  }

  return (
    <div className="mb-8" {...props}>
      <h5 className="mb-3">Categories</h5>
      <Accordion
        bsPrefix="nav nav-category"
        id="categoryCollapseMenu"
        as={"ul"}
      >
        {CategoryNavigation.map((item, index) => {
          if (item.children) {
            return (
              <Fragment key={item.id}>
                <CustomToggle eventKey={index}>{item.title}</CustomToggle>

                {/* Sub Category */}
                <Accordion.Collapse
                  as="li"
                  id={`categoryFlush${index}`}
                  eventKey={index}
                >
                  <Nav as="ul" className="flex-column ms-3">
                    {item.children.map((subItem) => (
                      <Nav.Item key={subItem.id} as="li" className="mb-2">
                        <Nav.Link href={subItem.link || "#"} className="d-flex align-items-center">
                          {subItem.image && (
                            <div className="me-2" style={{ width: '30px', height: '30px', borderRadius: '4px', overflow: 'hidden' }}>
                              <img 
                                src={subItem.image} 
                                alt={subItem.title} 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                              />
                            </div>
                          )}
                          <span>{subItem.title}</span>
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Accordion.Collapse>
              </Fragment>
            );
          }
        })}
      </Accordion>
    </div>
  );
};

export default CategoriesCollapse;
