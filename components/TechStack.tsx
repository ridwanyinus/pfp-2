'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { techStack1, techStack2, techStack3 } from '@/data';
// todo: make utils class for all reusable classes

const TechStack = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease',
    });
  }, []);
  return (
    <main className='py-20 h-full' data-aos='fade-up' data-aos-delay='0' data-aos-offset='150' data-aos-easing='ease-in-sine' data-aos-duration='400'>
      <h2 className='mx-auto block w-full text-5xl 2xl:text-7xl font-prompt font-black bg-gradient-to-r text-center mb-12'>
        <span className='pr-2 relative z-10 bg-gradient-to-r from-gradient-light to-gradient-dark text-transparent bg-clip-text lg:hidden '>MY TECH STACKS & TOOLS</span>
        <span className=' pr-2 relative z-10 hidden lg:block'> MY TECH STACKS & TOOLS</span>
      </h2>

      <section
        className='grid grid-cols-2 sm:grid-cols-3 md:pl-8 lg:pl-0 gap-y-10 max-small:gap-4 small:gap-10 lg:gap-0 lg:grid-cols-6  w-full desktop:pl-14 largesceen:pl-20 sm:pl-0 small:pl-4  pl-8'
        data-aos='fade-right'
        data-aos-delay='0'
        data-aos-offset='150'
        data-aos-easing='ease-in-sine'
        data-aos-duration='400'>
        {techStack1.map((items, idx: number) => (
          <div
            key={idx}
            className='animate-shimmer transition-colors backdrop-blur-3xl bg-[length:200%_100%] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] max-small:w-[90%] small:w-44 lg:w-[135px] xl:w-40 laptop:w-48 largesceen:w-[13.75rem] fourk:w-[240px]  h-full rounded-xl flex flex-col items-center max-small:py-6 py-8'>
            <div className='bg-white rounded-full  w-20   h-20 flex items-center justify-center'>
              <Image src={items.img} alt={items.name} className='w-10' />
            </div>
            <p className='text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold uppercase'>{items.name}</p>
          </div>
        ))}
      </section>

      <section
        className='grid grid-cols-2 sm:grid-cols-3 md:pl-8 lg:pl-0 gap-y-10 max-small:gap-4 small:gap-10 lg:gap-0 lg:grid-cols-6  w-full desktop:pl-14 largesceen:pl-20 sm:pl-0 small:pl-4  pl-8 mt-8'
        data-aos='fade-right'
        data-aos-delay='0'
        data-aos-offset='150'
        data-aos-easing='ease-in-sine'
        data-aos-duration='400'>
        {techStack2.map((items, idx: number) => (
          <div
            key={idx}
            className='animate-shimmer transition-colors backdrop-blur-3xl bg-[length:200%_100%] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] max-small:w-[90%] small:w-44 lg:w-[135px] xl:w-40 laptop:w-48  largesceen:w-[13.75rem] fourk:w-[255px]  h-full rounded-xl flex flex-col items-center max-small:py-6 py-8'>
            <div className='bg-white rounded-full  w-20   h-20 flex items-center justify-center'>
              <Image src={items.img} alt={items.name} className='w-10' />
            </div>
            <p className='text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold uppercase'>{items.name}</p>
          </div>
        ))}
      </section>

      <section
        className='grid grid-cols-2 sm:grid-cols-3 md:pl-8 lg:pl-0 gap-y-10 max-small:gap-4 small:gap-10 lg:gap-0 lg:grid-cols-6  w-full desktop:pl-14 largesceen:pl-20 sm:pl-0 small:pl-4  pl-8 mt-8'
        data-aos='fade-right'
        data-aos-delay='0'
        data-aos-offset='150'
        data-aos-easing='ease-in-sine'
        data-aos-duration='400'>
        {techStack3.map((items, idx: number) => (
          <div
            key={idx}
            className='animate-shimmer transition-colors backdrop-blur-3xl bg-[length:200%_100%] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] max-small:w-[90%] small:w-44 lg:w-[135px] xl:w-40 laptop:w-48  largesceen:w-[13.75rem] fourk:w-[255px]  h-full rounded-xl flex flex-col items-center max-small:py-6 py-8'>
            <div className='bg-white rounded-full  w-20   h-20 flex items-center justify-center'>
              <Image src={items.img} alt={items.name} className='w-10' />
            </div>
            <p className='text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold uppercase'>{items.name}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default TechStack;
