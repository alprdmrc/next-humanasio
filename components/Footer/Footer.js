import Separator from "@/pages/separator";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo/gradientlogo.png";

import FooterData from "../../data/footer.json";
import SingleFooter from "./FooterProps/SingleFooter";

const Footer = () => {
  return (
    <>
      <footer className="rainbow-footer footer-style-default footer-style-3 position-relative">
        <Separator top={true} />
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-center mb--30">
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="rainbow-footer-widget text-center">
                  <div className="logo">
                    <Link href="/">
                      <Image
                        className="logo-light"
                        src={logo}
                        width={201}
                        height={35}
                        alt="Corporate Logo"
                      />
                    </Link>
                  </div>
                  <p className="b1 text-center mt--20 mb--20">
                    Discover the Potential
                  </p>
                  <Link
                    className="btn-default bg-light-gradient btn-large"
                    href="/contact-us"
                  >
                    <div className="has-bg-light"></div>
                    <span>Contact With Us</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="separator-animated animated-true mt--50 mb--50"></div>
            {FooterData &&
              FooterData.footer.map((data, index) => (
                <div className="row" key={index}>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="rainbow-footer-widget">
                      <h4 className="title">{data.title}</h4>
                      <div className="inner">
                        <h6 className="subtitle">{data.desc}</h6>
                        <form className="newsletter-form" action="#">
                          <div className="form-group">
                            <input
                              type="email"
                              placeholder="Enter Your Email Here"
                            />
                            <button
                              className="btn-default bg-solid-primary"
                              type="submit"
                            >
                              <i className="feather-arrow-right"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <SingleFooter data={data.company} />
                  <SingleFooter data={data.solutions} />

                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="rainbow-footer-widget">
                      <div className={`widget-menu-top`}>
                        <h4 className="title">Adress</h4>
                        <div className="inner">
                          <ul className="footer-link link-hover">
                            <li>
                              <a href="tel:+902323320462">+90 232 332 0462</a>
                            </li>
                            <li>
                              <a href="mailto:hello@humanas.io">
                                hello@humanas.io
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Kültür District Cumhuriyet Apartment No:12
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Kat:4 Floor:401 35410 Konak / IZMIR / TURKEY
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
