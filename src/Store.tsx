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

// import Canvas

import { create } from "zustand";

// ======================================================================== Social Info ==========================================================================

const GITHUB_URL = "https://github.com/Eykam";
const TWITTER_URL = "https://twitter.com/SanitizeGG";
// const INSTAGRAM_URL = "https://www.instagram.com/ayecamel/";
const LINKEDIN_URL = "https://www.linkedin.com/in/eyad-kamil-157713266/";
const RESUME_URL = "/Resume_09062023.pdf";

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
  //   instagram: { link: INSTAGRAM_URL },
  linkedin: {
    link: LINKEDIN_URL,
    icon: <LinkedInIcon className="text-zinc-400" />,
  },
};

// ======================================================================== Project Info ==========================================================================

export interface ProjectType {
  name: string;
  thumbnail: string;
  url: string;
  component: () => JSX.Element;
}

export const ProjectList: { [index: string]: ProjectType } = {
  "Sanitize.gg": {
    name: "Sanitize.gg",
    thumbnail: "/images/Sanitize.png",
    url: "Example Url",
    component: Sanitize,
  },
  SocialTrends: {
    name: "SocialTrends",
    thumbnail: "/images/SocialTrends.png",
    url: "Example Url",
    component: SocialTrends,
  },
  "Sanitize Twitter": {
    name: "Sanitize Twitter",
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
  Homefilter: {
    name: "Homefilter",
    thumbnail: "/images/Homefilter.png",
    url: "Example Url",
    component: HomeFilter,
  },
};

// ======================================================================== SKILLS & INTERESTS ==========================================================================

export const SKILLS = [
  "Typescript",
  "React",
  "Nodejs",
  "Docker",
  "Redis",
  "PostgreSQL",
  "AWS",
  "MongoDB",
  "C",
  "Java",
  "Python",
  "GCP",
  "Azure",
  "Tableau",
  "R",
  "RShiny",
];

export const INTERESTS = [
  "Skateboarding",
  "Web Scraping",
  "ML",
  "Computer Graphics",
  "WASM",
  "WebGL",
  "Distributed Computing",
  "UI/UX",
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
