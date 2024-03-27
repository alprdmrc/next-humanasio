import Split from "@/components/Split/Split";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import splitImg from "../../public/images/split/split-8.png";
import HowData from "../../data/home.json";
const How = () => {
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
      {HowData.how.map((step, index) => (
        <Split key={index}>
          <div
            className={`${
              index % 2 === 0 && "flex-row-reverse"
            } row g-0 radius-10 align-items-center`}
          >
            <div className="col-lg-12 col-xl-6 col-12">
              <div className="thumbnail">
                {step.image && (
                  <Image
                    width={1217}
                    height={1100}
                    className="radius"
                    src={step.image}
                    alt="split Images"
                  />
                )}
                {step.video && (
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
                    <source src={step.video} type="video/mp4" />
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
                  {step.desc}
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
                  <Link className="btn-default" href="/contact">
                    Contact With Us
                  </Link>
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
