'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import { FaLinkedin, FaTelegram } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { IoLocationSharp } from 'react-icons/io5';
import { FaDiscord } from 'react-icons/fa';
import ContactForm from '@/components/ui/ContactForm';
import grid from '@/public/footer-grid.svg';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease',
    });
  }, []);
  return (
    <footer
      id='footer'
      className='w-full mt-8 px-5 xl:px-14 desktop:px-24 largesceen:px-48 pb-4'
      data-aos='fade-up'
      data-aos-delay='0'
      data-aos-offset='150'
      data-aos-easing='ease-in-sine'
      data-aos-duration='400'>
      <div className='w-full absolute left-0 -bottom-72 min-h-96 pb-2'>
        <Image
          src={grid}
          alt='grid'
          className='w-full h-full opacity-50'
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>

      <div className='flex flex-col items-center mb-8'>
        <h2 className='mx-auto block w-full text-5xl 2xl:text-7xl font-prompt font-black bg-gradient-to-r text-center uppercase sm:mb-8'>
          <span className='pr-2 relative z-10 bg-gradient-to-r from-gradient-light to-gradient-dark text-transparent bg-clip-text lg:hidden uppercaseb'> CONTACT ME</span>
          <span className=' pr-2 relative z-10 hidden lg:block uppercase'> CONTACT ME</span>
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
          <a
            href='https://discord.com/users/1142082910351011991'
            className='flex items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 text-cyan-300 rounded-lg text-xs sm:text-sm md:text-base   gap-2 2xl:gap-4 desktop:text-lg w-fit mb-5'>
            <FaDiscord size={20} color='#67e8f9' className='max-sm:w-[15px] desktop:w-[35px] desktop:h-[35px]' />
            pioche_dgreat
          </a>

          <a
            href='https://t.me/Labile_6'
            className='flex items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 text-cyan-300 rounded-lg text-xs sm:text-sm md:text-base   gap-2 2xl:gap-4 desktop:text-lg w-fit '>
            <FaTelegram size={20} color='#67e8f9' className='max-sm:w-[15px] desktop:w-[35px] desktop:h-[35px]' />
            Labile_6
          </a>

          <a
            href='https://www.linkedin.com/in/ridwan-opeyemi-yinusa/'
            className='flex items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 text-cyan-300 rounded-lg text-xs sm:text-sm md:text-base   gap-2 2xl:gap-4 desktop:text-lg w-fit mt-5'>
            <FaLinkedin size={20} color='#67e8f9' className='max-sm:w-[15px] desktop:w-[35px] desktop:h-[35px]' />
            ridwanyinus
          </a>

          <a
            href='https://mail.google.com/mail/u/0/?to=ridwanyinusa15@gmail.com&fs=1&tf=cm'
            className='flex items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 text-cyan-300 rounded-lg text-xs sm:text-sm md:text-base   gap-2 2xl:gap-4 desktop:text-lg w-fit mt-5'>
            <GoMail size={20} color='#67e8f9' className='max-sm:w-[15px] desktop:w-[35px] desktop:h-[35px]' />
            ridwanyinus15@gmail.com
          </a>

          <p className='flex items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 text-white rounded-lg text-xs sm:text-sm md:text-base   gap-2 2xl:gap-4 desktop:text-lg w-fit mt-5'>
            <IoLocationSharp size={20} color='#67e8f9' className='max-sm:w-[15px] desktop:w-[35px] desktop:h-[35px]' />
            Lagos, Nigeria
          </p>
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
