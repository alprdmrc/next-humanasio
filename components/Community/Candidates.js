import React from "react";
import SplitRow from "../Split/SplitRow";
import Link from "next/link";
import Image from "next/image";

const Candidates = ({ candidatesContent }) => {
  return (
    <div className="row row--15">
      <SplitRow>
        <div className={`row g-0 radius-10 align-items-center`}>
          <div className="col-lg-12 col-xl-8 col-12">
            <div className="inner pr--10">
              <h4
                className="subtitle"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="300"
              >
                <span className="theme-gradient">
                  {candidatesContent[0].name}
                </span>
              </h4>
              <h4
                className="title"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="200"
              >
                {candidatesContent[0].slogan}
              </h4>
              <p
                className="description"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="300"
              >
                {candidatesContent[0].description}
              </p>
              <div
                className="view-more-button mt--35"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="400"
              >
                <Link
                  className="btn-default"
                  href="https://humanas.io/LazyGuruStore.php"
                  target="_blank"
                >
                  Let's Start
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-xl-4 col-12">
            <div className="thumbnail">
              <Image
                width={1217}
                height={1100}
                className="radius"
                src={
                  process.env.NEXT_PUBLIC_STRAPI_API_URL +
                  candidatesContent[0].image.data[0].attributes.url
                }
                alt="split Images"
              />
            </div>
          </div>
        </div>
      </SplitRow>
    </div>
  );
};

export default Candidates;
