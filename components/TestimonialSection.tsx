import Link from "next/link";
import React from "react";

const TestimonialSection = () => {
  return (
    <section id="testimonial" className="testimonial-area pt-200">
      <div
        className="testimonial-bg bg_cover"
        style={{ background: "url(/images/img-6.jpg)" }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-8">
            <div className="testimonial-content">
              <div className="testimonial-active">
                <div className="single-testimonial">
                  <i className="lni-quotation"></i>
                  <p
                    className="mb-30 text-white "
                    style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                  >
                    Pengalaman belanja saya di toko ini sungguh luar biasa!
                    Mereka tidak hanya menyediakan produk furniture berkualitas
                    tinggi, tetapi juga memberikan layanan pelanggan yang luar
                    biasa. Saya sangat senang dengan hasil akhirnya dan tidak
                    ragu untuk merekomendasikan toko ini kepada teman dan
                    keluarga.
                  </p>
                  <h6 className="title text-white">Pembeli Dari Kudus</h6>
                  <span>- Pengusaha</span>
                </div>
                <div className="single-testimonial">
                  <i className="lni-quotation"></i>
                  <p className="mb-30 text-white">
                    Saya sudah menjadi pelanggan setia toko ini selama
                    bertahun-tahun, dan saya tidak pernah kecewa dengan
                    pelayanan dan produk yang mereka tawarkan. Mereka selalu
                    memberikan solusi yang tepat untuk kebutuhan furnitur saya,
                    dan hasilnya selalu melebihi harapan saya. Terima kasih atas
                    pengalaman belanja yang memuaskan!
                  </p>
                  <h6 className="title text-white">Pembeli Dari Jepara</h6>
                  <span>- Pengrajin Ukiran</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-4">
            <div className="testimonial-play text-right d-none d-md-block">
              {/* <Link className="Video-popup" href="#">
                <i className="lni-play"></i>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
