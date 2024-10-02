import CompanyMainsection from "@/components/Company/CompanyMainsection";
import Applayout from "@/components/Layout/Applayout";
import React from "react";
import PageHead from "./PageHead";

function company() {
  const pageTitle = "Neocon Technologies Limited / Company";
  return (
    <>
      <PageHead title={pageTitle}/>
      <Applayout>
        <CompanyMainsection />
      </Applayout>
    </>
  );
}

export default company;
