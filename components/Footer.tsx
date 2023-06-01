import React from "react";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <p className="font-base text-[32px] leading-[48px]">
          {" "}
          <Link href="mailto:olabinjomuyiwa@gmail.com">Email</Link>{" "}
          <span className="text-[#F7AB0A]">/</span>{" "}
          <Link
            href="https://www.linkedin.com/in/muyiwa-olabinjo-01a657228/"
            target="_blank"
          >
            LinkedIn
          </Link>{" "}
          <span className="text-[#F7AB0A]">/</span>{" "}
          <Link href="https://github.com/olaa234" target="_blank">
            Github
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
