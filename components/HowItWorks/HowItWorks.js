import HowSplit from "./HowSplit";

const HowItWorks = ({ howSectionContent }) => {
  return (
    <>
      <div className="rainbow-service-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">HOW?</span>
                </h4>
                {/* <h2 className="title w-600 mb--20">
                  Connect with People from all around the world!
                </h2>
                <p className="description b1">
                  Join the Humanas Community and enjoy its benefits
                </p> */}
              </div>
            </div>
          </div>

          <div className="row row--15 service-wrapper">
            {howSectionContent.map((step, index) => (
              <HowSplit key={index} reverse={index % 2 == 1} step={step} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
