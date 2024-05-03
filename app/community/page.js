import CommunityPage from "./index";

export const metadata = {
  title: "Community - Humanas",
  description: "Community - Humanas",
};

const CommunityLayout = async () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/humanasio-community-page?populate[humanasTeam][populate]=*&populate[hrProfessionals][populate]=*&populate[candidates][populate]=*`;
  const res = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
    next: { revalidate: 3600 },
  });
  const communityContent = await res.json();

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
  return (
    <>
      <CommunityPage
        communityContent={communityContent}
        footerContent={footerContent}
      />
    </>
  );
};

export default CommunityLayout;
