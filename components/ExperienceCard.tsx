import React from "react";
import Link from "next/link";
import Image from "next/image";
import Web3 from "../public/Hi.png";
import D2v from "../public/d2v.jpg";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <div>
      <div className=" lg:flex-row flex-col flex gap-6 justify-center items-center">
        <div className="bg-[#33353A] p-10 rounded-md w-[486px] flex flex-col justify-center items-center text-center lg:block lg:text-left">
          <div className=" ">
            <Image
              className="h-20 w-20  rounded-full"
              src={D2v}
              alt="holiday"
            />
          </div>
          <div className=" flex-col items-center justify-center ">
            <div className="">
              <p className="font-bold leading-9 text-base">Data2Value</p>
            </div>

            <div className=" ">
              <p className="text-[#F7AB0A] leading-6">Oct 2022 - Mar 2023</p>
            </div>
          </div>
          <div className=" w-[380px] h-[135px]">
            <p className="text-base font-normal">
              A fast learner and results-driven professional with experience
              directing all aspects of Logistic management, generating new
              business opportunity routes and growing domestic and international
              trades..
            </p>
          </div>
          <div className="flex items-center justify-center gap-2  lg:float-left">
            <div className="border-b-2">
              <Link
                href="https://m2109-mbkpgrmud-olaa234.vercel.app"
                target="_blank"
              >
                See my work on Github
              </Link>
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
        <div className="bg-[#33353A] p-10 rounded-md w-[486px] flex flex-col justify-center items-center text-center lg:block lg:text-left">
          <div className=" ">
            <Image
              className="h-20 w-20  rounded-full"
              src={Web3}
              alt="holiday"
            />
          </div>
          <div className=" flex-col items-center justify-center ">
            <div className="">
              <p className="font-bold leading-9 text-base">Hyper-Island</p>
            </div>

            <div className=" ">
              <p className="text-[#F7AB0A] leading-6">Aug 2021 - Mar 2023</p>
            </div>
          </div>
          <div className=" w-[380px] h-[135px]">
            <p className="text-base font-normal">
              A fast learner and results-driven professional with experience
              directing all aspects of Logistic management, generating new
              business opportunity routes and growing domestic and international
              trades....
            </p>
          </div>
          <div className="flex items-center justify-center gap-2  lg:float-left">
            <div className="border-b-2">
              <Link href="/">See my work on Github</Link>
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
      </div>
    </div>
  );
};

export default ExperienceCard;
