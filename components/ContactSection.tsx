import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-area pt-115">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="contact-title text-center">
              <h2 className="title">Hubungi Kami</h2>
            </div>
          </div>
        </div>
        <div className="contact-box mt-70">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-info pt-25">
                <h4 className="info-title">Infomasi Kontak Kami</h4>
                <ul>
                  <li>
                    <div className="single-info mt-30">
                      <div className="info-icon">
                        <i className="lni-phone-handset"></i>
                      </div>
                      <div className="info-content">
                        <p className="text-primary-color">+62 877-3892-0176</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-info mt-30">
                      <div className="info-icon">
                        <i className="lni-envelope"></i>
                      </div>
                      <div className="info-content">
                        <p className="text-primary-color">
                          admin@asrfurniture.shop
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-info mt-30">
                      <div className="info-icon">
                        <i className="lni-home"></i>
                      </div>
                      <div className="info-content">
                        <p className="text-primary-color">
                          Jl. Dusun Gemenggeng, RT.01 RW11, Gemenggeng, Ngrapah,
                          Kec. Banyubiru, Kabupaten Semarang, Jawa Tengah 50664
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-form">
                <form
                  id="contact-form"
                  action="assets/contact.php"
                  method="post"
                  data-toggle="validator"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="single-form form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Masukan Nama Lengkap Anda"
                          data-error="Wajib Diisi!."
                          required
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-form form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Masukan Email Anda"
                          data-error="Wajib Diisi!."
                          required
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single-form form-group">
                        <textarea
                          name="message"
                          placeholder="Masukan Pesan Anda"
                          data-error="Wajib Diisi!."
                          required
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <p className="form-message"></p>
                    <div className="col-lg-12">
                      <div className="single-form form-group">
                        <button className="main-btn rounded" type="submit">
                          Kirim Pesan
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
