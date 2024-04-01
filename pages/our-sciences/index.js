import FAQ from "@/components/FAQ/FAQ";
import Context from "@/context/Context";
import React from "react";
import PageHead from "../Head";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import OurSciences from "@/components/OurSciences/OurSciences";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";

const OurSciencesPage = () => {
  return (
    <>
      <PageHead title="Our Sciences" />
      <main className="page-wrapper">
        <Context>
          <Header
            headerTransparent="header-not-transparent"
            headerSticky="header-sticky"
            btnClass="btn-small round"
          />
          <PopupMobileMenu />
          <OurSciences />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default OurSciencesPage;
