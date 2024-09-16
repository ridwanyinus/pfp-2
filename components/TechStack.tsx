'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import Image from 'next/image';
import { techStack1, techStack2, techStack3 } from '@/lib/content/techstack';
import { getId } from '@/utils/helper';
const TechStack = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease',
    });
  }, []);
  return (
    <main className='py-20 h-full min-h-svh' data-aos='fade-up' data-aos-delay='0' data-aos-offset='150' data-aos-easing='ease-in-sine' data-aos-duration='400'>
      <h2 className='heading-h2 mb-12'>
        <span className='heading-h2-span-mobile '>MY TECH STACKS & TOOLS</span>
        <span className=' heading-h2-span'> MY TECH STACKS & TOOLS</span>
      </h2>

      <section className='tech-stack_section' data-aos='fade-right' data-aos-delay='0' data-aos-offset='150' data-aos-easing='ease-in-sine' data-aos-duration='400'>
        {techStack1.map((items) => (
          <div key={getId()} className='tech-stack'>
            <div className='bg-white rounded-full  size-20 flex items-center justify-center'>
              <Image src={items.img} alt={items.name} className='w-10' />
            </div>
            <p className='text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold uppercase'>{items.name}</p>
          </div>
        ))}
      </section>

      <section className='tech-stack_section mt-8' data-aos='fade-right' data-aos-delay='0' data-aos-offset='150' data-aos-easing='ease-in-sine' data-aos-duration='400'>
        {techStack2.map((items) => (
          <div key={getId()} className='tech-stack'>
            <div className='bg-white rounded-full size-20 flex items-center justify-center'>
              <Image src={items.img} alt={items.name} className='w-10' />
            </div>
            <p className='text-white max-xs:text-sm text-base small:text-lg mt-6 font-poppins font-bold uppercase'>{items.name}</p>
          </div>
        ))}
      </section>

      <section className='tech-stack_section mt-8' data-aos='fade-right' data-aos-delay='0' data-aos-offset='150' data-aos-easing='ease-in-sine' data-aos-duration='400'>
        {techStack3.map((items, idx: number) => (
          <div key={idx} className='tech-stack'>
            <div className='bg-white rounded-full  size-20 flex items-center justify-center'>
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
