import OurSciencesPage from "./index";

export const metadata = {
  title: "Our Sciences - Humanas",
  description: "Our Sciences - Humanas",
};

const OurSciencesPageLayout = async () => {
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

  const ourSciencesApiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/humanasio-our-sciences-page?populate=*`;
  const ourSciencesRes = await fetch(ourSciencesApiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
    next: { revalidate: 3600 },
  });
  const ourSciencesContent = await ourSciencesRes.json();
  return (
    <>
      <OurSciencesPage
        footerContent={footerContent}
        ourSciencesContent={ourSciencesContent}
      />
    </>
  );
};

export default OurSciencesPageLayout;
