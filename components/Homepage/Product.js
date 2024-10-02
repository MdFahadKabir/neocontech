// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/splide.min.css";
// import { BsFillArrowRightCircleFill, BsFillArrowDownRightCircleFill } from "react-icons/bs";
// import Image from "next/image";

// // Function to fetch products from the backend API
// async function fetchProducts() {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product`);
//   if (!response.ok) {
//     throw new Error("Failed to fetch products");
//   }
//   return response.json();
// }

// // Function to get the product name from the product object
// // function getProductName(product) {
// //   if (Array.isArray(product.name) && product.name.length > 0) {
// //     return product.name;
// //   }
// //   return "N/A";
// // }

// const splideOptions = {
//   type: "loop",
//   perPage: 3,
//   perMove: 1,
//   autoplay: false,
//   arrows: false,
//   pagination: false,
//   rewind: false,
// };

// function Product() {
//   const [products, setProducts] = useState([]); // State to store the fetched products
//   const [activeCardIndex, setActiveCardIndex] = useState(0); // State to track the index of the active card
//   const [activeViewMoreIndex, setActiveViewMoreIndex] = useState(0); // State to track the index of the card for which more details are displayed
//   const [numVisibleCards, setNumVisibleCards] = useState(3); // State to track the number of visible cards in the carousel

//   // Fetch products from the backend when the component mounts
//   useEffect(() => {
//     async function getProducts() {
//       try {
//         const data = await fetchProducts();
//         setProducts(data);
//         console.log(data)
//       } catch (error) {
//         console.error("Error fetching Products:", error);
//       }
//     }
//     getProducts();
//   }, []);

//   // Adjust the number of visible cards based on window resize
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 768) {
//         setNumVisibleCards(1);
//       } else {
//         setNumVisibleCards(3);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // Set initial number of visible cards

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   // Handle the click event on a product card
//   const handleCardClick = (index) => {
//     setActiveCardIndex(index);
//     setActiveViewMoreIndex(index);
//   };

//   return (
//     <div>
//       <div>
//         <Splide options={{ ...splideOptions, perPage: numVisibleCards }}>
//           {products.map((product, index) => (
//             <SplideSlide key={index}>
//               <div
//                 className={`${
//                   activeCardIndex === index
//                     ? "feedback_bg_b text-ntl_white"
//                     : "feedback_bg text-ntl_black"
//                 } h-[300px]  mx-2 rounded-3xl transition-colors duration-500 ease-in-out cursor-pointer`}
//                 onClick={() => handleCardClick(index)}
//               >
//                 <div className="p-6">
//                   <div className="flex justify-end">
//                     <Link legacyBehavior href={`/products/${product.name}`}>
//                       <button className="flex flex-row">
//                         <p
//                           className={`mx-4 ${
//                             activeViewMoreIndex === index ? "text-ntl_orange" : ""
//                           }`}
//                         >
//                           {activeViewMoreIndex === index ? "Now Presenting" : "Click To View Feature"}
//                         </p>
//                         {activeCardIndex === index ? (
//                           <BsFillArrowDownRightCircleFill
//                             className={`my-auto mx-2 ${
//                               activeViewMoreIndex === index ? "text-ntl_orange" : ""
//                             }`}
//                           />
//                         ) : (
//                           <BsFillArrowRightCircleFill className="my-auto mx-2" />
//                         )}
//                       </button>
//                     </Link>
//                   </div>
//                   <div className="relative">
//                     <div className="absolute bottom-0 top-0">
//                       <div className="flex justify-between mt-10">
//                         <p className="text-text_40 font-medium leading-tight w-full">{product.title}</p>
//                         <div className="my-auto w-full">
//                           <Image
//                           src={
//                             process.env.NEXT_PUBLIC_BACKEND_URL +
//                             "/storage/" +
//                             product.single_image
//                           }
//                             // Display the first image from the array
//                             alt="product image"
//                             width={300}
//                         height={300}
//                             className="w-auto h-auto mx-auto"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SplideSlide>
//           ))}
//         </Splide>
//       </div>

//       <div className="pt-5">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className={activeCardIndex === index ? "block" : "hidden"}
//             id={`link${index + 1}`}
//           >
//             <div className="grid grid-cols-4 xsm:grid-cols-1 sm:grid-cols-1 gap-2">
//               {product.image.map((image, i) => (
//                 <div key={i} className="w-full mx-auto">
//                   <Image
//                   src={
//                     process.env.NEXT_PUBLIC_BACKEND_URL +
//                     "/storage/" +
//                     image
//                   }
//                     // src={image}
//                     alt={`Image ${i + 1}`}
//                     width={300}
//                         height={300}
//                     className="mx-auto mb-0 pb-0 w-auto h-80 rounded-3xl xsm:h-auto xsm:w-80 sm:h-auto sm:w-80"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Product;
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
