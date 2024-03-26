import React from "react";

import Testimonial from "@/components/Testimonial/Testimonial";
import Context from "@/context/Context";

import PageHead from "../Head";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";

const TestimonialPage = () => {
  return (
    <>
      <PageHead title="F.A.Q." />
      <main className="page-wrapper">
        <Context>
          <Header
            headerTransparent="header-not-transparent"
            headerSticky="header-sticky"
            btnClass="btn-small round"
          />
          <PopupMobileMenu />
          <Testimonial />
        </Context>
      </main>
    </>
  );
};

export default TestimonialPage;
