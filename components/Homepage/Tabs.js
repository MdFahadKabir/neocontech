import React, { useState, useRef, useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowDownRightCircleFill,
} from "react-icons/bs";
import Image from "next/image";

function Tabs({ tabs }) {
  const [openTab, setOpenTab] = useState(1);
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

  return (
    <div>
      <div>
        <ul
          className="flex flex-row text-2xl font-semibold xsm:overflow-x-scroll sm:overflow-x-scroll scrollbar-hide"
          ref={tabContainerRef}
        >
          {tabs.map((tab, index) => (
            <li key={index} className="xsm:min-w-max sm:min-w-max mx-2">
              <a
                className={`flex flex-row ${
                  openTab === index + 1
                    ? "text-ntl_orange"
                    : "text-ntl_black hover:text-ntl_orange duration-700"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(index + 1);
                }}
                href={`#link${index + 1}`}
                role="tablist"
              >
                <p>{tab.title}</p>
                {openTab === index + 1 ? (
                  <BsFillArrowDownRightCircleFill className="my-auto mx-2" />
                ) : (
                  <BsFillArrowRightCircleFill className="my-auto mx-2" />
                )}
              </a>
            </li>
          ))}
        </ul>
        <div className="pt-5">
          <div>
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={openTab === index + 1 ? "block" : "hidden"}
                id={`link${index + 1}`}
              >
                <div className="grid grid-cols-7 xsm:grid-cols-3 sm:grid-cols-3 gap-6">
                  {tab.content.map((image, index) => (
                    <div
                      key={index}
                      className=" rounded-3xl w-full feedback_bg"
                    >
                      <div className="">
                        <div className="p-6">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            className=" mx-auto mb-0 pb-0 w-12 h-12 xsm:w-auto xsm:h-auto sm:w-auto sm:h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
