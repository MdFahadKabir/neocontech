import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ImageMarquee = ({ images }) => {
  return (
    <>
      <div className="border-dashed border-t-2 border-t-ntl_gray_2 ">
        <Marquee
          speed={40} // Adjust the speed as needed
          pauseOnHover
          gradient={false} // Set to true if you want to add gradient effect
          className="py-8"
        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={typeof image === "string" ? image : image.image}
              alt={`Image ${index + 1}`}
              className="w-auto h-auto object-cover rounded-md mx-5  "
            />
          ))}
        </Marquee>{" "}
      </div>
    </>
  );
};

export default ImageMarquee;
