import React from "react";
import Image from "next/image";
import Logo from "../public/cupLogo.png";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto mt-2">
      <Link href="/">
        <div className="flex gap-[15.05px] items-center max-md:justify-center lg:gap-10">
          <div>
            <Image src={Logo} alt="tagcup logo" />
          </div>
          <div>
            <h3 className="font-bold text-[24px] leading-[26.88px]">
              Múýiwá Olabinjó
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
