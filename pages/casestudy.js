import Applayout from "@/components/Layout/Applayout";
import CaseStudyMainsection from "@/components/OurCaseSudy/CaseStudyMainsection";
import React from "react";
import PageHead from "./PageHead";

function casestudy() {
  const pageTitle = "Neocon Technologies Limited / CaseStudy";
  return (
    <>
      <PageHead title={pageTitle} />
      <Applayout>
        <CaseStudyMainsection />
      </Applayout>
    </>
  );
}

export default casestudy;
