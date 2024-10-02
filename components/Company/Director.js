import React from "react";
import Image from "next/image";
function Director({ data }) {

  return (
    <>
      <div>
        <div>
          <div className="grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-1 gap-6">
            <div>
              <p className="text-text_41 xsm:text-3xl sm:text-3xl font-semibold text-ntl_black">
                “Board of <span className="text-ntl_orange"> Director</span>
              </p>
              <p className="text-base font-normal text-ntl_gray text-justify">
                A board of directors of neocon technologies is responsible for
                setting the strategic direction, overseeing its management, and
                ensuring that it complies with applicable laws and regulations.
              </p>
            </div>
            <div className="col-span-2 xsm:col-span-1 sm:col-span-1">
              {data.map((director, index) => {
                return (
                  <div
                    key={index}
                    className={`w-full flex  mb-10 ${
                      director.id % 2 === 0
                        ? "flex-row xsm:flex-col sm:flex-col "
                        : "flex-row-reverse xsm:flex-col sm:flex-col"
                    }`}
                  >
                    <div className="my-auto w-3/5 xsm:w-full sm:w-full">
                      <div
                        className={` flex ${
                          director.id % 2 === 0
                            ? " justify-start xsm:pb-5 sm:pb-5"
                            : "justify-end xsm:pb-5 sm:pb-5"
                        }`}
                      >
                        <div className="px-5 xsm:px-0 sm:px-0">
                          <div className="border-l-2 border-ntl_orange">
                            <div className="text-base font-normal text-ntl_black p-2 mb-3 text-justify">
                             
                              <div className="pb-2">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: director.about,
                                  }}
                                ></div>
                              </div>
                              
                            </div>
                          </div>
                          <div className="flex flex-row xsm:flex-col sm:flex-col">
                            <p className="text-base text-ntl_orange font-semibold">
                              {director.name}
                            </p>
                            <p className="text-sm font-normal text-ntl_gray my-auto mx-5 xsm:mx-0 sm:mx-0  mb-0">
                              {director.designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-auto w-2/5 xsm:w-full sm:w-full">
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_BACKEND_URL +
                          "/storage/" +
                          director.image
                        }
                      
                        alt="director image"
                        width={300}
                        height={300}
                        className="my-auto mx-auto rounded-lg w-auto h-auto 2xl:w-full xsm:w-full sm:w-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Director;
