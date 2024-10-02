import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Applayout from "@/components/Layout/Applayout";
import SingleCasestudy from "@/components/OurCaseSudy/SingleCasestudy";

export default function SingleCasestudyPage() {
  const router = useRouter();
  const { name } = router.query;
  const [casestudy, setCaseStudy] = useState(null);

  useEffect(() => {
    async function fetchCaseData() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/case-study?name=${name}`
        );
        if (!response.ok) {
          throw new Error("casestudy not found.");
        }
        const casestudyData = await response.json();
        setCaseStudy(casestudyData);
        console.log(casestudyData);
      } catch (error) {
        console.error("Error fetching casestudy:", error);
        setCaseStudy(null);
      }
    }

    if (name) {
      fetchCaseData();
    }
  }, [name]);

  if (!casestudy) {
    return <div>casestudy not found.</div>;
  }

  return (
    <Applayout>
      <SingleCasestudy casestudy={casestudy} />
    </Applayout>
  );
}
