import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Applayout from "@/components/Layout/Applayout";
import SingleProduct from "@/components/OurProduct/SingleProduct";

export default function SingleProductPage() {
  const router = useRouter();
  const { name } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProductData() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product?name=${name}`
        );
        if (!response.ok) {
          throw new Error("product not found.");
        }
        const productData = await response.json();
        setProduct(productData);
        console.log(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      }
    }

    if (name) {
      fetchProductData();
    }
  }, [name]);

  if (!product) {
    return <div>product not found.</div>;
  }

  return (
    <Applayout>
      <SingleProduct product={product} />
    </Applayout>
  );
}
