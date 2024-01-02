import Background from "../components/Background";
import Implementation from "../components/Implementation";
import Challenges from "../components/Challenges";
import Conclusion from "../components/Conclusion";
import ProjectDescTemplate from "../components/ProjectDescTemplate";
import Overview from "../components/Overview";
import { Sections } from "../components/Sections";
import { ProjectList } from "../../../Store";
import Stack from "../components/Stack";

const SanitizeTwitter = () => {
  const sections: Sections = {
    Overview: {
      name: "Overview",
      section: (
        <Overview
          projectName="Sanitize Twitter"
          websiteUrl="https://twitter.com/SanitizeGG"
        />
      ),
    },
    Stack: {
      name: "Stack",
      section: (
        <Stack
          stack={{
            frontend: ["Twitter"],
            Backend: [
              "Python",
              "Selenium",
              "Chromium",
              "Express",
              "Nodejs",
              "EC2",
              "SageMaker",
              "Whisper",
              "Oauth2.0",
              "Caddy",
              "Nginx",
            ],
            Database: ["Redis", "BullMQ"],
            DevOps: ["Docker", "ECS", "Railway", "Git"],
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
        source={ProjectList["Sanitize Twitter"].thumbnail}
      />
    </>
  );
};

export default SanitizeTwitter;
