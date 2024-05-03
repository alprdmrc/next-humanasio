"use client";

import React, { useEffect } from "react";

import sal from "sal.js";

import WhyCard from "./WhyCard";

const WhyHumanas = ({ whySectionContent }) => {
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
                  <span className="theme-gradient">WHY?</span>
                </h4>
                <h2 className="title w-600 mb--20">
                  Connect with People from all around the world!
                </h2>
                <p className="description b1">
                  Join the Humanas Community and enjoy its benefits
                </p>
              </div>
            </div>
          </div>

          <div className="row row--15 service-wrapper">
            <WhyCard whySectionContent={whySectionContent} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyHumanas;
