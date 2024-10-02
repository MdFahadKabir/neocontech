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
                Home/<span className="text-ntl_orange">Products</span>
              </p>
              <div className="pt-20 pb-5">
                <p className="text-text_48 xsm:text-text_36 text-ntl_black font-semibold">
                  Products
                </p>
                <p className="text-base text-ntl_gray">
                  At Neocon Technologies Limited, we offer a range of innovative
                  products tailored to meet the specific needs of businesses
                  operating in the stock market industry. Our products,
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
                    <p>All Products</p>
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
