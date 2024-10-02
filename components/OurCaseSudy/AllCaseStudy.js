import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsFillArrowRightCircleFill, BsFillArrowDownRightCircleFill } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import Link from "next/link";

function AllCaseStudy() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showFilterButton, setShowFilterButton] = useState(false);
  const [caseList, setCaseList] = useState([]);
  const [uniqueTags, setUniqueTags] = useState([]);

  // Helper function to extract tag names from the JSON string
  const extractTagNames = (tags) => {
    try {
      const tagsArray = JSON.parse(tags);
      return tagsArray.map((tagObj) => tagObj.value);
    } catch (error) {
      console.error("Error parsing tags:", error);
      return [];
    }
  };

  // Fetch data from the API using async/await
  const fetchCaseStudies = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/case-study`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCaseList(data);
      const allTags = data.flatMap((caseStudy) => extractTagNames(caseStudy.tags));
      const uniqueTags = [...new Set(allTags)];
      setUniqueTags(uniqueTags);
      // console.log("Fetched data:", data);
    } catch (error) {
      console.error("Error fetching case studies:", error);
    }
  };

  useEffect(() => {
    fetchCaseStudies();
  }, []); // Fetch data only once when the component mounts

  const handleFilterClick = (tag) => {
    setActiveFilter(tag);
  };

  const handleFilterButtonClick = () => {
    setShowFilterButton((prevValue) => !prevValue);
  };

  const getButtonStyle = (tag) => {
    if (tag === activeFilter) {
      return "text-ntl_white bg-ntl_orange";
    }
    return "text-ntl_black";
  };

  const getArrowIconStyle = (tag) => {
    if (tag === activeFilter) {
      return "text-ntl_orange";
    }
    return "text-ntl_black";
  };

  const filterCaseStudies = (caseStudy) => {
    if (activeFilter === "all") {
      return true;
    }
    return extractTagNames(caseStudy.tags).includes(activeFilter);
  };

  const filteredCaseList = caseList.filter(filterCaseStudies);

  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="pb-10">
          <div className="hidden xsm:block sm:block">
            {/* Filter Icon */}
            <div className="flex justify-center xsm:flex-col sm:flex-col pb-4">
              <button
                className="mx-2 px-6 py-2 rounded-lg min-w-max text-ntl_black"
                onClick={handleFilterButtonClick}
              >
                <div className="flex flex-row items-center">
                  <FaFilter className="text-2xl" />
                  <p className="mx-2">Filter</p>
                </div>
              </button>
            </div>

            {/* Filter Buttons */}
            {showFilterButton && (
              <div className="flex justify-center xsm:flex-col sm:flex-col pb-10 overflow-x-scroll scrollbar-hide">
                <button
                  className={`mx-2 px-6 py-2 rounded-lg min-w-max  ${getButtonStyle("all")}`}
                  onClick={() => handleFilterClick("all")}
                >
                  <div className="flex justify-between items-center">
                    <p className="mx-2">All</p>
                    {getArrowIconStyle("all") === "text-ntl_orange" ? (
                      <BsFillArrowDownRightCircleFill className="text-2xl" />
                    ) : (
                      <BsFillArrowRightCircleFill className="text-2xl" />
                    )}
                  </div>
                </button>
                {uniqueTags.map((tag) => (
                  <button
                    key={tag}
                    className={`mx-2 px-6 py-2 rounded-lg min-w-fit  ${getButtonStyle(tag)}`}
                    onClick={() => handleFilterClick(tag)}
                  >
                    <div className="flex justify-between items-center">
                      <p className="mx-2">{tag}</p>
                      {getArrowIconStyle(tag) === "text-ntl_orange" ? (
                        <BsFillArrowDownRightCircleFill className="text-2xl" />
                      ) : (
                        <BsFillArrowRightCircleFill className="text-2xl" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="block xsm:hidden sm:hidden">
            <div className="flex justify-center xsm:flex-col sm:flex-col pb-10 overflow-x-scroll scrollbar-hide">
              <button
                className={`mx-2 px-6 py-2 rounded-lg min-w-max  ${getButtonStyle("all")}`}
                onClick={() => handleFilterClick("all")}
              >
                <div className="flex flex-row items-center">
                  <p className="mx-2">All</p>
                  {getArrowIconStyle("all") === "text-ntl_orange" ? (
                    <BsFillArrowDownRightCircleFill className="text-2xl" />
                  ) : (
                    <BsFillArrowRightCircleFill className="text-2xl" />
                  )}
                </div>
              </button>
              {uniqueTags.map((tag) => (
                <button
                  key={tag}
                  className={`mx-2 px-6 py-2 rounded-lg min-w-fit  ${getButtonStyle(tag)}`}
                  onClick={() => handleFilterClick(tag)}
                >
                  <div className="flex flex-row items-center">
                    <p className="mx-2">{tag}</p>
                    {getArrowIconStyle(tag) === "text-ntl_orange" ? (
                      <BsFillArrowDownRightCircleFill className="text-2xl" />
                    ) : (
                      <BsFillArrowRightCircleFill className="text-2xl" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Case Study Grid */}
          <div className="grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-1 gap-6">
            {filteredCaseList.map((casestudy, index) => (
              <div key={index}>
                <div className="h-full">
                  <div className="flex flex-col p-5 rounded-3xl feedback_bg mx-5 xsm:mx-2 h-full">
                    <div className="flex justify-end">
                      <Link href={`/casestudy/${casestudy.name}`}>
                        <button className="flex flex-row pt-4">
                          <p className="mx-4">View More</p>
                          <BsFillArrowRightCircleFill className="my-auto text-2xl" />
                        </button>
                      </Link>
                    </div>
                    <div className="flex justify-between mt-20 xsm:mt-10">
                      <div className="text-text_40 xsm:text-text_32 sm:text-text_32 font-medium text-ntl_black leading-none w-9/12 xsm:w-full sm:w-full my-auto">
                        <p>{casestudy.name}</p>
                      </div>
                      <div className="w-3/12 xsm:w-full sm:w-full my-auto">
                        <Image
                          src={
                            process.env.NEXT_PUBLIC_BACKEND_URL +
                            "/storage/" +
                            casestudy.image
                          }
                          width={300}
                          height={300}
                          alt="case study .png"
                          className="w-auto h-auto mb-0 pb-0 my-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCaseStudy;
