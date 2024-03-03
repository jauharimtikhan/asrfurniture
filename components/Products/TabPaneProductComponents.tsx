import React from "react";
import Product from "./Product";

const TabPaneProductComponents = () => {
  return (
    <div className="col-lg-9 col-md-8">
      <div className="tab-content" id="v-pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="v-pills-furniture"
          role="tabpanel"
          aria-labelledby="v-pills-furniture-tab"
        >
          <div className="product-items mt-30">
            <div className="row product-items-active">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabPaneProductComponents;
