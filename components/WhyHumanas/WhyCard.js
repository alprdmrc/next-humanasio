"use client";

import Link from "next/link";
import React, { useEffect } from "react";

import sal from "sal.js";

const WhyCard = ({ whySectionContent }) => {
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
      {whySectionContent &&
        whySectionContent.map((data, index) => (
          <div
            className="col-lg-3 col-md-6 col-sm-6 col-12"
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-delay={200}
            key={index}
          >
            <div className="service service__style--1 bg-color-blackest radius mt--25 text-center rbt-border-none variation-4 bg-flashlight">
              <div className="icon">
                <i className={`feather-${data.icon}`}></i>
              </div>
              <div className="content">
                <h4 className="title w-600">
                  <Link href="#">{data.title}</Link>
                </h4>
                <p className="description b1 color-gray mb--0">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default WhyCard;
