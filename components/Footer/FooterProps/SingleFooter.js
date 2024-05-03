import Link from "next/link";
import React from "react";

const SingleFooter = ({ data }) => {
  return (
    <>
      <div className="col-lg-2 col-md-6 col-sm-6 col-12">
        <div className="rainbow-footer-widget">
          <div className={`widget-menu-${data.top ? "top" : "bottom"}`}>
            <h4 className="title">{data.title}</h4>
            <div className="inner">
              <ul className="footer-link link-hover">
                {data.menuInnerItem.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link href={subItem.link}>{subItem.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleFooter;
