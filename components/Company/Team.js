import React from "react";
import Image from "next/image";

function Team({ data }) {
  console.log(data);
  return (
    <>
      <div>
        <div>
          <div className="grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-1 gap-6">
            <div>
              <p className="text-text_41 xsm:text-3xl sm:text-3xl font-semibold text-ntl_black">
                “We are like a <span className="text-ntl_orange"> family</span>
              </p>
              <p className="text-base font-normal text-ntl_gray text-justify">
                Neocon Technologies Limited takes pride in its exceptional
                leadership team, driving innovation and spearheading the
                company's success in providing cutting-edge solutions for the
                stock market.
              </p>
            </div>
            <div className="col-span-2 xsm:col-span-1 sm:col-span-1 border-2 border-t-0 border-b-0 border-dashed border-ntl_orange">
              {data.map((team, index) => {
                return (
                  <div
                    key={index}
                    className={`w-full flex  mb-10  ${
                      team.id % 2 === 0
                        ? "flex-row xsm:flex-col sm:flex-col "
                        : "flex-row-reverse xsm:flex-col sm:flex-col"
                    }`}
                  >
                    <div className="my-auto w-3/5 xsm:w-full sm:w-full">
                      <div
                        className={` flex ${
                          team.id % 2 === 0
                            ? " justify-start xsm:pb-5 sm:pb-5"
                            : "justify-end xsm:pb-5 sm:pb-5"
                        }`}
                      >
                        <div className="px-5">
                          <p className="text-base text-ntl_orange font-semibold pb-2">
                            {team.name}
                          </p>
                          <div>
                            <div className="text-base font-normal text-ntl_black mb-3 text-justify">
                              <div className="pb-2">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: team.about,
                                  }}
                                ></div>
                              </div>
                              
                            </div>
                          </div>

                          <p className="text-sm font-normal text-ntl_gray">
                            {team.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`my-auto w-2/5 xsm:w-full sm:w-full flex xsm:justify-center sm:justify-center${
                        team.id % 2 === 0 ? "justify-end " : "justify-start"
                      }`}
                    >
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_BACKEND_URL +
                          "/storage/" +
                          team.image
                        }
                        alt="team image"
                        width={300}
                        height={300}
                        className="my-auto  rounded-lg w-auto h-auto 2xl:w-full xsm:w-full sm:w-full border-2 border-ntl_orange "
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

export default Team;
