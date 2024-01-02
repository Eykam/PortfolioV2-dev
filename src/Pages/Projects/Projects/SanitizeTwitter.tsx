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
  const description = `A Twitter Bot that translates content to reduce misinformation and break language barriers on Social Media. 
  Tweets are translated by mentioning @SanitizeGG under posts containing media, and providing a target language.
  Due to the limitations of Twitter's API (and price), the entire system is built using webscraping.`;

  const sections: Sections = {
    Overview: {
      name: "Overview",
      section: (
        <Overview
          projectName="Sanitize Twitter"
          websiteUrl="https://twitter.com/SanitizeGG"
          description={description}
        />
      ),
    },
    Stack: {
      name: "Stack",
      section: (
        <Stack
          stack={{
            Frontend: ["Twitter"],
            Backend: [
              "Python",
              "Selenium",
              "Chromium",
              "Express",
              "Nodejs",
              "EC2",
              "SageMaker",
              "FFMPEG",
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
