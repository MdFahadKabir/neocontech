// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import {
//   BsFillArrowRightCircleFill,
//   BsFillArrowDownRightCircleFill,
// } from "react-icons/bs";
// import Contact from "../Homepage/Contact";

// const SingleProduct = ({ product }) => {
//   console.log(product);
//   const [openTab, setOpenTab] = useState(1);
//   const [formattedContent, setFormattedContent] = useState("");

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   const currentProduct = product.find((item) => item.id === openTab);

//   useEffect(() => {
//     const fetchImagesAndFormatContent = async () => {
//       const blobImageRegex = /blob:\s*([^\s"]+)/g;
//       const contentWithFetchedImages = await Promise.all(
//         currentProduct.description.match(blobImageRegex).map(async (match) => {
//           const imageUrl = await fetchBlobImageAsDataUrl(match);
//           return imageUrl || match;
//         })
//       );

//       let updatedContent = currentProduct.description;
//       contentWithFetchedImages.forEach((imageUrl, index) => {
//         updatedContent = updatedContent.replace(new RegExp(contentWithFetchedImages[index], "g"), imageUrl);
//       });

//       setFormattedContent(updatedContent);
//     };

//     fetchImagesAndFormatContent();
//   }, [currentProduct.description]);

//   const fetchBlobImageAsDataUrl = async (blobUrl) => {
//     try {
//       // Convert blob URL to Data URL using createObjectURL
//       const response = await fetch(blobUrl);
//       if (!response.ok) {
//         throw new Error("Failed to fetch blob image.");
//       }
//       const blob = await response.blob();
//       const imageUrl = URL.createObjectURL(blob);
//       return imageUrl;
//     } catch (error) {
//       console.error("Error fetching blob image:", error);
//       return null; // Return null if there's an error fetching the image
//     }
//   };

//   const formatTableRowsForMobile = (content) => {
//     if (window.innerWidth < 640) {
//       // Replace <table> with nested <div> elements for mobile view
//       const parser = new DOMParser();
//       const parsedContent = parser.parseFromString(content, "text/html");
//       const rows = Array.from(parsedContent.querySelectorAll("tr")).map((row, rowIndex) => {
//         const cells = Array.from(row.querySelectorAll("td")).map((cell, colIndex) => (
//           <div key={`col_${rowIndex}_${colIndex}`} dangerouslySetInnerHTML={{ __html: cell.innerHTML }} />
//         ));
//         return <div key={`row_${rowIndex}`} className="flex flex-col">{cells}</div>;
//       });
//       return <div>{rows}</div>;
//     }
//     return <table dangerouslySetInnerHTML={{ __html: content }} />; // Return original table structure for desktop view
//   };

//   const tabContainerRef = useRef(null);

//   useEffect(() => {
//     const containerWidth = tabContainerRef.current.clientWidth;
//     const tabWidth = tabContainerRef.current.children[openTab - 1].clientWidth;
//     const tabOffset = tabContainerRef.current.children[openTab - 1].offsetLeft;
//     const scrollPosition = tabOffset - containerWidth / 2 + tabWidth / 2;

//     tabContainerRef.current.scrollTo({
//       left: scrollPosition,
//       behavior: "smooth",
//     });
//   }, [openTab]);

//   const handleTabClick = (tabNumber) => {
//     setOpenTab(tabNumber);
//   };

//   return (
//     <>
//       <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
//         <div className="pb-10">
//           <div className="company_bg">
//             <div className="px-5">
//               <p className="text-base font-normal text-ntl_black pt-10">
//                 Home/
//                 <span className="text-ntl_orange">
//                   {currentProduct.name.length > 0
//                     ? currentProduct.name[0].value
//                     : ""}
//                 </span>
//               </p>
//               <div className="pt-20 pb-5">
//                 <p className="text-text_48 xsm:text-text_36 text-ntl_black font-semibold">
//                   {currentProduct.name.length > 0
//                     ? currentProduct.name[0].value
//                     : ""}
//                 </p>
//                 <div className="text-base text-ntl_gray"></div>
//                 <div>
//                   <div>{currentProduct.subDesc}</div>
//                 </div>
//               </div>
//             </div>
//             <div className="border-dashed border-t-2 border-t-ntl_gray_2">
//               <div
//                 className="p-5 xsm:px-0 xsm:pl-5 flex flex-row overflow-x-scroll scrollbar-hide"
//                 ref={tabContainerRef}
//               >
//                 {product.map((item) => (
//                   <Link
//                     key={item.id}
//                     href={`/products/${item.name[0].value}`}
//                     legacyBehavior
//                   >
//                     <a
//                       className={`flex flex-row min-w-max mr-4 ${
//                         item.id === openTab
//                           ? "text-ntl_orange"
//                           : "text-ntl_black"
//                       }`}
//                       onClick={() => handleTabClick(item.id)}
//                     >
//                       {item.name.length > 0 ? item.name[0].value : ""} for the
//                       stock market
//                       {item.id === openTab ? (
//                         <BsFillArrowDownRightCircleFill className="my-auto mx-2" />
//                       ) : (
//                         <BsFillArrowRightCircleFill className="my-auto mx-2" />
//                       )}
//                     </a>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="pb-10 leading-none">
//           <div className="hidden xsm:block sm:block">
//             <div>
//               {/* Render the table content as nested divs for mobile view */}
//               {formatTableRowsForMobile(formattedContent)}
//             </div>
//           </div>
//           <div className="block xsm:hidden sm:hidden">
//             <div>
//               {/* Render the table content as rows for desktop view */}
//               <div dangerouslySetInnerHTML={{ __html: formattedContent }} />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Contact />
//     </>
//   );
// };

// export default SingleProduct;
import React, { useState } from "react";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Contact from "../Homepage/Contact";
import Image from "next/image";

const SingleProduct = ({ service, services }) => {
  const [openTab, setOpenTab] = useState(service.id);

  // Filter out the current service from the services list
  const otherServices = services.filter((s) => s.id !== service.id);

  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="pb-10">
          <div className="company_bg">
            <div className="px-5">
              <p className="text-base font-normal text-ntl_black pt-10">
                Home/<span className="text-ntl_orange">{service.name}</span>
              </p>
              <div className="pt-20 pb-5">
                <p className="text-text_48 xsm:text-text_36 text-ntl_black font-semibold">
                  {service.name}
                </p>
                <div className="text-base text-ntl_gray">{service.subDesc}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-10 leading-none flex xsm:flex-col sm:flex-col justify-between">
          <div className="w-full my-auto">{service.description}</div>
          <div className="mx-5 xsm:pb-5 sm:pb-5"></div>
          <div className="w-full">
            <Image
              src={service.image}
              alt={service.name}
              width={400}
              height={400}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Grid of other services */}
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5 pb-10">
        <h2 className="text-2xl font-semibold mb-6">Other Services</h2>
        <div className="grid grid-cols-4 xsm:grid-cols-1 sm:grid-cols-1 gap-6">
          {otherServices.map((otherService, index) => (
            <div key={index} className="service_bg h-full rounded-3xl">
              <div className="p-6">
                <div className="flex justify-end">
                  <Link href={`/services/${otherService.name}`}>
                    <button className="flex flex-row">
                      <p className="mx-4">View More</p>
                      <BsFillArrowRightCircleFill className="my-auto text-2xl" />
                    </button>
                  </Link>
                </div>
                <div>
                  <p className="text-text_40 font-medium text-ntl_black mt-10 xsm:mb-4 sm:mb-4 w-4/5 leading-none">
                    {otherService.name} for the stock market
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Contact />
    </>
  );
};

export default SingleProduct;
