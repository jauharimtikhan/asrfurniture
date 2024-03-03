import Image from "next/image";
import Link from "next/link";
import React from "react";

const DiscountComponents = () => {
  return (
    <section id="discount-product" className="discount-product pt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="single-discount-product mt-30">
              <div className="product-image">
                <Image
                  width={300}
                  height={300}
                  src="/assets/images/discount-product/product-1.jpg"
                  alt="Product"
                />
              </div>
              <div className="product-content">
                <h4 className="content-title mb-15">
                  Kualitas Terbaik <br /> Untuk Rumah Anda
                </h4>
                <Link href="#product">
                  Lihat Koleksi Produk <i className="lni-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single-discount-product mt-30">
              <div className="product-image">
                <Image
                  width={300}
                  height={300}
                  src="/assets/images/discount-product/product-2.jpg"
                  alt="Product"
                />
              </div>
              <div className="product-content">
                <h4 className="content-title mb-15">
                  Ada Promo Terbaik
                  <br /> Diskon up to 60%
                </h4>
                <Link href="#product">
                  Lihat Koleksi Produk <i className="lni-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountComponents;
