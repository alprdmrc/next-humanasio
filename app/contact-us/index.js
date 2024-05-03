"use client";
import React from "react";

import ContactUs from "@/components/ContactUs/ContactUs";
import Context from "@/context/Context";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import Header from "@/components/Header/Header";

import Copyright from "@/components/Footer/Copyright";
import Footer from "@/components/Footer/Footer";

const ContactUsPage = ({ footerContent }) => {
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
          <ContactUs />
          <Footer footerContent={footerContent.data.attributes} />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default ContactUsPage;
