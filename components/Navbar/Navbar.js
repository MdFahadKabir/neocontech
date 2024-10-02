import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiCircle, FiX } from "react-icons/fi";
import { HiMenuAlt3 } from "react-icons/hi";
import NeoconTechnologies from "../../public/assets/navbar/navbarlogo.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="sticky z-50 top-0 left-0 right-0 w-full">
        <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5 bg-ntl_white/60  backdrop-blur-sm backdrop-filter">
          <div className="py-5">
            <div className="flex justify-between">
              <Link href="/" className="cursor-pointer">
                <Image
                  src={NeoconTechnologies}
                  alt="neocon group.png"
                  className="w-44  h-auto"
                />
              </Link>
              <div className="flex flex-row my-auto">
                <div className="hidden xsm:block sm:block">
                  {isMobileMenuOpen ? (
                    <FiX
                      className="my-auto text-2xl text-ngl_black"
                      onClick={toggleMobileMenu}
                    />
                  ) : (
                    <HiMenuAlt3
                      className="my-auto text-2xl text-black"
                      onClick={toggleMobileMenu}
                    />
                  )}
                </div>
                <div className="xsm:hidden sm:hidden flex flex-row xsm:flex-col sm:flex-col my-auto">
                  <Link href="/company" className="flex flex-row mx-5">
                    <FiCircle
                      size={10}
                      className="my-auto text-xs text-ngl_orange"
                    />
                    <p className="pl-2 font-medium">Company</p>
                  </Link>
                  <Link href="/services" className="flex flex-row mx-5">
                    <FiCircle
                      size={10}
                      className="my-auto text-xs text-ngl_orange"
                    />
                    <p className="pl-2 font-medium">Services</p>
                  </Link>
                  <Link href="/products" className="flex flex-row mx-5">
                    <FiCircle
                      size={10}
                      className="my-auto text-xs text-ngl_orange"
                    />
                    <p className="pl-2 font-medium">Products</p>
                  </Link>
                  <Link href="/casestudy" className="flex flex-row mx-5">
                    <FiCircle
                      size={10}
                      className="my-auto text-xs text-ngl_orange"
                    />
                    <p className="pl-2 font-medium">Case Study</p>
                  </Link>
                  <Link href="/contactus" className="flex flex-row mx-5">
                    <FiCircle
                      size={10}
                      className="my-auto text-xs text-ngl_orange"
                    />
                    <p className="pl-2 font-medium">Contact Us</p>
                  </Link>
                </div>
              </div>
            </div>
            {isMobileMenuOpen && (
              <div className="md:hidden">
                <Link href="/company" className="block my-3 mx-5">
                  <p className="font-medium">Company</p>
                </Link>
                <Link href="/service" className="block my-3 mx-5">
                  <p className="font-medium">Services</p>
                </Link>
                <Link href="/products" className="block my-3 mx-5">
                  <p className="font-medium">Products</p>
                </Link>
                <Link href="/casestudy" className="block my-3 mx-5">
                  <p className="font-medium">Case Study</p>
                </Link>
                <Link href="/contactus" className="block my-3 mx-5">
                  <p className="font-medium">Contact Us</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
