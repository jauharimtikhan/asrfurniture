import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = () => {
  return (
    <div className="col-md-4">
      <div className="single-product-items">
        <div className="product-item-image">
          <Link href="#">
            <Image
              width={300}
              height={300}
              src="/assets/images/product/p-1.jpg"
              alt="Product"
              className="img-fluid"
            />
          </Link>
          <div className="product-discount-tag">
            <p>-60%</p>
          </div>
        </div>
        <div className="product-item-content text-center mt-30">
          <h5 className="product-title">
            <Link href="#">Kursi Santai</Link>
          </h5>
          <ul className="rating">
            <li>
              <i className="lni-star-filled"></i>
            </li>
            <li>
              <i className="lni-star-filled"></i>
            </li>
            <li>
              <i className="lni-star-filled"></i>
            </li>
            <li>
              <i className="lni-star-filled"></i>
            </li>
          </ul>
          <span className="regular-price">Rp. 500.000,00</span>
          <span className="discount-price">Rp. 900.000,00</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
