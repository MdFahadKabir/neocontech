import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowDownRightCircleFill,
} from "react-icons/bs";
import AboutUs from "./AboutUs";
import Director from "./Director";
import Team from "./Team";

function Hero() {
  const [openTab, setOpenTab] = useState(1);
  const [director, setDirector] = useState([]);
  const [team, setTeam] = useState([]);
  const tabContainerRef = useRef(null);
  useEffect(() => {
    const containerWidth = tabContainerRef.current.clientWidth;
    const tabWidth = tabContainerRef.current.children[openTab - 1].clientWidth;
    const tabOffset = tabContainerRef.current.children[openTab - 1].offsetLeft;
    const scrollPosition = tabOffset - containerWidth / 2 + tabWidth / 2;
    tabContainerRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }, [openTab]);
  const handleTabClick = (tabNumber) => {
    setOpenTab(tabNumber);
  };
  async function fetchEmp() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/employee`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setDirector(
        data.filter((employee) => employee.type === "director")
      );
      setTeam(
        data.filter((employee) => employee.type === "team")
      );
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  }

  useEffect(() => {
    fetchEmp();
  }, []);

  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="pb-10">
          <div className="company_bg">
            <div className="px-5">
              <p className="text-base font-normal text-ntl_black pt-10">
                Home/<span className="text-ntl_orange">Company</span>
              </p>
              <div className="pt-20 pb-5">
                <p className="text-text_48 xsm:text-text_36 text-ntl_black font-semibold">
                  Company
                </p>
                <p className="text-base text-ntl_gray text-justify">
                  At Neocon Technologies, we understand the unique challenges
                  faced by businesses operating in the stock market. We combine
                  our deep understanding of the industry with our expertise in
                  fintech to deliver tailored solutions that cater to the
                  specific needs of our clients.
                </p>
              </div>
            </div>
            <div className="border-dashed border-t-2 border-t-ntl_gray_2">
              <div className="p-5 xsm:px-0 xsm:pl-5">
                <div>
                  <ul
                    className=" flex flex-row text-2xl font-semibold xsm:overflow-x-scroll sm:overflow-x-scroll scrollbar-hide "
                    ref={tabContainerRef}
                  >
                    <li className="xsm:min-w-max sm:min-w-max ">
                      <a
                        className={`flex flex-row" ${
                          openTab === 1
                            ? "text-ntl_orange"
                            : "text-ntl_black hover:text-ntl_orange duration-700"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleTabClick(1);
                        }}
                        href="#link1"
                        role="tablist"
                      >
                        <p>About Us</p>
                        {openTab === 1 ? (
                          <BsFillArrowDownRightCircleFill className="my-auto mx-2" />
                        ) : (
                          <BsFillArrowRightCircleFill className="my-auto mx-2" />
                        )}
                      </a>
                    </li>
                    <li className="mx-5 xsm:min-w-max sm:min-w-max ">
                      <a
                        className={`flex flex-row" ${
                          openTab === 2
                            ? "text-ntl_orange"
                            : "text-ntl_black hover:text-ntl_orange duration-700"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleTabClick(2);
                        }}
                        href="#link2"
                        role="tablist"
                      >
                        <p>Board of Directors</p>
                        {openTab === 2 ? (
                          <BsFillArrowDownRightCircleFill className="my-auto mx-2" />
                        ) : (
                          <BsFillArrowRightCircleFill className="my-auto mx-2" />
                        )}
                      </a>
                    </li>
                    <li className="mx-5 xsm:min-w-max sm:min-w-max ">
                      <a
                        className={`flex flex-row" ${
                          openTab === 3
                            ? "text-ntl_orange"
                            : "text-ntl_black hover:text-ntl_orange duration-700"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleTabClick(3);
                        }}
                        href="#link3"
                        role="tablist"
                      >
                        <p>Team</p>
                        {openTab === 3 ? (
                          <BsFillArrowDownRightCircleFill className="my-auto mx-2" />
                        ) : (
                          <BsFillArrowRightCircleFill className="my-auto mx-2" />
                        )}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={openTab === 1 ? "block" : "hidden"} id="link1">
            <AboutUs />
          </div>
          <div className={openTab === 2 ? "block" : "hidden"} id="link2">
            <Director data={director} />
          </div>
          <div className={openTab === 3 ? "block" : "hidden"} id="link3">
            <Team data={team} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
