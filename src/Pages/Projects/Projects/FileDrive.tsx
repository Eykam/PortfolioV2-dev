import { Sections } from "../components/Sections";
import Overview from "../components/Overview";
import Background from "../components/Background";
import Implementation from "../components/Implementation";
import Challenges from "../components/Challenges";
import Conclusion from "../components/Conclusion";
import ProjectDescTemplate from "../components/ProjectDescTemplate";
import { ProjectList } from "../../../Store";
import Stack from "../components/Stack";

const FileDrive = () => {
  const sections: Sections = {
    Overview: {
      name: "Overview",
      section: (
        <Overview projectName="Filedrive" websiteUrl="https://Homefilter.io" />
      ),
    },
    Stack: {
      name: "Stack",
      section: (
        <Stack
          stack={{
            Frontend: ["React", "Typescript", "AWS S3", "Material UI"],
            Backend: ["Oauth2.0", "Node.js", "Express", "Passport.js"],
            Database: ["AWS S3"],
            DevOps: ["Git", "Railway", "Docker"],
          }}
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
        source={ProjectList["Filedrive"].thumbnail}
      />
    </>
  );
};

export default FileDrive;
