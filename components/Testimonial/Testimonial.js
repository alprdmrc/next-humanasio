import React, { useEffect } from "react";

import sal from "sal.js";

import AccordionData from "../../data/home.json";

import user from "../../public/images/team/team-01.jpg";
import Image from "next/image";

const Testimonial = () => {
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
                  <span className="theme-gradient">Testimonial</span>
                </h4>
                <h2 className="title w-600 mb--20">Reviews from clients</h2>
                {/* <p className="description b1">
                  Join the Humanas Community and enjoy its benefits
                </p> */}
              </div>
            </div>
          </div>

          <div className="row row--15 service-wrapper">
            <div className="accordion" id="accordionExamplea">
              {AccordionData &&
                AccordionData.testimonial.map((data, index) => (
                  <div
                    key={index}
                    data-sal="slide-up"
                    data-sal-duration="700"
                    data-sal-delay="100"
                    className="chat-box  bg-flashlight"
                  >
                    <div className="inner">
                      <div className="chat-section">
                        <div className="row chat-content">
                          <div className="col-lg-12 d-flex gap-4 mb--10">
                            <div className="author">
                              <Image
                                className="w-100"
                                src={user}
                                width={40}
                                height={40}
                                alt="Author"
                              />
                            </div>
                            <div>
                              <h6 className="mb--0">{data.name}</h6>
                              <span>
                                {data.title} / {data.company}
                              </span>
                            </div>
                          </div>
                          <p>{data.review}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
