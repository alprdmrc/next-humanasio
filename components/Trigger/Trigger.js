import Separator from "@/pages/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import separatorTop from "../../public/images/separator/separator-top.svg";
import separatorBot from "../../public/images/separator/separator-bottom.svg";

import logo from "../../public/images/logo/gradientlogo.png";

const Trigger = () => {
  return (
    <div className="" style={{ position: "relative" }}>
      <div className="row justify-content-center pb--0 pt--0">
        <div className="single-settings-box top-flashlight light-xl col-lg-12 col-md-12 col-sm-12 col-12">
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
              Find the One By Humanas System So Quick Download And Make Your
              Site.
            </p>
            <Link
              className="btn-default bg-light-gradient btn-large"
              href="/contact"
            >
              <div className="has-bg-light"></div>
              <span>Contact With Us</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="chatenai-separator has-position-bottom">
        <Image className="w-100" src={separatorTop} alt="" />
      </div>
      <div className="chatenai-separator has-position-top">
        <Image className="w-100" src={separatorBot} alt="" />
      </div>
    </div>
  );
};

export default Trigger;
