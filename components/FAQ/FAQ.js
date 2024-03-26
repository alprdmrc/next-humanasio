import React, { useEffect } from "react";

import sal from "sal.js";

import AccordionData from "../../data/home.json";

const FAQ = () => {
  useEffect(() => {
    sal();
  }, []);
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
                  <span className="theme-gradient">F.A.Q.</span>
                </h4>
                <h2 className="title w-600 mb--20">
                  Frequently Asked Questions
                </h2>
                {/* <p className="description b1">
                  Join the Humanas Community and enjoy its benefits
                </p> */}
              </div>
            </div>
          </div>

          <div className="row row--15 service-wrapper">
            <div className="rainbow-accordion-style  accordion">
              <div className="accordion" id="accordionExamplea">
                {AccordionData &&
                  AccordionData.accordion.map((data, index) => (
                    <div
                      className="accordion-item card bg-flashlight"
                      key={index}
                    >
                      <h2
                        className="accordion-header card-header"
                        id={`heading${index + 1}`}
                      >
                        <button
                          className={`accordion-button ${
                            !data.isExpand ? "collapsed" : ""
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${index + 1}`}
                          aria-expanded={data.isExpand ? "true" : "false"}
                          aria-controls={`collapse${index + 1}`}
                        >
                          {data.title}
                        </button>
                      </h2>
                      <div
                        id={`collapse${index + 1}`}
                        className={`accordion-collapse collapse ${
                          data.isExpand ? "show" : ""
                        }`}
                        aria-labelledby={`heading${index + 1}`}
                        data-bs-parent="#accordionExamplea"
                      >
                        <div className="accordion-body card-body">
                          {data.desc}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
