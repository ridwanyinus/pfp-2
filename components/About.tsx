'use client';
import React, { useEffect, useState } from 'react';
import { Meteors } from './ui/Meteors';
import animationData from '@/data/confetti.json';
import Lottie from 'react-lottie';
import Image from 'next/image';
import MagicButton from './ui/MagicButton';
import { IoCopyOutline } from 'react-icons/io5';
import AOS from 'aos';
import assets from '@/lib/assets/assets';
import { about, programmer, designer } from '@/lib/content/about';
import { getId } from '@/utils/helper';
import { aosConfig } from '@/styles/animations/anim';
const About = () => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleCopy = () => {
    const text = 'ridwanyinusa15@gmail.com';
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main id='about' className='pt-5 lg:pt-10 xl:pt-24 desktop:pt-36 largesceen:pt-48  px-5  xl:px-14 desktop:px-24 largesceen:px-48 relative z-10 size-full pb-20 min-h-svh' {...aosConfig}>
      <h2 className='heading-h2'>
        <span className='heading-h2-span-mobile'> ABOUT ME</span>
        <span className='heading-h2-span'> ABOUT ME</span>
      </h2>
      <section className='flex flex-col justify-between md:justify-center md:items-center pt-6 md:pt-12 xl:pt-28 max-lg:gap-y-10'>
        <div className='md:w-[70%]'>
          <h3 className='max-xs:text-sm font-light text-base sm:text-lg md:text-[0.8rem] lg:text-lg xl:text-2xl largesceen:text-[1.75rem] fourk:text-4xl font-prompt mx-auto z-10 leading-[199%]'>
            I’m Ridwan, a passionate  React front-end developer and graphic designer. I use React, Next.js, and Tailwind CSS to create user-friendly, responsive web applications. For graphics,
            I use Illustrator and Photoshop. <br /> Beyond coding, I enjoy playing chess, watching football, immersing myself in movies and series, listening to music, and diving into captivating
            books. These interests enhance my creativity and technical skills. <br /> As a developer and designer, I create beautiful, functional interfaces. I excel in group settings, coordinating
            closely with project managers, back-end developers, and designers to produce high-quality digital solutions. My attention to detail and problem-solving skills enable me to troubleshoot
            issues and implement effective solutions.
          </h3>
        </div>

        <div className='relative w-full small:w-[95%]  md:hidden'>
          <div className='absolute inset-0' />
          <div className='relative shadow-xl bg-custom-gradient border border-white/[0.1] md:px-6  lg:px-8  overflow-hidden rounded-2xl flex flex-col justify-end items-start px-2 xs:px-6 py-6 small:py-12'>
            <h1 className='font-bold font-outfit text-lg xs:text-[1.4rem] small:text-3xl medium:text-xl lg:text-2xl 2xl:text-3xl text-white mb-8 largesceen:mb-12 relative z-50 '>
              <span className='pr-1'> Front-End Developer</span>
            </h1>

            {about.map((items) => (
              <div key={getId()}>
                <p className='about'>
                  <span className='about-span '>{items.name}</span> {items.info}
                </p>
              </div>
            ))}

            <div className='relative largesceen:mt-4'>
              <div className={`absolute -bottom-5 right-0 ${copied ? 'block' : 'block'}`}>
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              <MagicButton title={copied ? 'Email is Copied!' : 'Copy my email address'} icon={<IoCopyOutline />} position='left' handleClick={handleCopy} />
            </div>

            <Meteors number={25} />
          </div>
        </div>
      </section>

      <div className='mt-24 max-lg:gap-12 flex flex-col justify-center max-lg:text-center lg:flex-row  lg:justify-between  w-full items-center'>
        <div className='flex flex-col gap-4  lg:w-1/3 '>
          <h2 className='about-job'>Part Programmer</h2>

          {programmer.map((item) => (
            <div key={getId()}>
              <p className='about-offer'>{item.name}</p>
            </div>
          ))}
        </div>

        <div className='lg:w-1/3 w-auto max-lg:order-1'>
          <Image alt='chart' src={assets.chart1} quality={100} priority placeholder='blur' />
        </div>

        <div className='flex flex-col gap-4 lg:w-1/3 lg:pl-16 xl:pl-28 desktop:pl-36 2xl:pl-48'>
          <h2 className='about-job'>Part Designer</h2>

          {designer.map((item) => (
            <div key={getId()}>
              <p className='about-offer'>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
