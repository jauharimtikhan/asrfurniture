import React from "react";
import Navbar from "./Navbar";
import BannerSection from "../BannerSection";
import DiscountComponents from "../DiscountComponents";
import ProductCardComponents from "../ProductCardComponents";
import ServiceSection from "../ServiceSection";
import ShowcaseComponents from "../ShowcaseComponents";
import TestimonialSection from "../TestimonialSection";
import BlogSection from "../BlogSection";
import ContactSection from "../ContactSection";
import Footer from "./Footer";
import Link from "next/link";

const main = () => {
  return (
    <>
      <Navbar />
      <BannerSection />
      <DiscountComponents />
      <ProductCardComponents />
      <ServiceSection />
      <ShowcaseComponents />
      <TestimonialSection />
      {/* <BlogSection /> */}
      <ContactSection />
      <Footer />
      <Link href="#" className="back-to-top">
        <i className="lni-chevron-up"></i>
      </Link>
    </>
  );
};

export default main;
