'use client';
import React, { useEffect, useRef } from 'react';
import { runPreloaderAnimation } from '@/styles/animations/anim';
const Loader: React.FC = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    runPreloaderAnimation(preloaderRef);
  }, []);

  return (
    <div className='mil-preloader' ref={preloaderRef}>
      <div className='mil-preloader-animation'>
        <div className='mil-pos-abs mil-animation-1'>
          <p className='mil-h3 mil-muted mil-thin text-3xl lg:text-[2.5rem] xl:text-[2.65rem] font-light font-outfit'>Create</p>
          <p className='mil-h3 mil-muted text-3xl lg:text-[2.5rem] xl:text-[2.65rem]  font-outfit font-bold'>Develop</p>
          <p className='mil-h3 mil-muted mil-thin text-3xl lg:text-[2.5rem] xl:text-[2.65rem]  font-outfit font-light'>Design</p>
        </div>
        <div className='mil-pos-abs mil-animation-2'>
          <div className='mil-reveal-frame'>
            <p className='mil-reveal-box'></p>
            <p className='mil-h3 mil-muted mil-thin text-3xl lg:text-[2.5rem] xl:text-[2.65rem] font-light font-outfit'>ridwan.yinus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
