import Applayout from "@/components/Layout/Applayout";
import ServiceMainSection from "@/components/OurService/ServiceMainSection";
import React from "react";
import PageHead from "./PageHead";

function services() {
  const pageTitle = "Neocon Technologies Limited / Service";
  return (
    <>
      <PageHead title={pageTitle} />
      <Applayout>
        <ServiceMainSection />
      </Applayout>
    </>
  );
}

export default services;
