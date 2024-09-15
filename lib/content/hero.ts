import { FaDiscord, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { SocialIconsType } from '../types/sections';
export const socialIcons: SocialIconsType[] = [
  {
    class:
      'w-10 h-10 desktop:h-14 desktop:w-14 largesceen:h-16 largesceen:w-16 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  border-black-300 rounded-lg  github',
    url: 'https://github.com/ridwanyinus',
    icon: FaGithub,
    size: 23,
    iconClass: 'desktop:w-[2.188rem] desktop:h-[2.188rem] largesceen:w-10 largesceen:h-10',
  },
  {
    class:
      'w-10 h-10 desktop:h-14 desktop:w-14 largesceen:h-16 largesceen:w-16  flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  border-black-300 rounded-lg telegram',
    url: 'https://t.me/Labile_6',
    icon: FaTelegram,
    size: 23,
    iconClass: 'desktop:w-[2.188rem] desktop:h-[2.188rem] largesceen:w-10 largesceen:h-10',
  },
  {
    class:
      'w-10 h-10 desktop:h-14 desktop:w-14 largesceen:h-16 largesceen:w-16  flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  border-black-300 rounded-lg  discord',
    url: 'https://discord.com/users/1142082910351011991',
    icon: FaDiscord,
    size: 23,
    iconClass: 'desktop:w-[2.188rem] desktop:h-[2.188rem] largesceen:w-10 largesceen:h-10 ',
  },

  // todo: add linkedin back after updating linkedIn profile
  // {
  //   class:
  //     'w-10 h-10 desktop:h-14 desktop:w-14 largesceen:h-16 largesceen:w-16  flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  border-black-300 rounded-lg  linkedIn',
  //   url: 'https://www.linkedin.com/in/ridwan-opeyemi-yinusa/',
  //   icon: FaLinkedin,
  //   size: 23,
  //   iconClass: 'desktop:w-[2.188rem] desktop:h-[2.188rem] largesceen:w-10 largesceen:h-10',
  // },
];
