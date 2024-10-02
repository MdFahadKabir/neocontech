import React from "react";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";
function Contact() {
  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="pb-10">
          <div>
            <div className="w-full">
              <div className="bg-gradient-to-r from-[#F5F5F5] to-[#F3F3F4] rounded-xl px-6 py-3 flex justify-between xsm:flex-col sm:flex-col w-full">
                <p className="text-text_51 xsm:text-text_28 sm:text-text_28 xsm:text-center sm:text-center font-semibold text-ntl_black xsm:leading-tight sm:leading-tight xsm:pb-3 sm:pb-3">
                  Let’s Build Your
                  <span className="text-ntl_orange "> Business</span>
                </p>
                <div className="my-auto">
                  <Link href="/contact-us">
                    <button className="flex flex-row bg-ntl_black py-3 px-10 rounded-xl xsm:mx-auto sm:mx-auto">
                      <p className="text-base font-regular text-ntl_white">
                        Contact Us
                      </p>
                      <FaPaperPlane className="my-auto text-ntl_white pl-1" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
