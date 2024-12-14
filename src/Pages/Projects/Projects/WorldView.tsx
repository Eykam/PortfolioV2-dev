import ProjectDescTemplate from "../components/ProjectDescTemplate";
import { ProjectList } from "../../../Store";
import Overview from "../components/Overview";
import Background from "../components/Background";
import Implementation from "../components/Implementation";
import Challenges from "../components/Challenges";
import Conclusion from "../components/Conclusion";
import { Sections } from "../components/Sections";
import Stack from "../components/Stack";

const Portfolio = () => {
  const description = `My personal portfolio, which introducted me to 3D programming on the Web, while showcasing some of my personal projects and interesting details about myself! 
  The site was built using React, Three.js and GLSL.`;

  const sections: Sections = {
    Overview: {
      name: "Overview",
      section: (
        <Overview
          projectName="Portfolio"
          websiteUrl="https://ekamil.up.railway.app"
          githubUrl="https://github.com/Eykam/PortfolioV2-dev"
          description={description}
        />
      ),
    },
    Stack: {
      name: "Stack",
      section: (
        <Stack
          stack={{
            Frontend: [
              "React",
              "TypeScript",
              "Material UI",
              "Three.js",
              "Blender",
              "GLSL",
              "Zustand",
            ],
            Backend: ["Node.js", "Express"],
            DevOps: ["Railway", "Git"],
          }}
        />
      ),
    },
    // Background: {
    //   name: "Overview",
    //   section: <Background />,
    // },
    // Implementation: {
    //   name: "Overview",
    //   section: <Implementation />,
    // },
    // Challenges: {
    //   name: "Overview",
    //   section: <Challenges />,
    // },
    // Conclusion: {
    //   name: "Overview",
    //   section: <Conclusion />,
    // },
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
