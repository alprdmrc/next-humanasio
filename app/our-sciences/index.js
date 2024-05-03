"use client";

import Context from "@/context/Context";
import Copyright from "@/components/Footer/Copyright";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import OurSciences from "@/components/OurSciences/OurSciences";

const OurSciencesPage = ({ ourSciencesContent, footerContent }) => {
  return (
    <>
      <main className="page-wrapper">
        <Context>
          {/* <HeaderTop /> */}
          <Header
            headerTransparent="header-not-transparent"
            headerSticky="header-sticky"
            btnClass="btn-small round"
          />
          <PopupMobileMenu />
          <OurSciences
            ourSciencesContent={ourSciencesContent.data.attributes}
          />
          {/* <Separator top={false} /> */}

          {/* <Separator top={true} /> */}
          <Footer footerContent={footerContent.data.attributes} />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default OurSciencesPage;
