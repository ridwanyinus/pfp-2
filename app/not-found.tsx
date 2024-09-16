'use client';
import { Player } from '@lottiefiles/react-lottie-player';
import lottie from '@/public/lottie/404.json';
import Link from 'next/link';
import type { Metadata } from 'next';
// Import Metadata for custom meta tags

// todo: why not working
export const metadata: Metadata = {
  title: 'Page Not Found - Ridwan Yinus',
  description: "Oops! The page you're looking for doesn't exist. Click here to get back on track.",
};

const NotFound = () => {
  return (
    <main className='flex-center flex-col min-h-svh w-screen bg-black-100'>
      <div className={`max-w-sm md:max-w-md`}>
        <Player autoplay loop src={lottie}></Player>
      </div>
      <Link href='/' className='mt-12 outline-double hover:outline-dotted hover:text-purple p-2 outline-lightgreen outline-[3px] text-sm 2xl:text-base'>
        You’ve wandered into unknown territory. Click here to return home.
      </Link>
    </main>
  );
};

export default NotFound;
