"use client";

import React, { useState, useEffect } from "react";

import { remark } from "remark";
import html from "remark-html";

const ScienceRow = ({ science }) => {
  const [description, setDescription] = useState("");
  const getMarkdown = async () => {
    try {
      const processedDesc = await remark()
        .use(html)
        .process(science.description);
      setDescription(processedDesc.toString());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMarkdown();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div
            className="section-title "
            data-sal="slide-up"
            data-sal-duration="200"
            data-sal-delay="100"
          >
            <h4 className="subtitle">
              <span className="theme-gradient">{science.gradientTitle}</span>
            </h4>
            <h3 className="title w-600 mb--20">{science.title}</h3>
            <p
              className="description b1"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
        <div className="separator-animated animated-true mt--50 mb--50"></div>
      </div>
    </>
  );
};

export default ScienceRow;
