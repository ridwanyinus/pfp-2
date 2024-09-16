'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from '@/components/ui/CanvasRevealEffects';
import { getId } from '@/utils/helper';
import { aproach } from '@/lib/content/aproach';
// todo: move all reusbale class to utils

const Approach = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease',
    });
  }, []);
  return (
    <section
      className='w-full py-10 lg:py-20 px-5 xl:px-14 desktop:px-24 largesceen:px-48 min-h-svh'
      data-aos='fade-up'
      data-aos-delay='0'
      data-aos-offset='150'
      data-aos-easing='ease-in-sine'
      data-aos-duration='400'>
      <h2 className='heading-h2 mb-12'>
        <span className='heading-h2-span-mobile'>WORK PROCESS</span>
        <span className=' heading-h2-span'> WORK PROCESS</span>
      </h2>
      <div className=' flex flex-col lg:flex-row items-center justify-center gap-4 '>
        {aproach.map((item) => (
          <Card key={getId()} title={item.title} icon={<AceternityIcon order={item.order} />} description={item.desc}>
            <CanvasRevealEffect animationSpeed={item.animSpeed} containerClassName={item.bg} colors={item.colors} dotSize={item.dotSize} />
          </Card>
        ))}
      </div>
    </section>
  );
};

const Card = ({ title, icon, children, description }: { title: string; icon: React.ReactNode; children?: React.ReactNode; description: string }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4  lg:h-[25rem] relative rounded-3xl'>
      <Icon className='absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black' />
      <Icon className='absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black' />
      <Icon className='absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black' />
      <Icon className='absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black' />

      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='h-full w-full absolute inset-0'>
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className='relative z-20'>
        <div className='aproach-icon'>{icon}</div>
        <h2 className='aproach-title'>{title}</h2>
        <h2 className='aproach-desc' style={{ color: '#e4ecff' }}>
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className='relative rounded inline-flex h-12 overflow-hidden bg-black-300 p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite]' />
        <span className='inline-flex size-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2  font-bold text-white backdrop-blur-3xl text-xl'>{order}</span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className={className} {...rest}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
    </svg>
  );
};

export default Approach;
