'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { projects } from '@/data';
import { PinContainer } from './ui/3d-pin';
import { FaArrowRight, FaLocationArrow } from 'react-icons/fa';
import Image from 'next/image';
import assets from '@/lib/assets/assets';
const RecentProjects = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease',
    });
  }, []);
  return (
    <div
      className='py-16 largesceen:pt-28 px-5 xl:px-14 desktop:px-24 largesceen:px-48'
      id='projects'
      data-aos='fade-up'
      data-aos-delay='0'
      data-aos-offset='150'
      data-aos-easing='ease-in-sine'
      data-aos-duration='400'>
      <h2 className='mx-auto block w-full text-5xl 2xl:text-7xl font-prompt font-black bg-gradient-to-r text-center uppercase mb-8'>
        <span className='pr-2 relative z-10 bg-gradient-to-r from-gradient-light to-gradient-dark text-transparent bg-clip-text lg:hidden uppercaseb'> A small selection of my recent projects</span>
        <span className=' pr-2 relative z-10 hidden lg:block uppercase'> A small selection of my recent projects</span>
      </h2>

      <div className='grid md:grid-cols-2 gap-y-16 sm:gap-16 md:gap-12 lg:gap-8  lg:gap-y-16'>
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className='h-[28rem] lg:min-h-[32.5rem] largesceen:h-[40rem] flex items-center justify-center '>
            <PinContainer title={link} href={link} className=' py-6  md:py-8 '>
              <div className='relative flex items-center justify-centerw w-[80vw] sm:w-[60vw] md:w-[300px] lg:w-[395px]  lg:overscroll-none  h-[30vh]  xs:h-25vh] small:h-[40vh] lg:h-[30vh] desktop:h-[24vh] largesceen:h-[20vh] mb-10'>
                <div className='relative w-full h-full overflow-x-clip lg:overflow-none xs:rounded-3xl' style={{ backgroundColor: '#13162D' }}>
                  <Image src={assets.bg} alt='bgimg' className='overflow-clip' />
                </div>
                <Image
                  width={500}
                  height={500}
                  src={img}
                  alt='recent project front end, front end developer, react front end developer'
                  className='z-10 absolute bottom-0 lg:-bottom-5 xl:bottom-0 xs:rounded-2xl h-full w-full object-cover'
                />
              </div>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 font-poppins'>{title}</h1>

              <p className='lg:text-xl lg:font-normal font-light line-clamp-2 tfont-poppins'>{des}</p>

              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                      <Image width={32} height={32} src={icon} alt='icon' />
                    </div>
                  ))}
                </div>

                <div className='flex justify-center items-center'>
                  <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Live Review</p>
                  <FaLocationArrow className='ms-3' color='#cbacf9' />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      <a
        href='#footer'
        className='border-b border-white-100 xs:text-xl small:text-2xl fonr-poppins flex gap-2 text-center justify-center items-center w-fit mx-auto mt-12 font-semibold hover:text-purple text-white-200 transition-colors'>
        ASK FOR MORE PROJECTS <FaArrowRight />
      </a>
    </div>
  );
};

export default RecentProjects;
