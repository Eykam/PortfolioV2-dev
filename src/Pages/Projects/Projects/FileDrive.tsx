import { Sections } from "../components/Sections";
import Overview from "../components/Overview";
import Background from "../components/Background";
import Implementation from "../components/Implementation";
import Challenges from "../components/Challenges";
import Conclusion from "../components/Conclusion";
import ProjectDescTemplate from "../components/ProjectDescTemplate";
import { ProjectList } from "../../../Store";

const FileDrive = () => {
  const sections: Sections = {
    Overview: {
      name: "Overview",
      section: (
        <Overview
          projectName="Filedrive"
          stack={[
            "React",
            "Typescript",
            "Oauth2.0",
            "Node.js",
            "Express",
            "Docker",
            "Passport.js",
            "AWS S3",
            "Material UI",
            "Railway",
            "Git",
          ]}
          websiteUrl="https://Homefilter.io"
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
