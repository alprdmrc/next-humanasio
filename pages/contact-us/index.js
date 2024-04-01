import React from "react";

import ContactUs from "@/components/ContactUs/ContactUs";
import Context from "@/context/Context";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import Header from "@/components/Header/Header";

import PageHead from "../../pages/Head";
import Copyright from "@/components/Footer/Copyright";
import Footer from "@/components/Footer/Footer";

const ContactUsPage = () => {
  return (
    <>
      <PageHead title="Profile Details" />

      <main className="page-wrapper">
        <Context>
          <Header display="d-none" />
          <PopupMobileMenu />

          <ContactUs />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default ContactUsPage;
