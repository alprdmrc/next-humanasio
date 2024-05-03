"use client";
import React from "react";
import Context from "@/context/Context";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import TermsPolicy from "@/components/TermsPolicy/TermsPolicy";

const TermsPolicyPage = () => {
  return (
    <>
      <main className="page-wrapper">
        <Context>
          <Header
            headerTransparent="header-not-transparent"
            headerSticky="header-sticky"
            btnClass="btn-small round"
          />
          <PopupMobileMenu />

          <TermsPolicy />
        </Context>
      </main>
    </>
  );
};

export default TermsPolicyPage;
