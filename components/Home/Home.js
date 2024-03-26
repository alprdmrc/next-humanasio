import { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import "venobox/dist/venobox.min.css";

import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import bannerImg from "../../public/images/banner/banner-image-03.png";
import separator from "../../public/images/separator/separator-top.svg";
import separatorBottom from "../../public/images/separator/separator-bottom.svg";

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
        maxWidth: window.innerWidth >= 992 ? "50%" : "100%",
      });
    });
  }, []);
  return (
    <>
      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1"
        data-black-overlay="1"
      >
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="inner text-center mt--60">
                <h1 className="title">
                  <FlippingTextHeader
                    texts={[
                      "Discover Potentials",
                      "Save Time",
                      "Make Career Path Fun",
                      "Increase Productivity",
                    ]}
                  />
                </h1>
                <p className="has-medium-font-size">with</p>
                <h1 className="title display-one">Humanas HR Systems</h1>
                {/* <h1 className="title display-one">
                  Discover Potentials
                  <br />
                  <p className="has-medium-font-size">with</p>
                  <span className="theme-gradient">Humanas HR System</span>
                </h1> */}
                {/* <h2 className=""> */}
                {/* Our Goal Is */}
                {/* </h2> */}
                <p className="b1 desc-text">AI-Powered Human Analytics Tool.</p>
                <div className="button-group">
                  <Link
                    className="btn-default bg-light-gradient btn-large"
                    href="https://app.humanas.io/"
                    target="_blank"
                  >
                    <div className="has-bg-light"></div>
                    <span>Let's Start!</span>
                  </Link>
                </div>
                <p className="color-gray mt--5">💳 No credit card required!</p>
              </div>
            </div>

            <div className="icon text-center floating mb--10">
              <i
                className={`feather-chevron-down `}
                style={{ fontSize: 86 }}
              ></i>
            </div>

            <div className="col-lg-10 col-xl-10 order-1 order-lg-2 row">
              <div className="frame-image frame-image-bottom bg-flashlight video-popup icon-center">
                <Image src={bannerImg} alt="Banner Images" />
                <div className="video-icon">
                  <Link
                    className="btn-default rounded-player popup-video border bg-white-dropshadow"
                    href="/video/humanas-video.mp4"
                    data-vbtype="video"
                  >
                    <span>
                      <i className="feather-play"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chatenai-separator has-position-bottom">
          <Image className="w-100" src={separator} alt="" />
        </div>
      </div>
    </>
  );
};

const FlippingTextHeader = ({ texts }) => {
  const [currentText, setCurrentText] = useState(texts[0]);
  const [nextText, setNextText] = useState(texts[1]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.6 },
      onComplete: () => {
        gsap.delayedCall(2.5, () => {
          // Pause for 2 seconds before switching text
          setCurrentText(nextText);
          const nextIndex = (index + 1) % texts.length;
          setNextText(texts[(nextIndex + 1) % texts.length]);
          setIndex(nextIndex);
        });
      },
    });

    tl.fromTo(
      ".flipping-text-current",
      { y: 0, autoAlpha: 1 },
      { y: -30, autoAlpha: 0, ease: "linear" }
    ).fromTo(
      ".flipping-text-next",
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, ease: "linear" },
      "<"
    );
  }, [nextText, texts, index]);

  return (
    <div
      style={{
        margin: "0 auto",
        position: "relative",
        height: "60px",
        width: "600px",
        overflow: "hidden",
      }}
    >
      <div
        className="flipping-text-current theme-gradient-secondary"
        style={{ position: "absolute", width: "100%" }}
      >
        {currentText}
      </div>
      <div
        className="flipping-text-next theme-gradient-secondary"
        style={{ position: "absolute", width: "100%" }}
      >
        {nextText}
      </div>
    </div>
  );
};

export default Home;
