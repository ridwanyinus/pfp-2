"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { WobbleCard } from "@/components/ui/WobbleCard";
import { FaLaptopCode } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease",
    });
  }, []);
  return (
    <main
      id="service"
      className="pt-5 lg:pt-10 xl:pt-24 desktop:pt-36 largesceen:pt-48  px-5 xl:px-14 desktop:px-24 largesceen:px-48 relative z-10 w-full h-full lg:pb-20 pb-8"
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-offset="150"
      data-aos-easing="ease-in-sine"
      data-aos-duration="400">
      <h2 className="mx-auto block w-full text-5xl 2xl:text-7xl font-prompt font-black bg-gradient-to-r text-center">
        <span className="pr-2 relative z-10 bg-gradient-to-r from-gradient-light to-gradient-dark text-transparent bg-clip-text lg:hidden"> WHAT I DO</span>
        <span className=" pr-2 relative z-10 hidden lg:block"> WHAT I DO</span>
      </h2>
      <section className="max-lg:mt-10 mt-6 lg:mt-28 max-lg:gap-y-10 grid  lg:grid-cols-3 gap-10">
        <WobbleCard containerClassName="min-h-[330px] xl:min-w-[350px]  max-small:w-[95%] max-sm:w-[90%] max-lg:w-[70%] group">
          <FaLaptopCode size={52} className="group-hover:text-cyan-500" />
          <h2 className="text-xl  largesceen:text-2xl font-semibold  text-white mt-6 group-hover:text-cyan-500">Web Development</h2>
          <p className="mt-6  text-base largesceen:text-xl text-white text-center">
            I build interactive digital solutions for users using my understanding of several programming languages, including HTML, CSS, JavaScript, React, and TypeScript.
          </p>
        </WobbleCard>

        <WobbleCard containerClassName="min-h-[330px] xl:min-w-[350px] max-small:w-[95%] max-sm:w-[90%] max-lg:w-[70%] group">
          <FaPenNib size={52} className="group-hover:text-cyan-500" />
          <h2 className="text-xl largesceen:text-2xl font-semibold  text-white mt-6 group-hover:text-cyan-500">Graphic Design</h2>
          <p className="mt-6  text-base largesceen:text-xl text-white text-center">
            I create visually compelling designs for users using my expertise in graphic design software, including Photoshop, Illustrator, and InDesign.
          </p>
        </WobbleCard>

        <WobbleCard containerClassName="min-h-[330px] xl:min-w-[350px] max-small:w-[95%] max-sm:w-[90%] max-lg:w-[70%] group">
          <FaCode size={52} className="group-hover:text-cyan-500" />
          <h2 className="text-xl largesceen:text-2xl font-semibold  text-white mt-6 group-hover:text-cyan-500">Web Design</h2>
          <p className="mt-6  text-base largesceen:text-xl text-white text-center">
            I create user-friendly and visually appealing websites using my expertise in web design tools and technologies, including HTML, CSS, JavaScript, and various design software.
          </p>
        </WobbleCard>
      </section>
    </main>
  );
};

export default Services;
