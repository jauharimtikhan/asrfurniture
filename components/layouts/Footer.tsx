import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section id="footer" className="footer-area">
      <div className="container">
        <div className="footer-widget pt-75 pb-80">
          <div className="row">
            <div className="col-lg-3 col-md-5 col-sm-7">
              <div className="footer-logo mt-40">
                <a href="#">
                  <Image
                    src={"/images/logoasr.png"}
                    alt="Logo"
                    width={100}
                    height={100}
                  />
                </a>
                <p className="mt-10 text-primary-color">
                  Toko kami terpercaya, amanah, dan kualitas terjamin
                </p>
                <ul className="footer-social mt-25">
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
            <div className="col-lg-2 col-md-3 col-sm-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.575781026882!2d110.3931948744255!3d-7.289010771641173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7081526735745d%3A0xf274d5d43fda83fc!2sSahid%20Furniture!5e0!3m2!1sid!2sid!4v1709465063996!5m2!1sid!2sid"
                width="600"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="footer-copyright pt-15 pb-15">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright text-center">
                <p className="text-primary-color">
                  Design by{" "}
                  <a href="https://uideck.com" rel="nofollow">
                    <small>UIdeck</small>
                  </a>{" "}
                  &copy; {new Date().getFullYear()} All Rights Reserved
                </p>
                <p className="mt-0 text-primary-color">
                  Asr Furniture. Developed By{" "}
                  <Link href="#">Jauhar Imtikhan</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
