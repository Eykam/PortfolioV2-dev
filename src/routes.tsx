import Home from "./Pages/Home/Home";
import { sections } from "./Pages/Home/Components/Sections";
import { ProjectList } from "./Store";
import AllProjects from "./Pages/Projects/list";

const SectionRoutes = Object.keys(sections).map((section, index) => ({
  path: "/" + section,
  name: section,
  element: <Home initialSection={index} />,
  isPrivate: false,
}));

export const ProjectRoutes = Object.keys(ProjectList).map((project, index) => ({
  path: "/projects/" + ProjectList[project].name,
  name: ProjectList[project].name,
  element: ProjectList[project].component(),
  isPrivate: false,
}));

export const routes = [
  { path: "/", name: "Home", element: <Home />, isPrivate: false },
  {
    path: "/projects/all",
    name: "All Projects",
    element: AllProjects(),
    isPrivate: false,
  },
  ...ProjectRoutes,
  ...SectionRoutes,
];
