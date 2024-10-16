'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import { projects } from '@/lib/content/projects';
import { PinContainer } from './ui/3d-pin';
import { FaArrowRight, FaLocationArrow } from 'react-icons/fa';
import Image from 'next/image';
import assets from '@/lib/assets/assets';
import { getId } from '@/utils/helper';
import Link from 'next/link';
import { aosConfig } from '@/styles/animations/anim';
const RecentProjects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='py-16 largesceen:pt-28 px-5 xl:px-14 desktop:px-24 largesceen:px-48 min-h-svh' id='projects' {...aosConfig}>
      <h2 className='heading-h2'>
        <span className='heading-h2-span-mobile'> A small selection of my recent projects</span>
        <span className=' heading-h2-span'> A small selection of my recent projects</span>
      </h2>

      <div className='grid md:grid-cols-2 gap-y-16 sm:gap-16 md:gap-12 lg:gap-8  lg:gap-y-16'>
        {projects.map(({ title, des, img, iconLists, link }) => (
          <div key={getId()} className='h-[28rem] lg:min-h-[32.5rem] largesceen:h-[40rem] flex-center'>
            <PinContainer title={link} href={link} className=' py-6  md:py-8 '>
              <div className='relative flex-center w-[80vw] sm:w-[60vw] md:w-[300px] lg:w-[395px]  lg:overscroll-none  h-[30svh]  xs:h-[25svh] small:h-[40svh] lg:h-[30vh] desktop:h-[24vh] largesceen:h-[20vh] mb-10'>
                <div className='relative size-full overflow-x-clip lg:overflow-none xs:rounded-3xl' style={{ backgroundColor: '#13162D' }}>
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

              <p className='lg:text-xl lg:font-normal font-light line-clamp-2 font-poppins'>{des}</p>

              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <div key={getId()} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex-center' style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                      <Image width={32} height={32} src={icon} alt='icon' />
                    </div>
                  ))}
                </div>

                <div className='flex-center'>
                  <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Live Review</p>
                  <FaLocationArrow className='ms-3' color='#cbacf9' />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      <Link
        href='#footer'
        className='border-b border-white-100 xs:text-xl small:text-2xl fonr-poppins  gap-2 text-center flex-center w-fit mx-auto mt-12 font-semibold hover:text-purple text-white-200 transition-colors'>
        ASK FOR MORE PROJECTS <FaArrowRight />
      </Link>
    </div>
  );
};

export default RecentProjects;
