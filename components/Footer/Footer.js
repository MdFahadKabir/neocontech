import React from "react";
import Link from "next/link";
import Image from "next/image";
import footerlogo from "../../public/assets/footer/footerlogo.png";
// import tech from "../../public/assets/footer/tech.png";
// import get from "../../public/assets/footer/gate.png";
// import ino from "../../public/assets/footer/ino.png";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { BiSolidPhoneCall } from "react-icons/bi";

function Footer() {
  return (
    <>
      <div className="bg-ntl_black">
        <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
          <div className="footer_bg">
            <div className="flex justify-between p-5 ">
              <div>
                <Link href="/">
                  <Image
                    src={footerlogo}
                    alt="footer logo png"
                    className="w-44 xsm:w-32 sm:w-32  h-auto"
                  />
                </Link>
              </div>
              <div className="my-auto flex flex-row text-ntl_white">
                <Link href="/" className="mx-2">
                  <FaInstagram className="w-6 xsm:w-4 sm:w-4 h-auto" />
                </Link>
                <Link href="/" className="mx-2">
                  <FaLinkedin className="w-6 xsm:w-4 sm:w-4 h-auto" />
                </Link>
                <Link href="/" className="mx-2">
                  <FaFacebookSquare className="w-6 xsm:w-4 sm:w-4 h-auto" />
                </Link>
                <Link href="/" className="mx-2">
                  <FaTwitter className="w-6 xsm:w-4 sm:w-4 h-auto" />
                </Link>
                {/*  */}
              </div>
            </div>
            <div className="pt-5 pb-10 px-5 border-t border-b border-ntl_gray_2/30 border-dashed">
              <div className="grid grid-cols-4 xsm:grid-cols-2 sm:grid-cols-2 gap-20 xsm:gap-2 sm:gap-2">
                <div>
                  <div className="flex flex-col">
                    <p className="text-text_26 xsm:text-2xl sm:text-2xl font-semibold text-ntl_white pb-3">
                      Comapny
                    </p>
                    <div className="flex flex-col text-base font-regular text-ntl_white">
                      <p className="pb-1">About Us</p>
                      <p className="pb-1">Contact Us</p>
                      <p className="pb-1">News Room</p>
                      <p className="pb-1">Faqs</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col">
                    <p className="text-text_26 xsm:text-2xl sm:text-2xl font-semibold text-ntl_white pb-3">
                      Resources
                    </p>
                    <div className="flex flex-col text-base font-regular text-ntl_white">
                      <p className="pb-1">Privacy Policy</p>
                      <p className="pb-1">Terms & Condition</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col">
                    <p className="text-text_26 xsm:text-2xl sm:text-2xl font-semibold text-ntl_white pb-3">
                      Products
                    </p>
                    <div className="flex flex-col text-base font-regular text-ntl_white">
                      <p className="pb-1">Order Management System [OMS]</p>
                      <p className="pb-1">AI Trade Bot</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col">
                    <p className="text-text_26 xsm:text-2xl sm:text-2xl font-semibold text-ntl_white pb-3">
                      Address
                    </p>
                    <div className="flex flex-col text-base font-regular text-ntl_white">
                      <div className="flex flex-row xsm:flex-col sm:flex-col  pb-1">
                        <div className="my-auto w-5">
                          <BiSolidPhoneCall />
                        </div>

                        <p className="pl-2">+880 9638 232323</p>
                      </div>
                      <div className="flex flex-row xsm:flex-col sm:flex-col  pb-1">
                        <div className="my-auto w-5">
                          <IoMdMail />
                        </div>
                        <p className="pl-2">hello@neocon.tech</p>
                      </div>
                      <div className="flex flex-row xsm:flex-col sm:flex-col  pb-1">
                        <div className="mt-1 w-5">
                          <ImLocation />
                        </div>
                        <p className="pl-2">
                          Land View Commercial Center (Level 3), 28.Gulshan
                          North C/A, Gulshan 2, Dhaka 1212Bangladesh.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-5">
              <p className="text-base font-regular text-ntl_gray_2 ">
                © Copyright 2023{" "}
                <span className="text-ntl_orange"> NEOCON</span> All rights
                reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
