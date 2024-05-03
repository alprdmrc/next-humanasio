"use client";

import Header from "@/components/Header/Header";
import HeaderTop from "@/components/Header/HeaderTop/Header-Top";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import Home from "@/components/Home/Home";
import WhyHumanas from "@/components/WhyHumanas/WhyHumanas";
import Service from "@/components/Service/Service";
import Context from "@/context/Context";
import Separator from "../separator";
import Timeline from "@/components/Timeline/Timeline";
import Split from "@/components/Split/Split";
import Pricing from "@/components/Pricing/Pricing";
import Accordion from "@/components/Accordion/Accordion";
import Brands from "@/components/Brands/Brands";
import CallToAction from "@/components/CallToAction/CallToAction";
import Footer from "@/components/Footer/Footer";
import Copyright from "@/components/Footer/Copyright";
import HowItWorks from "@/components/HowItWorks/HowItWorks";

const HomePage = ({ homeContent, footerContent }) => {
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

          <Home />
          <WhyHumanas
            whySectionContent={homeContent.data.attributes.WhySection}
          />
          <Separator top={true} />
          <HowItWorks
            howSectionContent={homeContent.data.attributes.HowSection}
          />
          {/* <Service /> */}
          {/* <Separator top={true} /> */}
          {/* <Timeline /> */}
          {/* <Separator top={false} /> */}
          {/* <Split /> */}
          {/* <Separator top={true} /> */}
          {/* <Pricing /> */}
          {/* <Separator top={true} /> */}
          {/* <Accordion isHead={true} /> */}
          {/* <Separator top={false} /> */}
          {/* <Brands /> */}
          {/* <Separator top={true} /> */}
          {/* <CallToAction /> */}

          <Footer footerContent={footerContent.data.attributes} />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default HomePage;
