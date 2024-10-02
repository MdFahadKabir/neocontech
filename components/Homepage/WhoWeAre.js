import React from "react";
import { BiSquareRounded } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function WhoWeAre() {
  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="pb-10">
          <div className="flex flex-row">
            <BiSquareRounded className="my-auto text-ntl_orange" />
            <p className="text-text_51 xsm:text-text_32 sm:text-text_32 font-bold text-ntl_black pl-5">
              Who <span className="text-ntl_orange"> we</span> are
            </p>
          </div>
          <div className="flex justify-between xsm:flex-col sm:flex-col">
            <div className="w-full my-auto">
              <div className="grid grid-cols-2 gap-6 xsm:grid-cols-1 sm:grid-cols-1 text-base font-normal text-ntl_black text-justify">
                <div className="col-span-2 xsm:col-span-1 sm:col-span-1">
                  <p>
                    We are a leading fintech company specializing in providing
                    cutting-edge solutions for the stock market, Order
                    Management Systems (OMS), and Enterprise Resource Planning
                    (ERP) needs. With a deep understanding of the financial
                    industry and a passion for innovation, we strive to empower
                    businesses with advanced technology to streamline their
                    operations and drive growth.
                  </p>
                </div>
                <div>
                  <p>
                    At Neocon Technologies Limited, we have a team of seasoned
                    professionals who bring extensive knowledge and expertise in
                    developing and delivering comprehensive fintech solutions.
                  </p>
                </div>
                <div>
                  <p>
                    Our fintech solutions encompass a wide range of services
                    aimed at enhancing financial operations and transforming the
                    way businesses operate.
                  </p>
                </div>
              </div>
            </div>
            <div className="block xsm:hidden sm:hidden mx-10"></div>
            <div className="w-full">
              <div className="grid grid-cols-2 gap-6 xsm:grid-cols-1 sm:grid-cols-1 text-base text-ntl_black">
                <div className="feedback_bg p-5 rounded-3xl">
                  <p className="text-text_32 font-semibold">05+</p>
                  <p>Years of experience</p>
                </div>
                <div className="feedback_bg p-5 rounded-3xl">
                  <p className="text-text_32 font-semibold">50+</p>
                  <p>Professional</p>
                </div>
                <div className="feedback_bg p-5 rounded-3xl">
                  <p className="text-text_32 font-semibold">4.9</p>
                  <p>Overall Rating</p>
                </div>
                <div className="feedback_bg p-5 rounded-3xl">
                  <p className="text-text_32 font-semibold">24/7</p>
                  <p>Professional Support</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="flex flex-row pr-10 pt-4">
              <p>Learn More</p>
              <BsFillArrowRightCircleFill className="my-auto mx-4 text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoWeAre;
