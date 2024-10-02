// import React, { useEffect, useState } from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/splide.min.css";
// import Image from "next/image";
// import { BiSquareRounded } from "react-icons/bi";
// import { FaArrowRight } from "react-icons/fa";
// import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import Link from "next/link";

// function CaseStudy() {
//   const splideOptions = {
//     type: "loop",
//     perPage: 2,
//     autoplay: true,
//     pauseOnHover: false,
//     speed: 2000,
//     interval: 4000,
//     arrows: false,
//     pagination: false,
//     breakpoints: {
//       640: {
//         perPage: 1,
//       },
//       768: {
//         perPage: 2,
//       },
//       1024: {
//         perPage: 2,
//       },
//     },
//   };
//   const [caseStudies, setCaseStudies] = useState([]);

//   useEffect(() => {
//     // Fetch data from the backend API endpoint
//     const fetchCaseStudies = async () => {
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/case-study`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch case studies");
//         }
//         const data = await response.json();
//         setCaseStudies(data);
//       } catch (error) {
//         console.error(error);
//         // Handle error (e.g., show an error message or retry)
//       }
//     };

//     fetchCaseStudies();
//   }, []);
//   return (
//     <>
//       <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
//         <div className="pb-10">
//           <div className="flex flex-row pb-5">
//             <BiSquareRounded className="my-auto text-ntl_orange" />
//             <p className="text-text_51 xsm:text-text_32 sm:text-text_32 font-bold text-ntl_black pl-5">
//               Case <span className="text-ntl_orange"> Studies</span>
//             </p>
//           </div>
//           <div>
//             <div className="flex flex-row xsm:flex-col sm:flex-col">
//               <div className="w-10/12 xsm:w-full sm:w-full">
//                 <div>
//                   <Splide options={splideOptions}>
//                     {caseStudies.map((casestudy, index) => (
//                       <SplideSlide key={index}>
//                         <div className="h-full">
//                           <div className="flex flex-col p-5 rounded-3xl feedback_bg mx-5 xsm:mx-2 h-full ">
//                             <div className="flex justify-end">
//                               <button className="flex flex-row pt-4">
//                                 <p className="mx-4">View More</p>
//                                 <BsFillArrowRightCircleFill className="my-auto text-2xl" />
//                               </button>
//                             </div>
//                             <div className="flex justify-between mt-20 xsm:mt-10">
//                               <div className="text-text_40 xsm:text-text_32 sm:text-text_32 font-medium text-ntl_black leading-none w-9/12 xsm:w-full sm:w-full my-auto">
//                                 <p>{casestudy.name}</p>
//                               </div>
//                               <div className="w-3/12 xsm:w-full sm:w-full my-auto">
//                                 <Image
//                                   src={
//                                     process.env.NEXT_PUBLIC_BACKEND_URL +
//                                     "/storage/" +
//                                     casestudy.image
//                                   }
//                                   width={300}
//                                   height={300}
//                                   alt="case study .png"
//                                   className="w-auto h-auto mb-0 pb-0 my-auto"
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </SplideSlide>
//                     ))}
//                   </Splide>
//                 </div>
//               </div>
//               <div className="w-2/12 xsm:w-full sm:w-full xsm:mt-5 sm:mt-5">
//                 <Link href="/casestudy">
//                   <div className="case_bg rounded-3xl">
//                     <div className="text-sm text-ntl_white px-5 pb-10 pt-40  2xl:pt-44 2xl:pb-5 xsm:pt-20 sm:pt-5 ">
//                       <p>click here to</p>
//                       <p className="text-ntl_orange text-text_28">View All</p>
//                       <div className="flex justify-between">
//                         <p>case studies</p>
//                         <FaArrowRight className="my-auto text-ntl_orange text-lg" />
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CaseStudy;
import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import { BiSquareRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";

const caseStudyData = [
  {
    id: 1,
    name: "Case Study 1",
    title: "Project Alpha",
    description: "<p>This is the description for Case Study 1</p>",
    subDesc: "<p>Short description for Case Study 1</p>",
    tags: [{ value: "Finance" }, { value: "Tech" }],
    image: "/assets/service/service1.png",
  },
  {
    id: 2,
    name: "Case Study 2",
    title: "Project Beta",
    description: "<p>This is the description for Case Study 2</p>",
    subDesc: "<p>Short description for Case Study 2</p>",
    tags: [{ value: "Health" }, { value: "Wellness" }],
    image: "/assets/service/service1.png",
  },
  {
    id: 3,
    name: "Case Study 3",
    title: "Project Alpha",
    description: "<p>This is the description for Case Study 1</p>",
    subDesc: "<p>Short description for Case Study 1</p>",
    tags: [{ value: "Finance" }, { value: "Tech" }],
    image: "/assets/service/service1.png",
  },
  {
    id: 4,
    name: "Case Study 4",
    title: "Project Beta",
    description: "<p>This is the description for Case Study 2</p>",
    subDesc: "<p>Short description for Case Study 2</p>",
    tags: [{ value: "Health" }, { value: "Wellness" }],
    image: "/assets/service/service1.png",
  },
];

function CaseStudy() {
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

  const [caseStudies] = useState(caseStudyData);

  return (
    <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
      <div className="pb-10">
        <div className="flex flex-row pb-5">
          <BiSquareRounded className="my-auto text-ntl_orange" />
          <p className="text-text_51 xsm:text-text_32 sm:text-text_32 font-bold text-ntl_black pl-5">
            Case <span className="text-ntl_orange">Studies</span>
          </p>
        </div>
        <div>
          <div className="flex flex-row xsm:flex-col sm:flex-col">
            <div className="w-10/12 xsm:w-full sm:w-full">
              <Splide options={splideOptions}>
                {caseStudies.map((casestudy, index) => (
                  <SplideSlide key={index}>
                    <div className="h-full">
                      <div className="flex flex-col p-5 rounded-3xl feedback_bg mx-5 xsm:mx-2 h-full ">
                        <div className="flex justify-end">
                          <button className="flex flex-row pt-4">
                            <p className="mx-4">View More</p>
                            <BsFillArrowRightCircleFill className="my-auto text-2xl" />
                          </button>
                        </div>
                        <div className="flex justify-between mt-20 xsm:mt-10">
                          <div className="text-text_40 xsm:text-text_32 sm:text-text_32 font-medium text-ntl_black leading-none w-9/12 xsm:w-full sm:w-full my-auto">
                            <p>{casestudy.name}</p>
                          </div>
                          <div className="w-3/12 xsm:w-full sm:w-full my-auto">
                            <Image
                              src={casestudy.image}
                              width={300}
                              height={300}
                              alt="case study"
                              className="w-auto h-auto mb-0 pb-0 my-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            <div className="w-2/12 xsm:w-full sm:w-full xsm:mt-5 sm:mt-5">
              <Link href="/">
                <div className="case_bg rounded-3xl">
                  <div className="text-sm text-ntl_white px-5 pb-10 pt-40 2xl:pt-44 2xl:pb-5 xsm:pt-20 sm:pt-5">
                    <p>click here to</p>
                    <p className="text-ntl_orange text-text_28">View All</p>
                    <div className="flex justify-between">
                      <p>case studies</p>
                      <FaArrowRight className="my-auto text-ntl_orange text-lg" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
