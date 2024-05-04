import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import sal from "sal.js";

const TeamMemberCard = ({ data, parentClass }) => {
  useEffect(() => {
    sal();

    const cards = document.querySelectorAll(".bg-flashlight");

    cards.forEach((bgflashlight) => {
      bgflashlight.onmousemove = function (e) {
        let x = e.pageX - bgflashlight.offsetLeft;
        let y = e.pageY - bgflashlight.offsetTop;

        bgflashlight.style.setProperty("--x", x + "px");
        bgflashlight.style.setProperty("--y", y + "px");
      };
    });
  }, []);
  return (
    <>
      <div className={`${parentClass} mt--30`}>
        <div className={`rainbow-pricing style-chatenai active`}>
          <div className="pricing-table-inner pr--25 pl--25 pt--25 pb--25 bg-flashlight">
            <div className="pricing-top">
              <div className="pricing-header">
                <div className="pricing">
                  <div className="teamMemberCardImageWrapper">
                    <Image
                      width={250}
                      height={330}
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_API_URL +
                        data.picture.data.attributes.url
                      }
                      className="teamMemberCardImage"
                      alt={data.name}
                    />
                  </div>
                </div>
                <div className="separator-animated animated-true mt--10 mb--10"></div>
              </div>
              <div className="pricing-body">
                <h4 className="b1 mb--0">{data.name}</h4>
                <span className="subtitle">
                  {data.title}
                  {data.title2 && ", " + data.title2}
                </span>
                {/* <ul className="list-style--1">
                  {data.subItem.map((innerData, innerIndex) => (
                    <li key={innerIndex}>
                      <i
                        className={`feather-${
                          innerData.isMinus ? "minus" : "check"
                        }-circle pe-2`}
                      ></i>
                      {innerData.text}
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>
            <div className="pricing-footer">
              <Link
                className={`btn-border`}
                target="_blank"
                href={`${data.link}`}
              >
                <div className="icon">
                  <i className={`feather-linkedin`}></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMemberCard;
