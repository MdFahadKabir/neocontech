import Applayout from "@/components/Layout/Applayout";

import React from "react";
import PageHead from "./PageHead";
import ContactusMainsection from "@/components/ContactUs/ContactusMainsection";

function services() {
  const pageTitle = "Neocon Technologies Limited / Contact Us";
  return (
    <>
      <PageHead title={pageTitle} />
      <Applayout>
        <ContactusMainsection />
      </Applayout>
    </>
  );
}

export default services;
