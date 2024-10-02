import React, { useState, useEffect, useRef } from "react";
import { BsFillArrowDownRightCircleFill } from "react-icons/bs";
import Feedback from "../Homepage/Feedback";
import Factor from "../Homepage/Factor";

function AboutUs() {
  const videoPath = "/website-promo.mp4";
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <>
      <div className="pb-10">
        <div className="grid grid-cols-2 xsm:grid-cols-1 sm:grid-cols-1 gap-6 pb-10">
          <div>
            <div className="w-4/5 mx-auto">
              <video
                className="w-auto h-auto rounded-3xl"
                controls
                autoPlay
                loop
                muted
              >
                <source src={videoPath} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="my-auto">
            <p className="text-text_51 text-ntl_black font-semibold leading-none pb-5">
              We believe that we can handle all stock market
              <span className="text-ntl_orange"> IT solutions</span>
            </p>
            <p className="text-base text-ntl_gray text-justify">
              Neocon Technologies Limited is a leading provider of cutting-edge
              solutions in the field of Order Management Systems (OMS), fintech,
              and Enterprise Resource Planning (ERP) for the stock market. We
              specialize in empowering businesses with innovative technology to
              streamline their operations, enhance efficiency, and drive growth
              in the dynamic financial landscape.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 xsm:grid-cols-1 sm:grid-cols-1 gap-6 pb-10">
          <div className="my-auto">
            <div className="my-auto">
              <p className="text-text_51 text-ntl_black font-semibold leading-none pb-5">
                Best <span className="text-ntl_orange"> fintech</span> solution
                company in <span className="text-ntl_orange"> Bangladesh</span>
              </p>
              <p className="text-base text-ntl_gray text-justify">
                As a pioneering fintech solution company in Bangladesh, we at
                Neocon Technologies are proud to be at the forefront of the
                digital transformation of the financial industry specializing in
                the stock market. With our cutting-edge solutions and innovative
                technologies, we have established ourselves as the best choice
                for businesses seeking to thrive in the rapidly evolving fintech
                landscape.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 xsm:grid-cols-1 sm:grid-cols-1 gap-6 my-auto">
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
        <div className="grid grid-cols-2 xsm:grid-cols-1 sm:grid-cols-1 gap-6">
          <div>
            <div className="flex flex-row text-xl text-ntl_orange font-semibold pb-2">
              <p>Mission</p>
              <BsFillArrowDownRightCircleFill className="my-auto mx-5" />
            </div>
            <p className="text-base font-normal text-ntl_gray text-justify">
              Neocon Technologies Limited mission is to revolutionize the
              financial industry by empowering businesses with cutting-edge
              fintech solutions. We are dedicated to delivering innovative
              products and services that optimize operations, enhance customer
              experiences, and drive digital transformation in the realm of
              finance. With a focus on fintech, stock market Order Management
              Systems (OMS), Enterprise Resource Planning (ERP), and AI
              solutions, we strive to be a trusted partner, helping our clients
              stay ahead in the ever-evolving landscape of digital finance.
            </p>
          </div>
          <div>
            <div className="flex flex-row text-xl text-ntl_orange font-semibold pb-2">
              <p>Vision</p>
              <BsFillArrowDownRightCircleFill className="my-auto mx-5" />
            </div>
            <p className="text-base font-normal text-ntl_gray text-justify">
              Our vision at Neocon Technologies Limited is to be a global leader
              in providing fintech solutions for the stock market, OMS, ERP, and
              AI. We aim to spearhead technological advancements in the
              financial industry, continuously pushing boundaries to shape the
              future of finance. We envision a world where businesses seamlessly
              leverage digital solutions to optimize their financial operations,
              interact with customers on a personalized level, and unlock
              unprecedented growth opportunities. By fostering a visionary
              mindset, offering exceptional solutions, and fostering
              collaborative partnerships, we seek to empower organizations to
              thrive in the digital age and contribute to the advancement of the
              financial industry on a global scale.
            </p>
          </div>
        </div>
      </div>
      <Factor />
      <Feedback/>
      {/* <Feedback /> */}
    </>
  );
}

export default AboutUs;
