import React from "react";
import { BsFillArrowDownRightCircleFill } from "react-icons/bs";
function Hero() {
  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="pb-10">
          <div className="company_bg">
            <div className="px-5">
              <p className="text-base font-normal text-ntl_black pt-10">
                Home/<span className="text-ntl_orange">Case Study</span>
              </p>
              <div className="pt-20 pb-5">
                <p className="text-text_48 xsm:text-text_36 text-ntl_black font-semibold">
                  Case Study
                </p>
                <p className="text-base text-ntl_gray">
                  At Neocon Technologies Limited, we offer a range of innovative
                  Case Study tailored to meet the specific needs of businesses
                  operating in the stock market industry. Our Case Study,
                  including Order Management Systems (OMS), fintech solutions,
                  and Enterprise Resource Planning (ERP) systems, are designed
                  to optimize trading activities, enhance operational
                  efficiency, and drive growth.
                </p>
              </div>
            </div>
            <div className="border-dashed border-t-2 border-t-ntl_gray_2">
              <div className="p-5 xsm:px-0 xsm:pl-5">
                <div>
                  <div className="flex flex-row text-ntl_orange">
                    <p>All Case Study</p>
                    <BsFillArrowDownRightCircleFill className="my-auto mx-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
