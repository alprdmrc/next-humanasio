import HomePage from "./index";

const HomePageLayout = async () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/humanasio-home-page?populate[HowSection][populate]=*&populate[WhySection][populate]=*`;
  const res = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
    next: { revalidate: 3600 },
  });
  const homeContent = await res.json();

  const footerApiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/humanasio-footer?populate[menuItem][populate]=*`;
  const footerRes = await fetch(footerApiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
    next: { revalidate: 3600 },
  });
  const footerContent = await footerRes.json();

  if (!res.ok) {
    throw new Error(`Failed to fetch data`);
  }
  return (
    <>
      <HomePage homeContent={homeContent} footerContent={footerContent} />
    </>
  );
};

export default HomePageLayout;
