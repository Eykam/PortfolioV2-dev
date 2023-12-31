import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Landing from "./Sections/Landing";
import Portal from "./Sections/Portal";
import Projects from "./Sections/Projects";

interface Sections {
  [index: string]: Section;
}

interface Section {
  section: () => JSX.Element;
  name: string;
}

export const sections: Sections = {
  Landing: {
    section: Landing,
    name: "Home",
  },
  About: {
    section: About,
    name: "About Me",
  },
  Projects: {
    section: Projects,
    name: "Projects",
  },
  Portal: {
    section: Portal,
    name: "Portal",
  },
  Contact: {
    section: Contact,
    name: "Contact Me",
  },
};
