import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShowcaseComponents = () => {
  return (
    <section id="showcase" className="showcase-area pt-30 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="showcase-title pt-25">
              <h2 className="title">Beberapa Produk Unggulan Kami</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="showcase-title pt-25">
              <p className="text-primary-color">
                Kami hadir untuk memenuhi kebutuhan Anda. Kami menyediakan semua
                jenis furnitur rumah tangga.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="showcase-active mt-65">
              <div className="single-showcase">
                <Image
                  width={1090}
                  height={700}
                  src="/images/img-5.jpg"
                  className="rounded-full img-fluid"
                  alt="Testimonial"
                />
                <Link href="#" className="main-btn">
                  Detail
                </Link>
              </div>
              <div className="single-showcase">
                <Image
                  width={1090}
                  height={700}
                  src="/images/img-4.jpg"
                  className="rounded-full img-fluid"
                  alt="Testimonial"
                />
                <Link href="#" className="main-btn">
                  Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseComponents;
