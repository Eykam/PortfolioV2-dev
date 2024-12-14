import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArticleIcon from "@mui/icons-material/Article";

import FileDrive from "./Pages/Projects/Projects/FileDrive";
import SocialTrends from "./Pages/Projects/Projects/SocialTrends";
import Sanitize from "./Pages/Projects/Projects/Sanitize";
import SanitizeTwitter from "./Pages/Projects/Projects/SanitizeTwitter";
import Portfolio from "./Pages/Projects/Projects/Portfolio";
import HomeFilter from "./Pages/Projects/Projects/HomeFilter";
import Scanner from "./Pages/Projects/Projects/3dScanner";
import Porfolio3D from "./Pages/Projects/Projects/3dPortfolio";
import DroneStudio from "./Pages/Projects/Projects/DroneStudio";
import KamilAgency from "./Pages/Projects/Projects/KamilAgency";
import WorldView from "./Pages/Projects/Projects/WorldView";
import NYC_Crime from "./Pages/Projects/Projects/NYC-Crime";

// import Canvas

import { create } from "zustand";
import LocalLens from "./Pages/Projects/Projects/LocalLens";

// ======================================================================== Social Info ==========================================================================

const GITHUB_URL = "https://github.com/Eykam";
const TWITTER_URL = "https://twitter.com/AyeCaml";
const LINKEDIN_URL = "https://www.linkedin.com/in/eyad-kamil-157713266/";
const RESUME_URL = "/Resume_12132024.pdf";

export interface MenuIcons {
  link: string;
  icon?: JSX.Element;
}

export const ListSocials: { [index: string]: MenuIcons } = {
  resume: { link: RESUME_URL, icon: <ArticleIcon className="text-zinc-400" /> },
  github: { link: GITHUB_URL, icon: <GitHubIcon className="text-zinc-400" /> },
  twitter: {
    link: TWITTER_URL,
    icon: <TwitterIcon className="text-zinc-400" />,
  },
  linkedin: {
    link: LINKEDIN_URL,
    icon: <LinkedInIcon className="text-zinc-400" />,
  },
};

// ======================================================================== Project Info ==========================================================================

export interface ProjectType {
  name: string;
  thumbnail: string;
  url: string | null;
  component: () => JSX.Element;
}

export const ProjectList: { [index: string]: ProjectType } = {
  DroneStudio: {
    name: "DroneStudio",
    thumbnail: "/images/DroneStudio.png",
    url: "Example Url",
    component: DroneStudio,
  },
  "3D-Scanner": {
    name: "3D-Scanner",
    thumbnail: "/images/3DScanner.png",
    url: "Example Url",
    component: Scanner,
  },
  // "World View": {
  //   name: "World-View",
  //   thumbnail: "/images/WorldView.png",
  //   url: "Example Url",
  //   component: WorldView,
  // },
  SocialTrends: {
    name: "SocialTrends",
    thumbnail: "/images/SocialTrends.png",
    url: "Example Url",
    component: SocialTrends,
  },
  "Sanitize.gg": {
    name: "Sanitize.gg",
    thumbnail: "/images/Sanitize.png",
    url: "Example Url",
    component: Sanitize,
  },
  // InsuranceExchange: {
  //   name: "Sanitize.gg",
  //   thumbnail: "/images/Sanitize.png",
  //   url: "Example Url",
  //   component: Sanitize,
  // },
  "3D-Portfolio": {
    name: "3d-Portfolio",
    thumbnail: "/images/3D-Portfolio.png",
    url: "Example Url",
    component: Porfolio3D,
  },
  LocalLens: {
    name: "LocalLens",
    thumbnail: "/images/LocalLens.png",
    url: "Example Url",
    component: LocalLens,
  },
  // "NYC-Crime": {
  //   name: "NYC-Crime-Tracker",
  //   thumbnail: "/images/Sanitize.png",
  //   url: "Example Url",
  //   component: NYC_Crime,
  // },
  "Sanitize Twitter": {
    name: "Sanitize-Twitter",
    thumbnail: "/images/SanitizeTwitter.png",
    url: "Example Url",
    component: SanitizeTwitter,
  },
  // Filedrive: {
  //   name: "Filedrive",
  //   thumbnail: "/images/vBillboard.png",
  //   url: "Example Url",
  //   component: FileDrive,
  // },
  Portfolio: {
    name: "Portfolio",
    thumbnail: "/images/Portfolio.png",
    url: "Example Url",
    component: Portfolio,
  },
  KamilAgency: {
    name: "KamilAgency",
    thumbnail: "/images/KamilAgency.png",
    url: "Example Url",
    component: KamilAgency,
  },
  Homefilter: {
    name: "Homefilter",
    thumbnail: "/images/Homefilter.png",
    url: "Example Url",
    component: HomeFilter,
  },
};

// ======================================================================== SKILLS & INTERESTS ==========================================================================

export const SKILLS = [
  "C",
  "Zig",
  "Rust",
  "RTOS",
  "Embedded",
  "Typescript",
  "React",
  "Python",
  "Java",
  "Docker",
  "Redis",
  "PostgreSQL",
  "AWS",
  "MongoDB",
  "GCP",
  "Nginx",
  "Nix",
];

export const INTERESTS = [
  "Computer Vision",
  "Embedded",
  "Machine Learning",
  "OpenGL",
  "Distributed Computing",
  "Web Scraping",
  "UI/UX",
  "Skateboarding",
];

// ======================================================================== ZUSTAND STORE ==========================================================================

export enum View {
  small = "sm",
  medium = "md",
  large = "lg",
}

interface ScrollState {
  section: number;
  setSection: (section: number) => void;
  source: string;
  setSource: (source: string) => void;
  getView: () => View;
}

const useScrollStore = create<ScrollState>((set, get) => ({
  section: 0,
  setSection: (section) => set({ section: section }),
  source: "/images/Sanitize.png", //change to blank placeholder later
  setSource: (source) => set({ source: source }),
  getView: () =>
    window.innerWidth < 640
      ? View.small
      : window.innerWidth < 768
      ? View.medium
      : View.large,
}));

export default useScrollStore;
