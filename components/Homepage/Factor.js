import React from "react";
import Image from "next/image";
import Customer from "../../public/assets/homepage/customer.png";
import People from "../../public/assets/homepage/people.png";
import Support from "../../public/assets/homepage/support.png";
import Factorbg from "../../public/assets/homepage/factorbg.png";
import { BiSquareRounded } from "react-icons/bi";

function Factor() {
  return (
    <>
      <div className="">
        <div className="pb-10">
          <div className="flex flex-row pb-5">
            <BiSquareRounded className="my-auto xsm:mt-0 sm:mt-0 text-ntl_orange xsm:text-2xl sm:text-2xl" />
            <p className="text-text_51 xsm:text-text_32 sm:text-text_32 font-bold text-ntl_black pl-5 leading-none">
              Why is Neocon the best for
              <span className="text-ntl_orange"> best</span> you?
            </p>
          </div>
          <div>
            <div className="flex grid-cols-3 gap-6 h-full xsm:overflow-x-scroll sm:overflow-x-scroll xsm:overflow-hidden sm:overflow-hidden">
              <div className="w-full h-[600] xsm:h-full sm:h-full rounded-3xl factor_bg xsm:min-w-full sm:min-w-full">
                <div className="flex flex-col">
                  <div className="p-5">
                    <p className="text-text_32 font-semibold text-ntl_black leading-none pb-2">
                      Customers <br />
                      <span className="text-ntl_orange"> First</span>
                    </p>
                    <p className="text-base font-normal text-justify">
                      At Neocon Technologies, our customers are at the core of
                      everything we do. We understand that your success is
                      directly linked to our own, which is why we make it a
                      priority to listen to your unique needs, challenges, and
                      goals. By taking the time to understand your requirements,
                      we can tailor our solutions to best meet your specific
                      business objectives.
                    </p>
                  </div>
                  <div className="mx-auto ">
                    <div className=" ">
                      <Image
                        src={Customer}
                        alt="factor image .png"
                        className="w-auto h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-[600] xsm:h-full sm:h-full rounded-3xl mx-5 factor_bg xsm:min-w-full sm:min-w-full">
                <div className="flex flex-col-reverse">
                  <div className="">
                    <div className="p-5 ">
                      <p className="text-text_32 font-semibold text-ntl_black leading-none pb-2">
                        Amazing
                        <br />
                        <span className="text-ntl_orange"> People</span>
                      </p>
                      <p className="text-base font-normal text-justify">
                        We take great pride in our team of amazing people who
                        are passionate, skilled, and dedicated to delivering
                        exceptional results. Our professionals possess deep
                        industry knowledge, technical expertise, and a genuine
                        enthusiasm for fintech innovation. They are not only
                        adept at understanding the intricacies of the financial
                        industry, but they also can think creatively and find
                        unique solutions to complex challenges.
                      </p>
                    </div>
                  </div>
                  <div className="mx-auto">
                    <Image
                      src={People}
                      alt="factor image .png"
                      className="w-auto h-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-[600] xsm:h-full sm:h-full rounded-3xl factor_bg xsm:min-w-full sm:min-w-full">
                <div className="flex flex-col ">
                  <div className="p-5">
                    <p className="text-text_32 font-semibold text-ntl_black leading-none pb-2">
                      Great
                      <br />
                      <span className="text-ntl_orange"> Support</span>
                    </p>
                    <p className="text-base font-normal text-justify">
                      Neocon Technologies recognize the importance of providing
                      great support to our clients. We understand that
                      technology implementations and ongoing operations can
                      sometimes come with questions or challenges, which is why
                      our dedicated support team is always ready to assist you.
                      Whether you have technical inquiries, need guidance, or
                      require troubleshooting, our responsive support team is
                      just a phone call or email away.
                    </p>
                  </div>
                  <div className="mx-auto">
                    <div className="">
                      <Image
                        src={Support}
                        alt="factor image .png"
                        className="w-auto h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Factor;
