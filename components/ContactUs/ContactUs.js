import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="rainbow-service-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h4 className="subtitle">
                  <span className="theme-gradient">About Us</span>
                </h4>
                <h2 className="title mb--20 w-600">Our Contact Adress Here.</h2>
              </div>
            </div>
          </div>
          <div className="row row--15">
            <div className="col-lg-12">
              <div className="rainbow-contact-address mt_dec--30">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div
                      className="rainbow-address bg-flashlight"
                      style={{ height: "280px" }}
                    >
                      <div className="icon">
                        <i className="feather-headphones"></i>
                      </div>
                      <div className="inner">
                        <h4 className="title">Our Phone Number</h4>
                        <p>
                          <a href="#">+90 232 332 0462</a>
                        </p>
                        {/* <p>
                          <a href="#">+222 222 222 333</a>
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div
                      className="rainbow-address bg-flashlight"
                      style={{ height: "280px" }}
                    >
                      <div className="icon">
                        <i className="feather-mail"></i>
                      </div>
                      <div className="inner">
                        <h4 className="title">Our Email Address</h4>
                        <p>
                          <a href="mailto:hello@humanas.io">hello@humanas.io</a>
                        </p>
                        {/* <p>
                          <a href="mailto:example@gmail.com">
                            example@gmail.com
                          </a>
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div
                      className="rainbow-address bg-flashlight"
                      style={{ height: "280px" }}
                    >
                      <div className="icon">
                        <i className="feather-map-pin"></i>
                      </div>
                      <div className="inner">
                        <h4 className="title">Our Location</h4>
                        <p>
                          Kültür District Cumhuriyet Apt. No:12
                          <br />
                          Floor:4 No:401 35410 Konak / IZMIR / TURKEY
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt--40 row--15">
            <div className="col-lg-6 offset-lg-3">
              <form
                className="contact-form-1 rainbow-dynamic-form"
                id="contact-form"
                method="POST"
                action="https://formsubmit.co/hello@humanas.io"
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="contact-name"
                    id="contact-name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="contact-phone"
                    id="contact-phone"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="contact-email"
                    name="contact-email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Your Subject"
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="contact-message"
                    id="contact-message"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <button
                    name="submit"
                    type="submit"
                    id="submit"
                    className="btn-default btn-large rainbow-btn"
                  >
                    <span>Submit Now</span>
                  </button>
                </div>
              </form>
            </div>
            {/* <div className="col-lg-5 mt_md--30 mt_sm--30">
              <div className="google-map-style-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14554259.179133086!2d-105.54385245388013!3d37.49334218664659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1630777307491!5m2!1sen!2sbd"
                  width="600"
                  height="550"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
