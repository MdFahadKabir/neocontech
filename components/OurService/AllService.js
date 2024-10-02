// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import Factor from "../Homepage/Factor";

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

// function AllService() {
//   const [services, setServices] = useState([]);

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
//   // console.log(services);

//   return (
//     <>
//       <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
//         <div className="pb-10">
//           <div className="grid grid-cols-4 xsm:grid-cols-1 sm:grid-cols-1 gap-6">
//             {services.map((service, index) => (
//               <div key={index}>
//                 <div className="service_bg h-full rounded-3xl">
//                   <div className="p-6">
//                     <div className="flex justify-end">
//                       <Link href={`/services/${getServiceName(service)}`}>
//                         <button className="flex flex-row">
//                           <p className="mx-4">View More</p>
//                           <BsFillArrowRightCircleFill className="my-auto text-2xl" />
//                         </button>
//                       </Link>
//                     </div>
//                     <div>
//                       <p className="text-text_40 font-medium text-ntl_black mt-10 xsm:mb-4 sm:mb-4 w-4/5 leading-none">
//                         {getServiceName(service)} for the stock market
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <Factor />
//       </div>
//     </>
//   );
// }

// export default AllService;
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Factor from "../Homepage/Factor";
import servicesData from "@/data/services.json"; // Import your services.json

function AllService() {
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

export default AllService;
