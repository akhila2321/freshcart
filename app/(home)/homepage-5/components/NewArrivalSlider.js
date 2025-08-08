// import node module libraries
import Slider from "react-slick";

// import requied data file
import { newArrivalSetting } from "data/SliderSettings";
import { products } from "data/products/AllProductsData";

// import custom components
import ProductCardSix from "components/cards/ProductCardSix";

// import helper utility file
import { filterProductsByTag } from "helper/utils";

const NewArrivalSlider = () => {
  return (
    <div className="mb-12 product-content">
      <div className="mb-6">
        <h3 className="mb-0">New Arrivals</h3>
      </div>

      <Slider {...newArrivalSetting} className="product-slider-four-column">
        {filterProductsByTag(products, "new-arrival").map((product) => (
          <div className="item" key={product.id}>
            <ProductCardSix product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivalSlider;
