import React from "react";
import ProductLinks from "./Products/ProductLinks";
import TabPaneProductComponents from "./Products/TabPaneProductComponents";

const ProductCardComponents = () => {
  return (
    <section id="product" className="product-area pt-100 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="collection-menu text-center mt-30">
              <h4 className="collection-tilte text-break">Koleksi Produk</h4>
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <ProductLinks
                  link="v-pills-furniture"
                  linkText="Furnitur Rumah"
                  IsActive={true}
                  AriaControl="v-pills-furniture"
                  Id="v-pills-furniture-tab"
                  IdSelected={true}
                />
              </div>
            </div>
          </div>
          <TabPaneProductComponents />
        </div>
      </div>
    </section>
  );
};

export default ProductCardComponents;
