import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";
import dev from "../public/hero.png";
import TypedComponent from "./ui/TypedComponent";
import { FaDiscord, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import gmail from "../public/gmail.svg";

const Hero = () => {
  return (
    <section className="pb-20 pt-10 h-full">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="-top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <section className="relative flex flex-col medium:flex-row  justify-center medium:items-center mt-10 lg:mt-14 largesceen:mt-20 px-5 xl:pl-14 desktop:px-24 largesceen:px-48 largesceen:gap-10 ">
        <div className="flex flex-col flex-1  desktop:flex-[1.5] largesceen:flex-[1.2]  justify-center">
          <p className="text-xl small:text-2xl lg:text-3xl largesceen:text-4xl mb-2 z-10 relative">👋 Hello, I’m</p>

          <h1 className="text-left text-[60px]  xs:text-[75px] small:text-[90px] sm:text-[100px] medium:text-[80px] lg:text-[100px] xl:text-[120px] largesceen:[160px]  font-inter font-black leading-none w-full z-10 relative">
            Ridwan <span className="block">Yinus</span>
          </h1>

          <div className="flex gap-x-1 text-base xs:text-xl small:text-2xl lg:text-3xl xl:text-4xl largesceen:text-5xl desktop:mt-2 items-center">
            <p className="">I&apos;m a {""} </p>
            <span className="pl-1 border-purple border-b inline-flex leading-none  h-fit text-purple">
              <TypedComponent />
            </span>
          </div>

          <div className="flex items-center  md:gap-4 gap-6 mt-8">
            <a
              href="https://github.com/ridwanyinus"
              className="w-10 h-10 desktop:h-14 desktop:w-14 largesceen:h-16 largesceen:w-16 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 border-black-300 rounded-lg  hover:bg-black">
              <FaGithub size={23} className="desktop:w-[35px] desktop:h-[35px] largesceen:w-[40px] largesceen:h-[40px]" />
            </a>

            <a
              href="https://mail.google.com/mail/u/0/?to=ridwanyinusa15@gmail.com&fs=1&tf=cm"
              className="w-10 h-10 desktop:h-14 desktop:w-14 largesceen:h-16 largesceen:w-16  flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 border-black-300 rounded-lg  hover:bg-white  group">
              <Image
                src={gmail}
                width={27}
                alt="gmail  front end, front end developer, react front end developer"
                className="desktop:w-[35px] desktop:h-[35px] largesceen:w-[40px] largesceen:h-[40px] group-hover:opacity-100 opacity-0"
              />
              <GoMail size={23} className="group-hover:opacity-0 opacity-100 absolute desktop:w-[35px] desktop:h-[35px] largesceen:w-[40px] largesceen:h-[40px]" />
            </a>

            <a
              href="https://t.me/Labile_6"
              className="w-10 h-10 desktop:h-14 desktop:w-14 largesceen:h-16 largesceen:w-16  flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 border-black-300 rounded-lg  hover:bg-telegram">
              <FaTelegram size={23} className="desktop:w-[35px] desktop:h-[35px] largesceen:w-[40px] largesceen:h-[40px]" />
            </a>

            <a
              href="https://discord.com/users/1142082910351011991"
              className="w-10 h-10 desktop:h-14 desktop:w-14 largesceen:h-16 largesceen:w-16  flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 border-black-300 rounded-lg  hover:bg-[#5865F2]">
              <FaDiscord size={23} className="desktop:w-[35px] desktop:h-[35px] largesceen:w-[40px] largesceen:h-[40px]" />
            </a>

            <a
              href="https://www.linkedin.com/in/ridwan-opeyemi-yinusa/"
              className="w-10 h-10 desktop:h-14 desktop:w-14 largesceen:h-16 largesceen:w-16  flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 border-black-300 rounded-lg  hover:bg-linkedin">
              <FaLinkedin size={23} className="desktop:w-[35px] desktop:h-[35px] largesceen:w-[40px] largesceen:h-[40px]" />
            </a>
          </div>
        </div>

        <div className="mt-20 medium:mt-0 flex-1 justify-center  medium:justify-end xl:justify-center  items-center flex">
          <Image alt="Ridwan Yinus - React Front End Developer " src={dev} className="medium:w-[280px] lg:w-[369px] desktop:w-[500px] largesceen:w-[600px]" priority />
        </div>
      </section>
    </section>
  );
};

export default Hero;
