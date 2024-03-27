import Image from "next/image";
import { useAppContext } from "@/context/Context";

import logoLight from "../../public/images/logo/logo.png";
import logoDark from "../../public/images/logo/logo-dark.png";
import humanaslogo from "../../public/images/logo/gradientlogo.png";

import Nav from "./Nav";
import SmallNav from "./SmallNav";
import { useEffect } from "react";
import Link from "next/link";

const PopupMobileMenu = () => {
  const { activeMobileMenu, setActiveMobileMenu } = useAppContext();

  const handleResize = () => {
    if (window.innerWidth > 992) {
      setActiveMobileMenu(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [activeMobileMenu]);

  return (
    <>
      <div className={`popup-mobile-menu ${activeMobileMenu ? "" : "active"}`}>
        <div
          className="bg"
          onClick={() => setActiveMobileMenu(!activeMobileMenu)}
        ></div>
        <div className="inner-popup">
          <div className="header-top">
            <div className="logo">
              <Link href="/">
                <Image
                  className="logo-light"
                  src={humanaslogo}
                  width={172}
                  height={30}
                  alt="Corporate Logo"
                />
                <Image
                  className="logo-dark"
                  src={humanaslogo}
                  width={172}
                  height={30}
                  alt="Corporate Logo"
                />
              </Link>
            </div>
            <div className="close-menu">
              <button
                className="close-button"
                onClick={() => setActiveMobileMenu(!activeMobileMenu)}
              >
                <i className="feather-x"></i>
              </button>
            </div>
          </div>
          <div className="content">
            <Nav />

            <div className="rbt-sm-separator"></div>
            <div className="rbt-default-sidebar-wrapper">
              <SmallNav />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupMobileMenu;
