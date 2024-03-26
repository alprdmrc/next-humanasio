import React, { useEffect } from "react";
import sal from "sal.js";

import PricingData from "../../data/home.json";
import SinglePrice from "./PricingProps/SinglePrice";
import Compare from "./Compare";

const PricingTwo = ({
  parentClass,
  childClass,
  start,
  end,
  isHeading,
  gap,
}) => {
  useEffect(() => {
    sal();

    const cards = document.querySelectorAll(".bg-flashlight");

    cards.forEach((bgflashlight) => {
      bgflashlight.onmousemove = function (e) {
        let x = e.pageX - bgflashlight.offsetLeft;
        let y = e.pageY - bgflashlight.offsetTop;

        bgflashlight.style.setProperty("--x", x + "px");
        bgflashlight.style.setProperty("--y", y + "px");
      };
    });
  }, []);

  return (
    <>
      <div className="main-content">
        <div
          className={`rainbow-pricing-area ${
            gap ? "rainbow-section-gap rainbow-section-gapTop-big" : ""
          }`}
        >
          <div className="container">
            <div className="wrapper">
              <div className="row">
                <div className="col-lg-12">
                  {isHeading ? (
                    <div
                      className="section-title text-center"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="150"
                    >
                      <h4 className="subtitle">
                        <span className="theme-gradient">
                          Humanas Community
                        </span>
                      </h4>
                      <h2 className="title w-600 mb--20">Together Stronger</h2>
                      <p className="description b1">
                        Humanas Team, HR Professionals and Candidates are three
                        main components of our Community. We believe a happy
                        work environment is crucial for a happy life. So we are.
                      </p>
                    </div>
                  ) : (
                    ""
                  )}

                  <nav className="chatenai-tab">
                    <div
                      className="tab-btn-grp nav nav-tabs mb-3 text-center justify-content-center"
                      id="nav-tab"
                      role="tablist"
                    >
                      <button
                        className="nav-link active"
                        id="nav-team-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-team"
                        type="button"
                        role="tab"
                        aria-controls="nav-team"
                        aria-selected="true"
                      >
                        Humanas Team
                      </button>
                      <button
                        className="nav-link"
                        id="nav-hrs-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-hrs"
                        type="button"
                        role="tab"
                        aria-controls="nav-hrs"
                        aria-selected="true"
                      >
                        HR Professionals
                      </button>
                      <button
                        className="nav-link"
                        id="nav-cands-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-cands"
                        type="button"
                        role="tab"
                        aria-controls="nav-cands"
                        aria-selected="false"
                      >
                        Candidates
                        {/* <span className="rainbow-badge-card badge-border">
                          20% Off
                        </span> */}
                      </button>
                    </div>
                  </nav>
                </div>
              </div>

              <div className={childClass} id="nav-tabContent">
                <div
                  className="tab-pane fade active show"
                  id="nav-team"
                  role="tabpanel"
                  aria-labelledby="nav-team-tab"
                >
                  <div className="row row--15 mt_dec--30">
                    {PricingData &&
                      PricingData.team
                        .slice(start, end)
                        .map((data, index) => (
                          <SinglePrice
                            {...data}
                            data={data}
                            key={index}
                            parentClass={parentClass}
                            incresePrice={false}
                          />
                        ))}
                  </div>
                </div>
                <div
                  className="tab-pane fade show"
                  id="nav-hrs"
                  role="tabpanel"
                  aria-labelledby="nav-hrs-tab"
                >
                  <div className="row row--15 mt_dec--30">
                    {PricingData &&
                      PricingData.pricing
                        .slice(start, end)
                        .map((data, index) => (
                          <SinglePrice
                            {...data}
                            data={data}
                            key={index}
                            parentClass={parentClass}
                            incresePrice={false}
                          />
                        ))}
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="nav-cands"
                  role="tabpanel"
                  aria-labelledby="nav-cands-tab"
                >
                  <div className="row row--15">
                    {PricingData &&
                      PricingData.pricing
                        .slice(start, end)
                        .map((data, index) => (
                          <SinglePrice
                            {...data}
                            data={data}
                            key={index}
                            parentClass={parentClass}
                            incresePrice={true}
                          />
                        ))}
                  </div>
                </div>
              </div>
            </div>
            <Compare />
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingTwo;
