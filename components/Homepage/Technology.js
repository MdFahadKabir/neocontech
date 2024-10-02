import React from "react";
import { BiSquareRounded } from "react-icons/bi";
import Image from "next/image";
import Php from "../../public/assets/homepage/php.png";
import C from "../../public/assets/homepage/c.png";
import Python from "../../public/assets/homepage/python.png";
import JS from "../../public/assets/homepage/js.png";
import C1 from "../../public/assets/homepage/c1.png";
import Java from "../../public/assets/homepage/java.png";
import Tabs from "./Tabs";
const tabs = [
  {
    title: "Languages",
    content: [
      { src: C1, alt: "C1" },
      { src: C, alt: "C" },
      { src: Python, alt: "Python" },
    ],
  },
  {
    title: "Databases",
    content: [
      { src: JS, alt: "JavaScript" },
      { src: C1, alt: "C" },
    ],
  },
  {
    title: "API",
    content: [{ src: Java, alt: "Java" }],
  },
];
function Technology() {
  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="pb-10">
          <div className="flex flex-row pb-5">
            <BiSquareRounded className="my-auto xsm:mt-0 sm:mt-0 text-ntl_orange " />
            <p className="text-text_51 xsm:text-text_32 sm:text-text_32 font-bold text-ntl_orange pl-5 leading-none">
              Tools & Technologies{" "}
              <span className="text-ntl_black"> we use</span>
            </p>
          </div>
          <Tabs tabs={tabs} />
        </div>
      </div>
    </>
  );
}

export default Technology;
