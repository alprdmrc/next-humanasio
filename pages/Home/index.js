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

export async function getStaticProps() {
  const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/humanasio-home-page?populate[HowSection][populate]=*&populate[WhySection][populate]=*`;
  try {
    const res = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch, status: ${res.status}`);
    }
    const homePageContent = await res.json();
    console.log("Response--Home", homePageContent);
    return {
      props: {
        homePageContent,
      },
    };
  } catch (error) {
    console.error("Fetching error:", error.message);
    return {
      props: {
        homePageContent: {},
      },
    };
  }
}

export default function HomePage({ homePageContent }) {
  console.log("Home Component", homePageContent);
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
          <Service whySection={homePageContent.data.attributes.WhySection} />
          <Separator top={true} />
          {/* <Timeline />
          <Separator top={false} /> */}
          <How howSection={homePageContent.data.attributes.HowSection} />
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
}
