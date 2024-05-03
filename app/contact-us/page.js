import React from "react";
import ContactUsPage from "./index";

export const metadata = {
  title: "Contact Us - Humanas",
  description: "Contact Us - Humanas",
};

const ContactUsLayout = async () => {
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
      <ContactUsPage footerContent={footerContent} />
    </>
  );
};

export default ContactUsLayout;
