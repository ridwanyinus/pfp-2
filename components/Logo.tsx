import React from "react";
import Image from "next/image";
import Logo5b from "../public/Logo5b.png";

const Ridwan = () => {
  return (
    <div className="relative z-10 pl-5 xl:px-14 desktop:pl-24 largesceen:pl-48 pt-5 flex gap-1 items-center ">
      <Image src={Logo5b} alt="Logo" className="max-sm:w-[30px] desktop:w-[60px]" />
      <a href="/" className="text-xl sm:text-2xl desktop:text-4xl text-purple font-semibold font-outfit ">
        Ridwan
      </a>
    </div>
  );
};

export default Ridwan;
