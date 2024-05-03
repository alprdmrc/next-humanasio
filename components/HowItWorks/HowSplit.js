import Image from "next/image";
import Link from "next/link";

const HowSplit = ({ step, reverse }) => {
  return (
    <>
      <div className="rainbow-split-area rainbow-section-gap">
        <div className="container">
          <div className="rainbow-splite-style">
            <div className="split-wrapper">
              <div
                className={`row g-0 radius-10 align-items-center d-flex ${
                  reverse && "flex-row-reverse"
                }`}
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
                      data-sal-delay="200"
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
                    <ul
                      className="split-list"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="450"
                    >
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_STRAPI_API_URL +
                          step.logo.data.attributes.url
                        }
                        width={250}
                        height={50}
                        alt="How"
                      />
                    </ul>
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
                    {/* <div
                      className="view-more-button mt--35"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="400"
                    >
                      <Link className="btn-default" href="/contact">
                        Contact With Us
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowSplit;
