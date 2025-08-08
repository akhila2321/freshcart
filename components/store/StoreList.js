// import node module libraries
import React, { Fragment } from "react";

// import custom components
import StoreCard from "components/cards/StoreCard";
import StoreCard2 from "components/cards/StoreCard2";

const StoreList = ({ stores, variant = 0 }) => {
  return (
    <Fragment>
      {variant === 0
        ? stores.map((store, index) => (
          <StoreCard storeDetails={store} key={index} />
        ))
        : variant === 1
          ? stores.map((store, index) => (
            <StoreCard2 storeDetails={store} key={index} />
          ))
          : ""}
    </Fragment>
  );
};

export default StoreList;
