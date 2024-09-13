import { Spotlight } from './ui/Spotlight';
import Image from 'next/image';
import TypedComponent from './ui/TypedComponent';
import { FaDiscord, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import ShowLottie from './ui/ShowLottie';
import assets from '@/lib/assets/assets';
import Link from 'next/link';
import { socialIcons } from '@/lib/content/hero';
// todo: make utils class for all reusable classes

const Hero = () => {
  return (
    <section className='pb-20 pt-10 h-full'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-svh' fill='white' />
        <Spotlight className='-top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
      </div>

      <div className='h-svh w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center'>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      </div>

      <section className='relative flex flex-col medium:flex-row  justify-center medium:items-center mt-10 lg:mt-14 largesceen:mt-20 px-5 xl:pl-14 desktop:px-24 largesceen:px-48 largesceen:gap-10 '>
        <div className='flex flex-col flex-1  desktop:flex-[1.5] largesceen:flex-[1.2]  justify-center'>
          <p className='text-xl small:text-2xl lg:text-3xl largesceen:text-4xl mb-2 z-10 relative'>👋 Hello, I’m</p>

          <h1 className='heading-h1'>
            Ridwan <span className='block'>Yinus</span>
          </h1>

          <div className='flex gap-x-1 text-base xs:text-xl small:text-2xl lg:text-3xl xl:text-4xl largesceen:text-5xl desktop:mt-2 largesceen:mt-4 items-center'>
            <p className=''>I&apos;m a {''} </p>
            <span className='pl-1 border-purple border-b inline-flex leading-none  h-fit text-purple'>
              <TypedComponent />
            </span>
          </div>

          <div className='flex items-center  md:gap-4 gap-6 mt-8'>
            {socialIcons.map((items, i: number) => (
              <div key={i}>
                <Link href={items.url} className={`${items.class} bg-black-200`}>
                  <items.icon className={`items.iconClass`} size={items.size} />
                </Link>
              </div>
            ))}

            <Link
              href='https://mail.google.com/mail/u/0/?to=ridwanyinusa15@gmail.com&fs=1&tf=cm'
              className='w-10 h-10 desktop:h-14 desktop:w-14 largesceen:h-16 largesceen:w-16  flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 border-black-300 rounded-lg  hover:bg-white  group'>
              <Image
                src={assets.gmail}
                width={27}
                alt='gmail  front end, front end developer, react front end developer'
                className='desktop:w-[2.188rem] desktop:h-[2.188rem] largesceen:w-10 largesceen:h-10 group-hover:opacity-100 opacity-0'
              />
              <GoMail size={23} className='group-hover:opacity-0 opacity-100 absolute desktop:w-[2.188rem] desktop:h-10 largesceen:w-10' />
            </Link>
          </div>
        </div>

        <div className='mt-20 medium:mt-0 flex-1 justify-center  medium:justify-end xl:justify-center  items-center flex'>
          <ShowLottie />
        </div>
      </section>
    </section>
  );
};

export default Hero;
