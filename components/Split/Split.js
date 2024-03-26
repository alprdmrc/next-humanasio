import Image from "next/image";

import splitImg from "../../public/images/split/split-8.png";
import Link from "next/link";

const Split = ({ children }) => {
  return (
    <>
      <div className="rainbow-split-area rainbow-section-gap">
        <div className="container">
          <div className="rainbow-splite-style">
            <div className="split-wrapper">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Split;
