'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import ContactForm from '@/components/ui/ContactForm';
import grid from '@/public/footer-grid.svg';
import Image from 'next/image';
import Link from 'next/link';
import { getId } from '@/utils/helper';
import { contacts } from '@/lib/content/footer';
import { aosConfig } from '@/styles/animations/anim';

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <footer id='footer' className='w-full mt-8 px-5 xl:px-14 desktop:px-24 largesceen:px-48 pb-4 min-h-svh' {...aosConfig}>
      <div className='w-full absolute left-0 -bottom-72 min-h-96 pb-2'>
        <Image
          src={grid}
          alt='grid'
          className='size-full opacity-50'
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>

      <div className='flex flex-col items-center mb-8'>
        <h2 className='heading-h2'>
          <span className='heading-h2-span-mobile'> CONTACT ME</span>
          <span className=' heading-h2-span'> CONTACT ME</span>
        </h2>
        <p className='my-5 text-center max-xs:text-sm  text-base sm:text-xl  2xl:text-2xl lg:w-[70vw] font-poppins'>
          I&apos;m always eager to discuss new technologies, brainstorm innovative project ideas, or explore opportunities for collaboration in both development and graphic design.
        </p>
      </div>
      {/* <Grid /> */}
      <section className='bg-black grid sm:grid-cols-2 sm:w-full lg:w-[70%] lg:ml-[15%] sm:h-[22rem] desktop:h-[26rem] p-8 '>
        <div className='*:font-outfit max-sm:order-1 w-fit'>
          <div className='hidden sm:block mb-4'>
            <p className='font-outfit font-medium sm:text-sm md:text-base desktop:text-xl max-sm:block'>Do you want to start a project together?</p>
            <p className='font-outfit font-medium sm:text-sm md:text-base mt-2 desktop:text-xl '>Let&apos;s Discuss</p>
          </div>

          {contacts.map((items) => (
            <Link key={getId()} href={items.url} className={items.class}>
              <items.icon className={items.iconClass} size={20} color='#67e8f9' />
              {items.name}
            </Link>
          ))}
        </div>

        <div className='max-sm:flex-col flex  items-center w-full z-10 relative'>
          <div className='sm:hidden  '>
            <p className='font-outfit font-medium  sm:text-sm md:text-base desktop:text-xl max-sm:block '>Do you want to start a project together?</p>
            <p className='font-outfit font-medium sm:text-sm md:text-base mt-2 desktop:text-xl mb-6'>Let&apos;s Discuss</p>
          </div>
          <ContactForm />
        </div>
      </section>
      <Link href='https://github.com/ridwanyinus/pfp-2' className='text-center outline-dash text-xs md:text-sm mt-4 z-10 relative  mx-auto block hover:text-gradient-light'>
        Design & Built by Ridwan Yinus
      </Link>
    </footer>
  );
};

export default Footer;
