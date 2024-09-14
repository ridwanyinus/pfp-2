'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import { WobbleCard } from '@/components/ui/WobbleCard';
import { getId } from '@/utils/helper';
import { services } from '@/lib/content/services';
const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease',
    });
  }, []);
  return (
    <main
      id='service'
      className='pt-5 lg:pt-10 xl:pt-24 desktop:pt-36 largesceen:pt-48  px-5 xl:px-14 desktop:px-24 largesceen:px-48 relative z-10 w-full h-full lg:pb-20 pb-8'
      data-aos='fade-up'
      data-aos-delay='0'
      data-aos-offset='150'
      data-aos-easing='ease-in-sine'
      data-aos-duration='400'>
      <h2 className='heading-h2'>
        <span className='heading-h2-span-mobile'> WHAT I DO</span>
        <span className=' heading-h2-span'> WHAT I DO</span>
      </h2>
      <section className='max-lg:mt-10 mt-6 lg:mt-28 max-lg:gap-y-10 grid  lg:grid-cols-3 gap-10'>
        {services.map((item) => (
          <WobbleCard containerClassName='wobblecard group' key={getId()}>
            <item.icon size={52} className=' group-hover:text-cyan-500' />
            <h2 className={`${item.classH2}`}>{item.name}</h2>
            <p className={`${item.classP}`}>{item.services}</p>
          </WobbleCard>
        ))}
      </section>
    </main>
  );
};

export default Services;
