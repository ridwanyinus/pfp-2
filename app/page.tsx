import Approach from '@/components/Approach';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import RecentProjects from '@/components/RecentProjects';
import Ridwan from '@/components/Logo';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/lib/content/navbar';
import About from '@/components/About';
import { LampDemo } from '@/components/LampEffects';
import Services from '@/components/Services';
import TechStack from '@/components/TechStack';
import Loader from '@/components/Loader';


export default function Home() {
  return (
    <main className='main'>
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
        <Footer />
      </div>
    </main>
  );
}
