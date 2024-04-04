import Split from "@/components/Split/Split";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const How = ({ howSection }) => {
  console.log("howSection", howSection);
  return (
    <>
      <div
        className="section-title text-center"
        data-sal="slide-up"
        data-sal-duration="700"
        data-sal-delay="100"
      >
        <h4 className="subtitle">
          <span className="theme-gradient">HOW?</span>
        </h4>
      </div>
      {howSection.map((step, index) => (
        <Split key={index}>
          <div
            className={`${
              index % 2 === 0 && "flex-row-reverse"
            } row g-0 radius-10 align-items-center`}
          >
            <div className="col-lg-12 col-xl-6 col-12">
              <div className="thumbnail">
                {step.image.data.attributes.mime.includes("image") && (
                  <Image
                    width={1217}
                    height={1100}
                    className="radius"
                    src={
                      process.env.NEXT_PUBLIC_STRAPI_API_URL +
                      step.image.data.attributes.url
                    }
                    alt={step.image.data.attributes.name}
                  />
                )}
                {step.image.data.attributes.mime.includes("video") && (
                  <video
                    width="650"
                    height="589"
                    controls={false}
                    autoPlay
                    muted
                    loop
                    preload
                    className="radius"
                  >
                    <source
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_API_URL +
                        step.image.data.attributes.url
                      }
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
            <div className="col-lg-12 col-xl-6 col-12">
              <div className="split-inner">
                <h4
                  className="subtitle"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="300"
                >
                  <span className="theme-gradient">{step.header}</span>
                </h4>
                <h4
                  className="title"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="200"
                >
                  {step.title}
                </h4>
                <p
                  className="description"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="300"
                >
                  {step.description}
                </p>
                {/* <ul
                  className="split-list"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="350"
                >
                  <li>- Craft Articles in Under 20 Seconds.</li>
                  <li>- Reclaim Hundreds of Valuable Hours with AI</li>
                  <li>- Elevate Copywriting with Rewriter.</li>
                </ul> */}
                <div
                  className="view-more-button mt--35"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="400"
                >
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_STRAPI_API_URL +
                      step.logo.data.attributes.url
                    }
                    width={250}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </Split>
      ))}
    </>
  );
};

export default How;
