import React, { useState } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { ImStarFull, ImStarHalf } from "react-icons/im";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { BiSquareRounded } from "react-icons/bi";
import Avater from "../../public/assets/homepage/avater.png";
const FeedbackList = [
  {
    id: 1,
    image: Avater,
    name: "Yousuf Khan, CEO",
    content:
      "Neocon Technologies' OMS and fintech solutions have been a game-changer for our investment firm. Their OMS streamlined our trading activities, providing real-time monitoring and efficient order execution. The analytics tools integrated into their platform have given us valuable insights into market trends, helping us make informed investment decisions. Their team's expertise and exceptional support have made our experience truly remarkable. We highly recommend Neocon Technologies for their top-notch solutions and customer-centric approach",
    rating: "4",
  },
  {
    id: 2,
    image: Avater,
    name: "Mahtab Chowdhury, CFO of Brokerage house",
    content:
      "We turned to Neocon Technologies for ERP solutions tailored to our stock market operations, and it has been a fantastic experience. Their ERP system has seamlessly integrated our financial processes, optimizing inventory management, and enhancing overall efficiency. The risk management tools have allowed us to proactively identify and mitigate risks, ensuring compliance and safeguarding our investments. Neocon Technologies' team has been incredibly supportive throughout the implementation process, providing timely assistance and expert guidance.",
    rating: "4.5",
  },
  {
    id: 3,
    image: Avater,
    name: "Abdullah Hasib, CTO",
    content:
      "Neocon Technologies has transformed our asset management operations with their comprehensive fintech solutions. Their portfolio management tools have empowered us to effectively track and analyze our investment portfolios, leading to better performance and client satisfaction. The seamless integration of their OMS with our existing systems has significantly improved our trading efficiency. The support we have received from Neocon Technologies has been exceptional, with their team always available to address our queries and provide customized solutions. We highly appreciate their expertise and professionalism.",
    rating: "4",
  }
];

function Feedback() {
  const splideOptions = {
    type: "loop",
    perPage: 2,
    autoplay: true,
    pauseOnHover: false,
    speed: 2000,
    interval: 4000,
    arrows: false,
    pagination: false,
    breakpoints: {
      640: {
        perPage: 1,
      },
      768: {
        perPage: 2,
      },
      1024: {
        perPage: 2,
      },
    },
  };
  return (
    <>
      <div>
        <div className="pb-10">
          <div className="flex flex-row pb-5">
            <BiSquareRounded className="my-auto text-ntl_orange" />
            <p className="text-text_51 xsm:text-text_32 sm:text-text_32 font-bold text-ntl_black pl-5 leading-none">
              Customers <span className="text-ntl_orange"> feedback</span>
            </p>
          </div>

          <div>
            <Splide options={splideOptions}>
              {FeedbackList.map((feed, index) => (
                <SplideSlide key={index}>
                  <div className=" h-full">
                    <div className="flex flex-col p-5 rounded-3xl feedback_bg mx-5 xsm:mx-2 h-full text-center">
                      <div className="flex flex-col text-center mx-auto">
                        <Image
                          src={feed.image}
                          alt={feed.image}
                          width={50}
                          height={50}
                          className="w-auto h-auto rounded-full mx-auto border border-ntl_black bg-ntl_white"
                        />
                        <p className="text-lg font-semibold  text-ntl_black mb-2">
                          {feed.name}
                        </p>
                        <div className="flex flex-row text-ntl_orange">
                          <FaQuoteLeft size={80} className="-mt-10" />
                          <p className="font-normal text-base text-ntl_black text-center px-2">
                            {feed.content}
                          </p>
                          <FaQuoteRight size={80} className="mt-32 2xl:mt-36 xsm:mt-96 " />
                        </div>
                        <div className="flex flex-row mx-auto">
                          {Array.from(
                            { length: Math.floor(feed.rating) },
                            (_, index) => (
                              <ImStarFull
                                key={index}
                                className="w-4 h-4 text-ntl_orange"
                              />
                            )
                          )}
                          {feed.rating % 1 !== 0 && (
                            <ImStarHalf className="w-4 h-4 text-ntl_orange" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
