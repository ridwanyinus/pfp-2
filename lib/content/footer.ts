import { FaLinkedin, FaTelegram, FaDiscord } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { IoLocationSharp } from 'react-icons/io5';
import { ContactType } from '../types/sections';
export const contacts: ContactType[] = [
  {
    name: 'pioche_dgreat',
    icon: FaDiscord,
    url: 'https://discord.com/users/1142082910351011991',
    class: 'flex items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 text-cyan-300 rounded-lg text-xs sm:text-sm md:text-base gap-2 2xl:gap-4 desktop:text-lg w-fit mb-5',
    iconClass: 'max-sm:w-[0.938rem] desktop:size-[2.188rem]',
  },

  {
    name: 'Labile_6',
    icon: FaTelegram,
    url: 'https://t.me/Labile_6',
    class: 'flex items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 text-cyan-300 rounded-lg text-xs sm:text-sm md:text-base gap-2 2xl:gap-4 desktop:text-lg w-fit mt-5',
    iconClass: 'max-sm:w-[0.938rem] desktop:size-[2.188rem]',
  },

  {
    name: 'ridwanyinus',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/ridwan-opeyemi-yinusa/',
    class:
      'flex items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 text-cyan-300 rounded-lg text-xs sm:text-sm md:text-base gap-2 2xl:gap-4 desktop:text-lg w-fit mt-5 pointer-events-none',
    iconClass: 'max-sm:w-[0.938rem] desktop:size-[2.188rem]',
  },

  {
    name: 'ridwanyinus15@gmail.com',
    icon: GoMail,
    url: 'https://mail.google.com/mail/u/0/?to=ridwanyinusa15@gmail.com&fs=1&tf=cm',
    class: 'flex items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 text-cyan-300 rounded-lg text-xs sm:text-sm md:text-base gap-2 2xl:gap-4 desktop:text-lg w-fit mt-5 ',
    iconClass: 'max-sm:w-[0.938rem] desktop:size-[2.188rem]',
  },
];
