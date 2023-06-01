import React from "react";
import Tag from "../public/tag.png";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="bg-[#33353A] h-50% mx-auto space-y-20 p-2 w-screen" id='about'>
      <div className="  max-w-7xl mx-auto p-10 space-y-18 ">
        <div className="flex lg:justify-normal items-center justify-center gap-1 md:mt-4">
          <div>
            <Image src={Tag} alt="closingTag" />
          </div>
          <div>
            <Link href="#about">
              <h3 className="uppercase">about me</h3>
            </Link>
          </div>
        </div>

        <div className=" lg:flex gap-7 p-5 ">
          <div className=" flex flex-col space-y-4 mt-3">
            <div className="flex justify-center lg:float-left ">
              <h3 className="font-bold leading-8 text-lg">
                I’ve been knacking dem apako since 2020
              </h3>
            </div>
            <div>
              <p className="font-medium leading-7">
                A fast learner and results-driven professional with experience
                directing all aspects of Logistic management, generating new
                business opportunity routes and growing domestic and
                international trades.
              </p>
            </div>
          </div>
          <div className=" flex flex-col space-y-4 mt-3 ">
            <div className=" flex justify-center lg:float-left">
              <h3 className=" font-bold leading-8 text-lg">
                My Hyper Island journey
              </h3>
            </div>
            <div>
              <p className="font-medium leading-7">
                A fast learner and results-driven professional with experience
                directing all aspects of Logistic management, generating new
                business opportunity routes and growing domestic and
                international trades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
