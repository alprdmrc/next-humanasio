import Header from "@/components/Header/Header";
import HeaderTop from "@/components/Header/HeaderTop/Header-Top";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import Home from "@/components/Home/Home";
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
import PageHead from "../Head";
import How from "../How";
import Testimonial from "@/components/Testimonial/Testimonial";
import Trigger from "@/components/Trigger/Trigger";

const HomePage = () => {
  return (
    <>
      <PageHead title="Home" />

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
          {/* <Brands /> */}
          {/* <Separator top={false} /> */}
          <Service />
          <Separator top={true} />
          {/* <Timeline />
          <Separator top={false} /> */}
          <How />
          {/* <Separator top={false} /> */}
          {/* <Pricing />
          <Separator top={true} /> */}
          {/* <Accordion isHead={true} /> */}
          {/* <Separator top={false} /> */}

          {/* <Testimonial /> */}
          {/* <CallToAction /> */}

          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default HomePage;
