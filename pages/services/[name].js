// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import Applayout from "@/components/Layout/Applayout";
// import SingleService from "@/components/OurService/SingleService";

// export default function SingleServicePage() {
//   const router = useRouter();
//   const { name } = router.query;
//   const [service, setService] = useState(null);

//   useEffect(() => {
//     async function fetchServiceData() {
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/service?name=${name}`
//         );
//         if (!response.ok) {
//           throw new Error("Service not found.");
//         }
//         const serviceData = await response.json();
//         setService(serviceData);
//         console.log(serviceData)
//       } catch (error) {
//         console.error("Error fetching service:", error);
//         setService(null);
//       }
//     }

//     if (name) {
//       fetchServiceData();
//     }
//   }, [name]);

//   if (!service) {
//     return <div>Service not found.</div>;
//   }

//   return (
//     <Applayout>
//       <SingleService service={service} />
//     </Applayout>
//   );
// }

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Applayout from "@/components/Layout/Applayout";
import SingleService from "@/components/OurService/SingleService";
import servicesData from "@/data/services.json"; // Import your services.json

export default function SingleServicePage() {
  const router = useRouter();
  const { name } = router.query;
  const [service, setService] = useState(null);

  useEffect(() => {
    if (name) {
      const foundService = servicesData.services.find(
        (service) => service.name === name
      );
      setService(foundService);
    }
  }, [name]);

  if (!service) {
    return <div>Service not found.</div>;
  }

  return (
    <Applayout>
      <SingleService service={service} services={servicesData.services} />
    </Applayout>
  );
}
