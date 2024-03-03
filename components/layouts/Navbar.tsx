import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="header-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <Link className="navbar-brand d-flex align-items-center" href="/">
                <Image
                  src="/images/logoasr.png"
                  alt="logo"
                  width={30}
                  height={30}
                />
                <span className="h4 text-primary-color ml-3">
                  <b>ASR FURNITURE</b>
                </span>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="bar-icon"></span>
                <span className="bar-icon"></span>
                <span className="bar-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul id="nav" className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link data-scroll-nav="0" href="#home">
                      Beranda
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link data-scroll-nav="0" href="#product">
                      Produk
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link data-scroll-nav="0" href="#service">
                      Layanan
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link data-scroll-nav="0" href="#showcase">
                      Portfolio
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                    <Link data-scroll-nav="0" href="#blog">
                      Artikel
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link data-scroll-nav="0" href="#contact">
                      Kontak
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
