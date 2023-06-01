import Link from "next/link";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto p-7">
      <p className="md:items-center justify-center w-46  h-2 bg-[#F7AB0A] lg:gap-2 lg:w-28 /"></p>

      <div className="lg:flex lg:gap-52 space-y-10 ">
        <div>
          <div className="mb-10">
            <h3 className="font-bold w-[598px] lg:text-[75px] leading-[84px] text-[22px] text-[#E3E3E3] lg:h-[168px]">
              I’m Muyiwa, a frontend developer
            </h3>
          </div>
          <div>
            <p className="leading-[27px] sm:text-[18px] text-white lg:text-[#BABABA] lg:w-[588px] lg:font-normal lg:h-[81px]  ">
              A fast learner and results-driven professional with experience
              directing all aspects of Logistic management, generating new
              business opportunity routes and growing domestic and international
              trades.
            </p>
          </div>

          <div>
            <Link href="/#skills" scroll={true}>
              <div className=" flex relative border border-[#f7ab0a] bg-[#F7AB0A] rounded-full h-[80px] w-[80px] mt-10">
                <div className="flex absolute justify-center item-center top-3 left-0 right-0 h-full hover:animate-bounce">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-10 h-10"
                    color="#fff"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="  md:relative md:bottom-6 md:pt-1 md:pb-5">
          <div className="space-y-1.5 mb-3">
            <div className="flex ">
              <h3 className="text-white font-bold leading-[17.92px]  uppercase">
                About Me
              </h3>
            </div>
            <p className="lg:w-[286px]  leading-[27px] text-[18px]">
              A fast learner and results-driven professional with experience
              directing all aspects of Logistic management,{" "}
            </p>
            <div
              className=" flex lg:flex lg:items-center lg:mt-[26px] md:font-bold leading-3 lg:w-25 
             items-center gap-[8px] border-b-[1px] w-[99px] "
            >
              <div className="">
                <Link href="#about">Learn More</Link>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                  color="#F7AB0A"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="  space-y-3 mt-8 ">
            <div className="flex">
              <h3 className="text-white font-bold leading-[17.92px] lg:text-[16px]  uppercase">
                my work
              </h3>
            </div>
            <p className="lg:w-[286px] leading-[27px] text-[18px]">
              A fast learner and results-driven professional with experience
              directing all aspects of Logistic management,{" "}
            </p>
            <div className=" flex lg:mt-[26px] font-bold leading-[17.92px] lg:w-25  items-center gap-[8px] border-b-[1px] mb-[11px] w-[130px]">
              <div>
                <Link
                  href="/olabinjo_Muyiwa_cv.pdf"
                  download="/olabinjo_Muyiwa_cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dowload my CV
                </Link>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  color="#F7AB0A"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
