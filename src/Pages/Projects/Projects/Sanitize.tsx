import ProjectDescTemplate from "../components/ProjectDescTemplate";
import { Sections } from "../components/Sections";
import Overview from "../components/Overview";
import Background from "../components/Background";
import Implementation from "../components/Implementation";
import Challenges from "../components/Challenges";
import Conclusion from "../components/Conclusion";
import { ProjectList } from "../../../Store";
import Stack from "../components/Stack";

const Sanitize = () => {
  const overviewDescription =
    "Sanitize is a platform designed for video editors who need to carefully monitor and moderate their content, whether it's for social media, streaming platforms, or any other reason. Users upload media and explicit content is automatically filtered using AI.";

  const sections: Sections = {
    Overview: {
      name: "Overview",
      section: (
        <Overview
          projectName="Sanitize.gg"
          websiteUrl={"https://sanitize.up.railway.app"}
          description={overviewDescription}
        />
      ),
    },
    Stack: {
      name: "Stack",
      section: (
        <Stack
          stack={{
            Frontend: ["React", "Redux", "TypeScript", "Material UI"],
            Backend: [
              "Express",
              "Nodejs",
              "Passport.js",
              "SageMaker",
              "FFMPEG",
              "Whisper",
              "GPT-3.5",
              "Oauth2.0",
              "Caddy",
              "Nginx",
            ],
            Database: ["MongoDB", "Redis"],
            DevOps: ["EC2", "Docker", "ECS", "Railway", "Git"],
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
        source={ProjectList["Sanitize.gg"].thumbnail}
      />
    </>
  );
};

export default Sanitize;
