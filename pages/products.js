import Applayout from "@/components/Layout/Applayout";
import ProductMainSection from "@/components/OurProduct/ProductMainSection";
import React from "react";
import PageHead from "./PageHead";

function products() {
  const pageTitle = "Neocon Technologies Limited / Products";
  return (
    <>
    <PageHead title={pageTitle}/>
      <Applayout>
        <ProductMainSection />
      </Applayout>
    </>
  );
}

export default products;
