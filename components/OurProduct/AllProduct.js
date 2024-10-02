// import React from "react";
// import Link from "next/link";
// import Product from "../Homepage/Product";
// import Factor from "../Homepage/Factor";

// function AllProduct() {
//   return (
//     <>
//       <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
//         <div className="pb-10">
//           <div>
//             <Product />
//           </div>
//         </div>
//         <Factor />
//       </div>
//     </>
//   );
// }

// export default AllProduct;
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Factor from "../Homepage/Factor";
import servicesData from "@/data/services.json"; // Import your services.json

function AllProduct() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesData.services);
  }, []);

  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="pb-10">
          <div className="grid grid-cols-4 xsm:grid-cols-1 sm:grid-cols-1 gap-6">
            {services.map((service, index) => (
              <div key={index}>
                <div className="service_bg h-full rounded-3xl">
                  <div className="p-6">
                    <div className="flex justify-end">
                      <Link href={`/services/${service.name}`}>
                        <button className="flex flex-row">
                          <p className="mx-4">View More</p>
                          <BsFillArrowRightCircleFill className="my-auto text-2xl" />
                        </button>
                      </Link>
                    </div>
                    <div>
                      <p className="text-text_40 font-medium text-ntl_black mt-10 xsm:mb-4 sm:mb-4 w-4/5 leading-none">
                        {service.name} for the stock market
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Factor />
      </div>
    </>
  );
}

export default AllProduct;
