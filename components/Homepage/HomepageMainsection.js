import React from "react";
import Hero from "./Hero";
import OurService from "./OurService";
import WhoWeAre from "./WhoWeAre";
import Factor from "./Factor";
import Technology from "./Technology";
import Feedback from "./Feedback";
import Contact from "./Contact";
import CaseStudy from "./CaseStudy";
import OurProducts from "./OurProducts";

function HomepageMainsection() {
  return (
    <>
      <Hero />
      <OurService />
      <WhoWeAre />
      <OurProducts />
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <Factor />
      </div>

      <Technology />
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
       <Feedback />
      </div>
      
      <CaseStudy />
      <Contact />
    </>
  );
}

export default HomepageMainsection;
