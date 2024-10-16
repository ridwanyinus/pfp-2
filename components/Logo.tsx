import Image from 'next/image';
import Link from 'next/link';
import assets from '@/lib/assets/assets';
const Ridwan = () => {
  return (
    <div className='relative z-10 pl-5 xl:px-14 desktop:pl-24 largesceen:pl-48 pt-5 flex gap-1 items-center '>
      <Image src={assets.Logo} alt='Ridwan Yinus front end, front end developer, react front end developer' className='max-sm:w-[1.875rem] desktop:w-[3.75rem]' />
      <Link href='#hero' className='text-xl sm:text-2xl desktop:text-4xl text-purple font-semibold font-outfit group relative'>
        Ridwan
        <div className='absolute bottom-1 left-0 h-[0.063rem] w-0 group-hover:w-full bg-purple duration-300'></div>
      </Link>
    </div>
  );
};

export default Ridwan;
