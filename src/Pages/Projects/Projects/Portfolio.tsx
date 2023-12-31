import ProjectDescTemplate from "../components/ProjectDescTemplate";
import { ProjectList } from "../../../Store";
import Overview from "../components/Overview";
import Background from "../components/Background";
import Implementation from "../components/Implementation";
import Challenges from "../components/Challenges";
import Conclusion from "../components/Conclusion";
import { Sections } from "../components/Sections";

const Portfolio = () => {
  const sections: Sections = {
    Overview: {
      name: "Overview",
      section: (
        <Overview
          projectName="Portfolio"
          stack={[
            "React",
            "TypeScript",
            "Material UI",
            "Three.js",
            "GLSL",
            "Zustand",
            "Node.js",
            "Express",
            "Railway",
            "Git",
          ]}
          websiteUrl="https://ekamil.up.railway.app"
        />
      ),
    },
    Background: {
      name: "Overview",
      section: <Background />,
    },
    Implementation: {
      name: "Overview",
      section: <Implementation />,
    },
    Challenges: {
      name: "Overview",
      section: <Challenges />,
    },
    Conclusion: {
      name: "Overview",
      section: <Conclusion />,
    },
  };

  return (
    <>
      <ProjectDescTemplate
        sections={sections}
        source={ProjectList["Portfolio"].thumbnail}
      />
    </>
  );
};

export default Portfolio;
