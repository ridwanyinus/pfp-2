import { IconType } from 'react-icons';
export interface SocialIconsType {
  url: string;
  class: string;
  size: number;
  iconClass: string;
  icon: IconType;
  className?: any;
  hover: string;
}

export interface ApproachType {
  title: string;
  order: string;
  desc: string;
  animSpeed: number;
  bg: string;
  colors?: number[][];
  dotSize: number;
}

export interface ContactType {
  name: string;
  icon: IconType;
  url: string;
  iconClass: string;
  class: string;
}

export interface ProjectsType {
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}

export interface TechStackType {
  name: string;
  img: string;
}
