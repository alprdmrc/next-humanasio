import React, { useEffect } from "react";

import sal from "sal.js";

const OurSciences = () => {
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
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title "
                // data-sal="slide-up"
                // data-sal-duration="700"
                // data-sal-delay="100"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">About Us</span>
                </h4>
                <h3 className="title w-600 mb--20">Humanas</h3>
                <p className="description b1">
                  We monitor and interpret human potential through the
                  applications we develop. Outputs are always at the user's
                  disposal!
                  <br />
                  We have been developing gamified educational applications
                  (Peki Games) since 2019. The motivation of the thousands of
                  students who used the apps and the results obtained have led
                  us to take bolder steps in the effort to “understand the human
                  being”.
                  <br />
                  At the end of 2022, our gamified career app “Lazy Guru” was
                  launched. We have made our scientific methods fun for a
                  happier career.
                  <br />
                  At the beginning of 2023, our journey started when both
                  projects converged under Humanas.
                </p>
              </div>
            </div>
            <div className="separator-animated animated-true mt--50 mb--50"></div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title "
                // data-sal="slide-up"
                // data-sal-duration="700"
                // data-sal-delay="100"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Our Science</span>
                </h4>
                <h3 className="title w-600 mb--20">
                  Sustainable, transparent, and fun!
                </h3>
                <p className="description b1">
                  Before dipping into our scientific solutions, let's take a
                  closer look at the problems we've raised and our assumptions
                  at Humanas.
                </p>
              </div>
            </div>
            <div className="separator-animated animated-true mt--50 mb--50"></div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title "
                // data-sal="slide-up"
                // data-sal-duration="700"
                // data-sal-delay="100"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">The Problem</span>
                </h4>
                <h3 className="title w-600 mb--20">
                  The age of (mis)information!
                </h3>
                <p className="description b1">
                  Humanas fundamentally focuses on education and career
                  problems. The main problems we all face today include:
                  <br />
                  The drastic increase in Labor Turnover Rates during the
                  post-pandemic period brought along problems for both companies
                  and employees.
                  <br />
                  The idea that personality tests (even the most reliable ones),
                  featuring uncontextual questions and are based on general
                  judgments, fail to meet current needs is gaining ground day by
                  day.
                  <br />
                  Are you truly aware of your potential? Let's just say so. Who
                  knows what you can do?
                  <br />
                  <br />
                  We will look at how we come up with solutions for all these
                  problems, but first let's get to the foundation of our claim.
                </p>
              </div>
            </div>
            <div className="separator-animated animated-true mt--50 mb--50"></div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title "
                // data-sal="slide-up"
                // data-sal-duration="700"
                // data-sal-delay="100"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Our Hypothesis</span>
                </h4>
                <h3 className="title w-600 mb--20">
                  Measurable, observable, falsifiable!
                </h3>
                <p className="description b1">
                  <h5 className="title mb--0">Gamification</h5>
                  The concept of "Gamification" lies at the foundation of the
                  scientific methods put forward by Humanas. We believe in the
                  necessity of gamification of all actions defined as work,
                  regardless of their type, size and scope. So much so that in
                  order to get rid of the stress driven by the modern age, we do
                  not regard making “tasks” fun as a choice, we believe it is
                  necessary for a happy and sustainable business life.
                  <br />
                  <br />
                  <h5 className="title mb--0">Human Potential</h5>
                  In our view, measuring the Type of Intelligence or Character
                  Trait alone will not yield accurate results to understand
                  human potential. To understand the potential, we have added
                  the motivation/orientation parameter to these measurements.
                  <br />
                  <br />
                  <h5 className="title mb--0">Human Transformation</h5>
                  The "Humanas Human-Type Algorithm", which we have created as a
                  result of our efforts to understand the human being, is being
                  built on the reality that humans are constantly changing and
                  transforming.
                  <br />
                  <br />
                  <h5 className="title mb--0">Currency</h5>
                  We constantly test the accuracy of our claims relying on the
                  scientific principle of falsifiability. We obtain new data
                  through regular analyses in the field, universities and
                  companies; we strengthen our algorithm with these data and
                  share the results transparently with the public.
                  <br />
                  In summary, at Humanas, we have built our work on measurable,
                  observable and falsifiable foundations. More detailed
                  information on the hypothesis put forward by Humanas is
                  available in our solutions, methods and case studies pages.
                  <br />
                  Meet our team to take a closer look at the contributors to the
                  project!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSciences;
