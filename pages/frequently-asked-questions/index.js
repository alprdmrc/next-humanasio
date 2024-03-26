import FAQ from "@/components/FAQ/FAQ";
import Context from "@/context/Context";
import React from "react";
import PageHead from "../Head";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";

const FAQPage = () => {
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
          <FAQ />
        </Context>
      </main>
    </>
  );
};

export default FAQPage;
