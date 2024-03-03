import Image from "next/image";
import Link from "next/link";
import React from "react";

const BannerSection = () => {
  return (
    <section id="home" className="slider-area pt-30 mt-3">
      <div className="container-fluid position-relative">
        <div className="slider-active">
          <div className="single-slider">
            <div className="slider-bg">
              <div className="row no-gutters align-items-center ">
                <div className="col-lg-4 col-md-5">
                  <div className="slider-product-image d-none d-md-block">
                    <Image
                      src="/images/img-1.jpg"
                      alt="Slider"
                      width={`500`}
                      height={`500`}
                    />
                  </div>
                </div>
                <div className="col-lg-8 col-md-7">
                  <div className="slider-product-content">
                    <h1
                      className="slider-title mb-10"
                      data-animation="fadeInUp"
                      data-delay="0.3s"
                    >
                      Partisi Dinding
                    </h1>
                    <p
                      className="mb-25 text-primary"
                      data-animation="fadeInUp"
                      data-delay="0.9s"
                    >
                      Tambahkan sentuhan elegan dan fungsional ke dalam ruangan
                      Anda dengan partisi dinding kami yang indah. Dengan desain
                      yang menawan dan kualitas yang prima, partisi dinding kami
                      tidak hanya membagi ruang secara visual, tetapi juga
                      menghadirkan elemen dekoratif yang menarik.
                    </p>
                    <Link
                      className="main-btn"
                      href={`${process.env.NEXT_PUBLIC_WHATSAPP}`}
                      data-animation="fadeInUp"
                      data-delay="1.5s"
                      target="_blank"
                    >
                      Pesan Sekarang <i className="lni-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="single-slider">
            <div className="slider-bg">
              <div className="row no-gutters align-items-center">
                <div className="col-lg-4 col-md-5">
                  <div className="slider-product-image d-none d-md-block">
                    <Image
                      width={500}
                      height={500}
                      src="/images/img-2.jpg"
                      alt="Slider"
                    />
                  </div>
                </div>
                <div className="col-lg-8 col-md-7">
                  <div className="slider-product-content">
                    <h1
                      className="slider-title mb-10"
                      data-animation="fadeInUp"
                      data-delay="0.3s"
                    >
                      Lemari Pakaian
                    </h1>
                    <p
                      className="mb-25"
                      data-animation="fadeInUp"
                      data-delay="0.9s"
                    >
                      Transformasikan ruang berantakan Anda menjadi sebuah oase
                      rapi dan bergaya dengan lemari pakaian istimewa kami!
                      Dibuat dengan keahlian tinggi dan perhatian terhadap
                      detail, lemari pakaian kami menawarkan kombinasi sempurna
                      antara fungsionalitas dan estetika yang menawan.
                    </p>
                    <Link
                      className="main-btn"
                      href={`${process.env.NEXT_PUBLIC_WHATSAPP}`}
                      data-animation="fadeInUp"
                      data-delay="1.5s"
                    >
                      Pesan Sekarang<i className="lni-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="single-slider">
            <div className="slider-bg">
              <div className="row no-gutters align-items-center">
                <div className="col-lg-4 col-md-5">
                  <div className="slider-product-image d-none d-md-block">
                    <Image
                      src="/images/img-3.jpg"
                      alt="Slider"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div className="col-lg-8 col-md-7">
                  <div className="slider-product-content">
                    <h1
                      className="slider-title mb-10"
                      data-animation="fadeInUp"
                      data-delay="0.3s"
                    >
                      Nakas
                    </h1>
                    <p
                      className="mb-25"
                      data-animation="fadeInUp"
                      data-delay="0.9s"
                    >
                      Nakas kami tidak hanya menawarkan penyimpanan tambahan
                      untuk keperluan sehari-hari Anda seperti buku, lampu
                      tidur, atau barang-barang pribadi lainnya, tetapi juga
                      menjadi sentuhan dekoratif yang mempesona. Dibuat dengan
                      bahan berkualitas tinggi dan tangan yang terampil, nakas
                      kami menawarkan kombinasi yang sempurna antara keindahan
                      dan ketahanan.
                    </p>
                    <Link
                      className="main-btn"
                      href={`${process.env.NEXT_PUBLIC_WHATSAPP}`}
                      data-animation="fadeInUp"
                      data-delay="1.5s"
                    >
                      Pesan Sekarang <i className="lni-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-social">
          <div className="row justify-content-end">
            <div className="col-lg-7 col-md-6">
              <ul className="social text-right">
                <li>
                  <a href="#">
                    <i className="lni-facebook-filled"></i>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="lni-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
