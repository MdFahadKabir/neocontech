// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/splide.min.css";
// import Servicebg from "../../public/assets/homepage/ourservicebg.png";
// import { BiSquareRounded } from "react-icons/bi";
// import { FaArrowRight } from "react-icons/fa";
// import { BsFillArrowRightCircleFill } from "react-icons/bs";

// async function fetchServices() {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/service`
//   );
//   if (!response.ok) {
//     throw new Error("Failed to fetch services");
//   }
//   return response.json();
// }

// function getServiceName(service) {
//   // Check if service.name is an array and has elements
//   if (Array.isArray(service.name) && service.name.length > 0) {
//     return service.name[0].value;
//   }
//   // Default value if service.name is not an array or has no elements
//   return "N/A";
// }

// function OurService() {
//   const splideRef = useRef(null);
//   const [visibleSlides, setVisibleSlides] = useState(5);
//   const [perPage, setPerPage] = useState(5);
//   const [activeCardIndex, setActiveCardIndex] = useState(0);
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     const handleResize = () => {
//       const screenWidth = window.innerWidth;
//       if (screenWidth < 768) {
//         setPerPage(1);
//         setVisibleSlides(1);
//       } else {
//         setPerPage(5);
//         setVisibleSlides(5);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (splideRef.current) {
//         splideRef.current.go("+1");
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleNextSlide = () => {
//     if (splideRef.current) {
//       splideRef.current.go("+2");
//     }
//   };

//   const splideOptions = {
//     type: "loop",
//     perPage: perPage,
//     perMove: 1,
//     autoplay: true,
//     interval: 2000,
//     arrows: false,
//     pagination: false,
//     on: {
//       moved: (newIndex) => {
//         setActiveCardIndex(newIndex);
//       },
//     },
//   };

//   useEffect(() => {
//     async function getServices() {
//       try {
//         const data = await fetchServices();
//         setServices(data);
//       } catch (error) {
//         console.error("Error fetching services:", error);
//       }
//     }
//     getServices();
//   }, []);

//   return (
//     <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
//       <div className="pb-10">
//         <div className="flex justify-between">
//           <div className="flex flex-row">
//             <BiSquareRounded className="my-auto text-ntl_orange" />
//             <p className="text-text_51 xsm:text-text_32 sm:text-text_32 font-bold text-ntl_black pl-5">
//               Our <span className="text-ntl_orange"> Service</span>
//             </p>
//           </div>
//           <FaArrowRight
//             onClick={handleNextSlide}
//             className="my-auto text-ntl_orange text-lg"
//           />
//         </div>
//         {/* card */}
//         <div>
//           <Splide
//             options={splideOptions}
//             ref={splideRef}
//             onMoved={(splide) => setActiveCardIndex(splide.index)}
//           >
//             {services.map((service, index) => (
//               <SplideSlide key={index}>
//                 <div
//                   className={`${
//                     activeCardIndex === index && index !== 0
//                       ? "feedback_bg_b text-ntl_white"
//                       : "feedback_bg text-ntl_black"
//                   } xsm:h-[330px] h-[400px] mx-2 rounded-3xl transition-colors  duration-500 ease-in-out`}
//                 >
//                   <div className="">
//                     <div className="flex justify-end">
//                       <Link href={`/services/${getServiceName(service)}`}>
//                         <button className="flex flex-row pr-10 pt-4">
//                           <p className="mx-4">View More</p>
//                           <BsFillArrowRightCircleFill className="my-auto text-2xl" />
//                         </button>
//                       </Link>
//                     </div>
//                     <div className="relative">
//                       <div className="absolute top-40 bottom-0 right-0 z-20">
//                         <Image
//                           src={Servicebg}
//                           alt="Service bg .png"
//                           className="w-auto hu-auto"
//                         />
//                       </div>
//                       <div className="z-30 absolute top-20 xsm:top-6 sm:top-6 bottom-0">
//                         <p className="text-text_40 font-medium leading-tight px-10 xsm:px-0 xsm:pl-10 xsm:pr-16">
//                           {getServiceName(service)} for the stock market
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SplideSlide>
//             ))}
//           </Splide>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OurService;
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Servicebg from "../../public/assets/homepage/ourservicebg.png";
import { BiSquareRounded } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import servicesData from "@/data/services.json";

function OurService() {
  const splideRef = useRef(null);
  const [visibleSlides, setVisibleSlides] = useState(5);
  const [perPage, setPerPage] = useState(5);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setPerPage(1);
        setVisibleSlides(1);
      } else {
        setPerPage(5);
        setVisibleSlides(5);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (splideRef.current) {
        splideRef.current.go("+1");
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    if (splideRef.current) {
      splideRef.current.go("+2");
    }
  };

  const splideOptions = {
    type: "loop",
    perPage: perPage,
    perMove: 1,
    autoplay: true,
    interval: 2000,
    arrows: false,
    pagination: false,
    on: {
      moved: (newIndex) => {
        setActiveCardIndex(newIndex);
      },
    },
  };

  return (
    <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
      <div className="pb-10">
        <div className="flex justify-between">
          <div className="flex flex-row">
            <BiSquareRounded className="my-auto text-ntl_orange" />
            <p className="text-text_51 xsm:text-text_32 sm:text-text_32 font-bold text-ntl_black pl-5">
              Our <span className="text-ntl_orange">Service</span>
            </p>
          </div>
          <FaArrowRight
            onClick={handleNextSlide}
            className="my-auto text-ntl_orange text-lg"
          />
        </div>
        {/* Card Carousel */}
        <div>
          <Splide
            options={splideOptions}
            ref={splideRef}
            onMoved={(splide) => setActiveCardIndex(splide.index)}
          >
            {servicesData.services.map((service, index) => (
              <SplideSlide key={index}>
                <div
                  className={`${
                    activeCardIndex === index && index !== 0 ? "" : ""
                  } xsm:h-[330px] h-[400px] mx-2 rounded-3xl transition-colors duration-500 ease-in-out feedback_bg text-ntl_black`}
                >
                  <div className="">
                    <div className="flex justify-end">
                      <Link href={`/services/${service.name}`}>
                        <button className="flex flex-row pr-10 pt-4">
                          <p className="mx-4">View More</p>
                          <BsFillArrowRightCircleFill className="my-auto text-2xl" />
                        </button>
                      </Link>
                    </div>
                    <div className="relative">
                      <div className="absolute top-40 bottom-0 right-0 z-20">
                        <Image
                          src={Servicebg}
                          alt="Service bg .png"
                          className="w-auto hu-auto"
                        />
                      </div>
                      <div className="z-30 absolute top-20 xsm:top-6 sm:top-6 bottom-0">
                        <p className="text-text_40 font-medium leading-tight px-10 xsm:px-0 xsm:pl-10 xsm:pr-16">
                          {service.name} for the stock market
                        </p>
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
  );
}

export default OurService;
