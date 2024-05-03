"use client";

import Context from "@/context/Context";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";
import Community from "@/components/Community/Community";

export default function CommunityPage({ communityContent, footerContent }) {
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

          <Community communityContent={communityContent.data.attributes} />

          <Footer footerContent={footerContent.data.attributes} />
          <Copyright />
        </Context>
      </main>
    </>
  );
}
