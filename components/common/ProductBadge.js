// import node module libraries
import { Fragment } from "react";

// import custom components
import FreshBadge from "./FreshBadge";

const ProductBadge = ({
  discount,
  badge,
  tagBg,
  tagCls,
  discountBg,
  disCls,
}) => {
  return (
    <Fragment>
      <div className="position-absolute top-0 start-0 ">
        {discount && badge ? (
          <div className="d-flex gap-1 flex-column">
            <FreshBadge
              content={badge}
              bg={tagBg}
              pill={false}
              className={tagCls}
            />

            <FreshBadge
              content={`${discount}%`}
              bg={discountBg}
              pill={false}
              className={disCls}
            />
          </div>
        ) : !discount && badge ? (
          <FreshBadge
            content={badge}
            text={tagCls}
            bg={tagBg}
            pill={false}
            className={disCls}
          />
        ) : discount && !badge ? (
          <FreshBadge
            content={`${discount}%`}
            bg={discountBg}
            pill={false}
            className={disCls}
          />
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};

export default ProductBadge;
