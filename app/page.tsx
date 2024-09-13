import Approach from '@/components/Approach';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import RecentProjects from '@/components/RecentProjects';
import Ridwan from '@/components/Logo';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';
import About from '@/components/About';
import { LampDemo } from '@/components/LampEffects';
import Services from '@/components/Services';
import TechStack from '@/components/TechStack';
import Loader from '@/components/Loader';

// TODO: refactor all the sections
// TODO: create a index.ts for all the datas for better restructuring
// TODO: create a dynamic seo data
// TODO: create a 404
//  TODO delete unused variables and remove unused imports
// TODO: make the code cleaner and more readable
// TODO: use localfonts for optimization
// TODO: add animations.ts
// TODO: create more utils-css for repeatable styles
// TODO:  add a favicon for all the pages and sizes

export default function Home() {
  return (
    <main className='relative bg-black-100 justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5'>
      <div className='w-full'>
        <Loader />
        <FloatingNav navItems={navItems} />
        <Ridwan />
        <Hero />
        <LampDemo />
        <About />
        <LampDemo />
        <Services />
        <TechStack />
        <RecentProjects />
        <Approach />
        {/* <Experience /> */}
        <Footer />
      </div>
    </main>
  );
}
