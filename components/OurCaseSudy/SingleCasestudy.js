import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowDownRightCircleFill,
} from "react-icons/bs";
import Contact from "../Homepage/Contact";

export default function SingleCasestudy({ casestudy }) {
  const [openTab, setOpenTab] = useState(1);
  const [formattedContent, setFormattedContent] = useState("");

  // Check if the casestudy data is available or show a loading state
  if (!casestudy) {
    return <div>Loading...</div>;
  }
  // Get the casestudy data based on the openTab value
  const currentCasestudy = casestudy.find((item) => item.id === openTab);
  useEffect(() => {
    const fetchImagesAndFormatContent = async () => {
      const blobImageRegex = /blob:\s*([^\s"]+)/g;
      const contentWithFetchedImages = await Promise.all(
        currentCasestudy.description
          .match(blobImageRegex)
          .map(async (match) => {
            const imageUrl = await fetchBlobImageAsDataUrl(match);
            return imageUrl || match;
          })
      );

      let updatedContent = currentCasestudy.description;
      contentWithFetchedImages.forEach((imageUrl, index) => {
        updatedContent = updatedContent.replace(
          new RegExp(contentWithFetchedImages[index], "g"),
          imageUrl
        );
      });

      setFormattedContent(updatedContent);
    };

    fetchImagesAndFormatContent();
  }, [currentCasestudy.description]);

  const fetchBlobImageAsDataUrl = async (blobUrl) => {
    try {
      // Convert blob URL to Data URL using createObjectURL
      const response = await fetch(blobUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch blob image.");
      }
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      return imageUrl;
    } catch (error) {
      console.error("Error fetching blob image:", error);
      return null; // Return null if there's an error fetching the image
    }
  };

  const formatTableRowsForMobile = (content) => {
    if (window.innerWidth < 640) {
      // Replace <table> with nested <div> elements for mobile view
      const parser = new DOMParser();
      const parsedContent = parser.parseFromString(content, "text/html");
      const rows = Array.from(parsedContent.querySelectorAll("tr")).map(
        (row, rowIndex) => {
          const cells = Array.from(row.querySelectorAll("td")).map(
            (cell, colIndex) => (
              <div
                key={`col_${rowIndex}_${colIndex}`}
                dangerouslySetInnerHTML={{ __html: cell.innerHTML }}
              />
            )
          );
          return (
            <div key={`row_${rowIndex}`} className="flex flex-col">
              {cells}
            </div>
          );
        }
      );
      return <div>{rows}</div>;
    }
    return <table dangerouslySetInnerHTML={{ __html: content }} />; // Return original table structure for desktop view
  };
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
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="pb-10">
          <div className="company_bg">
            <div className="px-5">
              <p className="text-base font-normal text-ntl_black pt-10">
                Home/
                <span className="text-ntl_orange">
                  {currentCasestudy.name.length > 0
                    ? currentCasestudy.title
                    : ""}
                </span>
              </p>
              <div className="pt-20 pb-5">
                <p className="text-text_48 xsm:text-text_36 text-ntl_black font-semibold">
                  {currentCasestudy.name.length > 0
                    ? currentCasestudy.name
                    : ""}
                </p>

                <div className="text-base text-ntl_gray"></div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: currentCasestudy.subDesc,
                  }}
                ></div>
              </div>
            </div>
            <div className="border-dashed border-t-2 border-t-ntl_gray_2">
              <div
                className="p-5 xsm:px-0 xsm:pl-5 flex flex-row overflow-x-scroll scrollbar-hide"
                ref={tabContainerRef}
              >
                {/* Rendering the tabs dynamically based on the 'casestudy' array */}
                {casestudy.map((item) => (
                  <Link
                    key={item.id}
                    href={`/casestudy/${item.name}`}
                    legacyBehavior
                  >
                    <a
                      className={`flex flex-row min-w-max mr-4 ${
                        item.id === openTab
                          ? "text-ntl_orange"
                          : "text-ntl_black"
                      }`}
                      onClick={() => handleTabClick(item.id)}
                    >
                      {item.title.length > 0 ? item.title : ""} for the stock
                      market
                      {item.id === openTab ? (
                        <BsFillArrowDownRightCircleFill className="my-auto mx-2" />
                      ) : (
                        <BsFillArrowRightCircleFill className="my-auto mx-2" />
                      )}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pb-10 leading-none">
          <div className="hidden xsm:block sm:block">
            <div>{formatTableRowsForMobile(formattedContent)}</div>
          </div>
          <div className="block xsm:hidden sm:hidden">
            <div>
              <div dangerouslySetInnerHTML={{ __html: formattedContent }} />
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
