import React from "react";
import Form from "./Form";
import { BiSolidPhoneCall } from "react-icons/bi";
function Contact() {
  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="pb-10">
          
          <div className="grid grid-cols-2 xsm:grid-cols-1 sm:grid-cols-1 gap-6">
            <div className=" grid grid-cols-1 gap-6">
              <div>
                <p className="text-text_51 xsm:text-text_36 sm:text-text_36 font-semibold text-ntl_black w-4/5  xsm:w-full sm:w-full leading-none">
                  Build better communication for better
                  <span className="text-ntl_orange "> Business</span>
                </p>
              </div>
              <div>
                <div className="pb-2 mt-20 xsm:mt-10 sm:mt-10">
                  <p className="text-ntl_black text-lg font-semibold">
                    Phone Call
                  </p>
                  <div className="flex flex-row text-lg font-semibold">
                    <BiSolidPhoneCall className="my-auto text-ntl_orange" />
                    <p className="text-ntl_black pl-2">+880 9638-232323</p>
                  </div>
                </div>
                <div className="pb-2">
                  <p className="text-ntl_black text-lg font-semibold">Email</p>
                  <p className="text-sm font-normal text-ntl_orange cursor-pointer underline">
                    hello@neocongroup.com
                  </p>
                </div>
                <div>
                  <p className="text-ntl_black text-lg font-semibold">
                    Address
                  </p>
                  <p className="text-ntl_gray_3 text-sm font-normal ">
                    Land View Commercial Center (Level 3), 28.{" "}
                    <br className="block xsm:hidden sm:hidden" />
                    Gulshan North C/A, Gulshan 2. Dhaka 1212
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
