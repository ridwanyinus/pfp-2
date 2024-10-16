'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { getId } from '@/utils/helper';
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    url: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [isAbove768px, setIsAbove768px] = useState(false);

  useEffect(() => {
    // Function to handle the resize event
    const handleResize = () => {
      setIsAbove768px(window.innerWidth > 768);
    };

    // Set the initial value
    handleResize();

    // Add the resize event listener
    window.addEventListener('resize', handleResize);

    // Remove the event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    const previous = scrollYProgress.getPrevious();
    if (typeof current === 'number' && typeof previous === 'number') {
      let direction = current - previous;

      if (isAbove768px) {
        // For viewports above 768px
        if (scrollYProgress.get() < 0.01) {
          setVisible(true);
        } else {
          if (direction < 0) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        }
      } else {
        // For viewports below 768px
        if (scrollYProgress.get() < 0.01) {
          setVisible(false);
        } else {
          if (direction < 0) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        }
      }
    }
  });

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'flex max-w-fit fixed top-5 inset-x-0 mx-auto border rounded-full bg-black-100 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-5 items-center justify-center space-x-4 border-white/[0.2]',
          className,
        )}>
        {navItems.map((navItem: any) => (
          <Link key={getId()} href={navItem.url} className={cn('relative dark:text-neutral-50 items-center flex  text-neutral-600 dark:hover:text-purple hover:text-purple group')}>
            <span className='text-sm 2xl:text-lg !cursor-pointer outline-dash'>{navItem.name}</span>
            <div className='absolute -bottom-[0.1px] left-0 h-[1px] w-0 group-hover:w-full bg-purple duration-300'></div>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
