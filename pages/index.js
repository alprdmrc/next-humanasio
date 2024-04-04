import HomePage from "./Home";
import BackToTop from "./backToTop";

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

export default function Home(props) {
  return (
    <>
      <HomePage homePageContent={props.homePageContent} />
      <BackToTop />
    </>
  );
}
