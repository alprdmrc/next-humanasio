"use client";

import React, { useEffect } from "react";

import sal from "sal.js";
import ScienceRow from "./ScienceRow";

const OurSciences = ({ ourSciencesContent }) => {
  useEffect(() => {
    sal();
  }, []);
  return (
    <>
      <div className="rainbow-service-area rainbow-section-gap">
        <div
          className="container"
          // data-sal="slide-up"
          // data-sal-duration="700"
          // data-sal-delay="100"
        >
          {ourSciencesContent.ourSciences.map((science, index) => (
            <ScienceRow science={science} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurSciences;
