"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import html from "@/public/html-5.svg";
import css from "@/public/css-3.svg";
import js from "@/public/javascript.svg";
import react from "@/public/react.svg";
import typescript from "@/public/typescript.png";
import tailwind from "@/public/tailwind.png";
import ai from "@/public/illustrator.png";
import github from "@/public/github-icon.svg";
import git from "@/public/git-icon.svg";
import canva from "@/public/canva.png";
import figma from "@/public/figma.svg";
import npm from "@/public/npm.svg";
import vs from "@/public/visual-studio-code.svg";
import varcel from "@/public/vercel-icon.svg";
import netlify from "@/public/netlify.svg";
import sass from "@/public/sass.svg";
import bootstrap from "@/public/bootstrap.svg";
import gitlab from "@/public/gitlab.svg";
import ps from "@/public/photoshop.png";
import nextjs from "@/public/next.svg";

const TechStack = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease",
    });
  }, []);
  return (
    <main className="py-20 h-full" data-aos="fade-up" data-aos-delay="0" data-aos-offset="150" data-aos-easing="ease-in-sine" data-aos-duration="400">
      <h2 className="mx-auto block w-full text-5xl 2xl:text-7xl font-prompt font-black bg-gradient-to-r text-center mb-12">
        <span className="pr-2 relative z-10 bg-gradient-to-r from-gradient-light to-gradient-dark text-transparent bg-clip-text lg:hidden ">MY TECH STACKS & TOOLS</span>
        <span className=" pr-2 relative z-10 hidden lg:block"> MY TECH STACKS & TOOLS</span>
      </h2>
      <section
        className="grid grid-cols-2 sm:grid-cols-3 md:pl-8 lg:pl-0 gap-y-10 max-small:gap-4 small:gap-10 lg:gap-0 lg:grid-cols-6  w-full desktop:pl-14 largesceen:pl-20 sm:pl-0 small:pl-4  pl-8"
        data-aos="fade-right"
        data-aos-delay="0"
        data-aos-offset="150"
        data-aos-easing="ease-in-sine"
        data-aos-duration="400">
        <div className="animate-shimmer transition-colors backdrop-blur-3xl bg-[length:200%_100%] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] max-small:w-[90%] small:w-44 lg:w-[135px] xl:w-48 largesceen:w-[255px]  h-full rounded-xl flex flex-col items-center max-small:py-6 py-8">
          <div className="bg-white rounded-full  w-20   h-20 flex items-center justify-center">
            <Image src={html} alt="html" className="w-10" />
          </div>
          <p className="text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold">HTML</p>
        </div>

        <div className="animate-shimmer transition-colors backdrop-blur-3xl bg-[length:200%_100%] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] max-small:w-[90%] small:w-44 lg:w-[135px] xl:w-48 largesceen:w-[255px]  h-full rounded-xl flex flex-col items-center max-small:py-6 py-8">
          <div className="bg-white rounded-full  w-20  h-20 flex items-center justify-center">
            <Image src={css} alt="css" className="w-10" />
          </div>
          <p className="text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold">CSS</p>
        </div>

        <div className="animate-shimmer transition-colors backdrop-blur-3xl bg-[length:200%_100%] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] max-small:w-[90%] small:w-44 lg:w-[135px] xl:w-48 largesceen:w-[255px]  h-full rounded-xl flex flex-col items-center max-small:py-6 py-8">
          <div className="bg-white rounded-full  w-20  h-20 flex items-center justify-center">
            <Image src={js} alt="javascript" className="w-10" />
          </div>
          <p className="text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold">JAVASCRIPT</p>
        </div>

        <div className="animate-shimmer transition-colors backdrop-blur-3xl bg-[length:200%_100%] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] max-small:w-[90%] small:w-44 lg:w-[135px] xl:w-48 largesceen:w-[255px]  h-full rounded-xl flex flex-col items-center max-small:py-6 py-8">
          <div className="bg-white rounded-full  w-20  h-20 flex items-center justify-center">
            <Image src={github} alt="github" className="w-10" />
          </div>
          <p className="text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold">GITHUB</p>
        </div>

        <div className="animate-shimmer transition-colors backdrop-blur-3xl bg-[length:200%_100%] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] max-small:w-[90%] small:w-44 lg:w-[135px] xl:w-48 largesceen:w-[255px]  h-full rounded-xl flex flex-col items-center max-small:py-6 py-8">
          <div className="bg-white rounded-full  w-20  h-20 flex items-center justify-center">
            <Image src={git} alt="git" className="w-10" />
          </div>
          <p className="text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold">GIT</p>
        </div>

        <div className="animate-shimmer transition-colors backdrop-blur-3xl bg-[length:200%_100%] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] max-small:w-[90%] small:w-44 lg:w-[135px] xl:w-48 largesceen:w-[255px]  h-full rounded-xl flex flex-col items-center max-small:py-6 py-8">
          <div className="bg-white rounded-full  w-20  h-20 flex items-center justify-center">
            <Image src={gitlab} alt="gitlab" className="w-10" />
          </div>
          <p className="text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold">GITLAB</p>
        </div>
      </section>

      <section
        className="grid grid-cols-2 sm:grid-cols-3 md:pl-8 lg:pl-0 gap-y-10 max-small:gap-4 small:gap-10 lg:gap-0 lg:grid-cols-6  w-full desktop:pl-14 largesceen:pl-20 sm:pl-0 small:pl-4  pl-8 mt-8"
        data-aos="fade-right"
        data-aos-delay="0"
        data-aos-offset="150"
        data-aos-easing="ease-in-sine"
        data-aos-duration="400">
        <div className="animate-shimmer transition-colors backdrop-blur-3xl bg-[length:200%_100%] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] max-small:w-[90%] small:w-44 lg:w-[135px] xl:w-48 largesceen:w-[255px]  h-full rounded-xl flex flex-col items-center max-small:py-6 py-8">
          <div className="bg-white rounded-full  w-20   h-20 flex items-center justify-center">
            <Image src={react} alt="react-icons" className="w-10" />
          </div>
          <p className="text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold">REACT</p>
        </div>

        <div className="animate-shimmer transition-colors backdrop-blur-3xl bg-[length:200%_100%] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] max-small:w-[90%] small:w-44 lg:w-[135px] xl:w-48 largesceen:w-[255px]  h-full rounded-xl flex flex-col items-center max-small:py-6 py-8">
          <div className="bg-white rounded-full  w-20  h-20 flex items-center justify-center">
            <Image src={typescript} alt="typescript" className="w-10" />
          </div>
          <p className="text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold">TYPESCRIPT</p>
        </div>

        <div className="animate-shimmer transition-colors backdrop-blur-3xl bg-[length:200%_100%] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] max-small:w-[90%] small:w-44 lg:w-[135px] xl:w-48 largesceen:w-[255px]  h-full rounded-xl flex flex-col items-center max-small:py-6 py-8">
          <div className="bg-black rounded-full  w-20  h-20 flex items-center justify-center">
            <Image src={nextjs} alt="nextjs" className="w-10" />
          </div>
          <p className="text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold">NEXT.JS</p>
        </div>

        <div className="animate-shimmer transition-colors backdrop-blur-3xl bg-[length:200%_100%] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] max-small:w-[90%] small:w-44 lg:w-[135px] xl:w-48 largesceen:w-[255px]  h-full rounded-xl flex flex-col items-center max-small:py-6 py-8">
          <div className="bg-white rounded-full  w-20  h-20 flex items-center justify-center">
            <Image src={tailwind} alt="tailwind" className="w-10" />
          </div>
          <p className="text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold">TAILWIND</p>
        </div>

        <div className="animate-shimmer transition-colors backdrop-blur-3xl bg-[length:200%_100%] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] max-small:w-[90%] small:w-44 lg:w-[135px] xl:w-48 largesceen:w-[255px]  h-full rounded-xl flex flex-col items-center max-small:py-6 py-8">
          <div className="bg-white rounded-full  w-20  h-20 flex items-center justify-center">
            <Image src={vs} alt="vscode" className="w-10" />
          </div>
          <p className="text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold">VSCODE</p>
        </div>

        <div className="animate-shimmer transition-colors backdrop-blur-3xl bg-[length:200%_100%] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] max-small:w-[90%] small:w-44 lg:w-[135px] xl:w-48 largesceen:w-[255px]  h-full rounded-xl flex flex-col items-center max-small:py-6 py-8">
          <div className="bg-white rounded-full  w-20  h-20 flex items-center justify-center">
            <Image src={npm} alt="npm" className="w-10" />
          </div>
          <p className="text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold">NPM</p>
        </div>
      </section>

      <section
        className="grid grid-cols-2 sm:grid-cols-3 md:pl-8 lg:pl-0 gap-y-10 max-small:gap-4 small:gap-10 lg:gap-0 lg:grid-cols-6  w-full desktop:pl-14 largesceen:pl-20 sm:pl-0 small:pl-4  pl-8 mt-8"
        data-aos="fade-right"
        data-aos-delay="0"
        data-aos-offset="150"
        data-aos-easing="ease-in-sine"
        data-aos-duration="400">
        <div className="animate-shimmer transition-colors backdrop-blur-3xl bg-[length:200%_100%] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] max-small:w-[90%] small:w-44 lg:w-[135px] xl:w-48 largesceen:w-[255px]  h-full rounded-xl flex flex-col items-center max-small:py-6 py-8">
          <div className="bg-white rounded-full  w-20   h-20 flex items-center justify-center">
            <Image src={ps} alt="photoshop-icons" className="w-10" />
          </div>
          <p className="text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold">PHOTOSHOP</p>
        </div>

        <div className="animate-shimmer transition-colors backdrop-blur-3xl bg-[length:200%_100%] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] max-small:w-[90%] small:w-44 lg:w-[135px] xl:w-48 largesceen:w-[255px]  h-full rounded-xl flex flex-col items-center max-small:py-6 py-8">
          <div className="bg-white rounded-full  w-20  h-20 flex items-center justify-center">
            <Image src={ai} alt="illustrator" className="w-10" />
          </div>
          <p className="text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold">ILLUSTRATOR</p>
        </div>

        <div className="animate-shimmer transition-colors backdrop-blur-3xl bg-[length:200%_100%] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] max-small:w-[90%] small:w-44 lg:w-[135px] xl:w-48 largesceen:w-[255px]  h-full rounded-xl flex flex-col items-center max-small:py-6 py-8">
          <div className="bg-black rounded-full  w-20  h-20 flex items-center justify-center">
            <Image src={figma} alt="figma" className="w-10" />
          </div>
          <p className="text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold">FIGMA</p>
        </div>

        <div className="animate-shimmer transition-colors backdrop-blur-3xl bg-[length:200%_100%] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] max-small:w-[90%] small:w-44 lg:w-[135px] xl:w-48 largesceen:w-[255px]  h-full rounded-xl flex flex-col items-center max-small:py-6 py-8">
          <div className="bg-white rounded-full  w-20  h-20 flex items-center justify-center">
            <Image src={canva} alt="canva" className="w-10" />
          </div>
          <p className="text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold">CANVA</p>
        </div>

        <div className="animate-shimmer transition-colors backdrop-blur-3xl bg-[length:200%_100%] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] max-small:w-[90%] small:w-44 lg:w-[135px] xl:w-48 largesceen:w-[255px]  h-full rounded-xl flex flex-col items-center max-small:py-6 py-8">
          <div className="bg-white rounded-full  w-20  h-20 flex items-center justify-center">
            <Image src={varcel} alt="vercel" className="w-10" />
          </div>
          <p className="text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold">VERCEL</p>
        </div>

        <div className="animate-shimmer transition-colors backdrop-blur-3xl bg-[length:200%_100%] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] max-small:w-[90%] small:w-44 lg:w-[135px] xl:w-48 largesceen:w-[255px]  h-full rounded-xl flex flex-col items-center max-small:py-6 py-8">
          <div className="bg-white rounded-full  w-20  h-20 flex items-center justify-center">
            <Image src={netlify} alt="netlify" className="w-10" />
          </div>
          <p className="text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold">NETLIFY</p>
        </div>
      </section>
    </main>
  );
};

export default TechStack;
