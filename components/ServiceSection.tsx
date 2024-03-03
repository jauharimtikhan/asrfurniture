import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceSection = () => {
  return (
    <section id="service" className="services-area pt-30 pb-80 w-full">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title pb-30">
              <h5 className="mb-15">Pelayanan Kami</h5>
              <h3 className="title mb-15">Wujudkan Impian Anda</h3>
              <p className="text-primary-color">
                Toko kami bangga menyediakan layanan dan produk berkualitas
                terbaik untuk setiap pelanggan. Dengan pengalaman bertahun-tahun
                dalam industri ini dan reputasi yang kuat untuk kejujuran dan
                keandalan, kami berkomitmen untuk memastikan kepuasan pelanggan
                setiap saat.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="services-left mt-45">
              <div className="services">
                <Image
                  width={500}
                  height={500}
                  className="img-fluid"
                  src="/images/img-7.jpg"
                  alt=""
                />
                <Link
                  href={`${process.env.NEXT_PUBLIC_WHATSAPP}`}
                  className="main-btn mt-30"
                >
                  Hubungi Kami <i className="lni-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="services-right mt-45">
              <div className="row justify-content-center">
                <div className="col-md-6 col-sm-8">
                  <div className="single-services text-center">
                    <div className="services-icon">
                      <i className="lni-grid-alt"></i>
                    </div>
                    <div className="services-content mt-20">
                      <h5 className="title mb-10">Furnitur</h5>
                      <p className="text-primary-color">
                        Produk kami jamin 100% dengan kualitas terbaik
                      </p>
                    </div>
                  </div>

                  <div className="single-services text-center mt-30">
                    <div className="services-icon">
                      <i className="lni-ruler-pencil"></i>
                    </div>
                    <div className="services-content mt-20">
                      <h5 className="title mb-10">Dekorasi</h5>
                      <p className="text-primary-color">
                        Kami juga melayani pembuatan dekorasi rumah bisa
                        request. Silahkan Hubungi kami untuk info lebih lengkap
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-8">
                  <div className="single-services text-center mt-30">
                    <div className="services-icon">
                      <i className="lni-customer"></i>
                    </div>
                    <div className="services-content mt-20">
                      <h5 className="title mb-10">Pelayanan</h5>
                      <p className="text-primary-color">
                        Pelayanan kami jamin amanah dan terpercaya
                      </p>
                    </div>
                  </div>

                  <div className="single-services text-center mt-30">
                    <div className="services-icon">
                      <i className="lni-support"></i>
                    </div>
                    <div className="services-content mt-20">
                      <h5 className="title mb-10">Kustom Pesanan</h5>
                      <p className="text-primary-color">
                        Anda bisa kustom pesanan sesuai kebutuhan anda, jangan
                        ragu untuk menghubungi pihak kami
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
