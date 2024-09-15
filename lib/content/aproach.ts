import { ApproachType } from '../types/sections';
export const aproach: ApproachType[] = [
  {
    title: 'Planning & Strategy',
    order: 'Phase 1',
    desc: "We'll collaborate to map out your website's goals, target audience, key functionalities, site structure, navigation, content requirements, and graphic design plan and strategy.",
    animSpeed: 5.1,
    bg: 'bg-emerald-900',
    dotSize: 2,
  },

  {
    title: 'Development & Progress Update',
    order: 'Phase 2',
    desc: 'Once we agree on the plan, I cue my lofi playlist and dive into coding and graphic design, keeping you updated every step from initial sketches to polished code and visuals.',
    animSpeed: 3,
    bg: 'bg-black',
    colors: [
      [236, 72, 153],
      [232, 121, 249],
    ],
    dotSize: 2,
  },

  {
    title: 'Development & Launch',
    order: 'Phase 3',
    desc: 'This is where the magic happens! Based on the approved design, I’ll translate everything into functional code, integrate graphics, and build your website from the ground up',
    animSpeed: 3,
    bg: 'bg-sky-600',
    colors: [[125, 211, 252]],
    dotSize: 2,
  },
];

export const iconClass = [
  { class: 'absolute size-6 -top-3 -left-3 dark:text-white text-black' },
  { class: 'absolute size-6 -bottom-3 -left-3 dark:text-white text-black' },
  { class: 'absolute size-6 -top-3 -right-3 dark:text-white text-black' },
  { class: 'absolute size-6 -bottom-3 -right-3 dark:text-white text-black' },
];
