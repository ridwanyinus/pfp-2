import assets from '@/lib/assets/assets';
export const navItems = [
  { name: 'About', url: '#about' },
  { name: 'Services', url: '#service' },
  { name: 'Projects', url: '#projects' },
  { name: 'Contact', url: '#footer' },
];

export const projects = [
  {
    id: 1,
    title: 'Positivus: Navigating the digital landscape for success',
    des: 'Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.',
    img: '/positivus.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/next.svg'],
    link: 'https://positivus-ryo.vercel.app/',
  },
  {
    id: 2,
    title: 'Brainwave: Your Ultimate Guide to Companion',
    des: 'With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.',
    img: '/brainwave.png',
    iconLists: ['/next.svg', '/re.svg', '/tail.svg', '/ts.svg'],
    link: 'https://brainwave-ryo.vercel.app/',
  },
  {
    id: 3,
    title: 'KNFT: Culinary Delights Await',
    des: 'Discover, buy, and sell unique KNFTs on our platform.',
    img: '/knft.png',
    iconLists: ['/re.svg', '/tail.svg', '/next.svg', '/ts.svg'],
    link: 'https://knft-ryo.vercel.app/',
  },

  {
    id: 4,
    title: 'BankHotel: A Place of Tranquility and Community',
    des: 'Discover bankHotel, a serene hotel dedicated to nurturing community spirit and fostering connections.',
    img: '/bank.jpg',
    iconLists: ['/next.svg', '/re.svg', '/tail.svg', '/ts.svg'],
    link: 'https://bank-hotel-ryo.vercel.app',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
  },
  {
    id: 2,
    img: '/twit.svg',
  },
  {
    id: 3,
    img: '/link.svg',
  },
];

export const techStack1 = [
  { name: 'html', img: assets.html },
  { name: 'css', img: assets.css },
  { name: 'JAVASCRIPT', img: assets.js },
  { name: 'github', img: assets.github },
  { name: 'git', img: assets.git },
  { name: 'gitlab', img: assets.gitlab },
];

export const techStack2 = [
  { name: 'react', img: assets.react },
  { name: 'typescript', img: assets.typescript },
  { name: 'next.js', img: assets.nextjs },
  { name: 'tailwind', img: assets.tailwind },
  { name: 'vscode', img: assets.vs },
  { name: 'npm', img: assets.npm },
];

export const techStack3 = [
  { name: 'photoshop', img: assets.ps },
  { name: 'ILLUSTRATOR', img: assets.ai },
  { name: 'figma', img: assets.figma },
  { name: 'canva', img: assets.canva },
  { name: 'vercel', img: assets.vercel },
  { name: 'netlify', img: assets.netlify },
];
