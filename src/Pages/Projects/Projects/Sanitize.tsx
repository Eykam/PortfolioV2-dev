import ProjectDescTemplate from "../components/ProjectDescTemplate";
import { Sections } from "../components/Sections";
import Overview from "../components/Overview";
import Background from "../components/Background";
import Implementation from "../components/Implementation";
import Challenges from "../components/Challenges";
import Conclusion from "../components/Conclusion";
import { ProjectList } from "../../../Store";

const Sanitize = () => {
  const sections: Sections = {
    Overview: {
      name: "Overview",
      section: (
        <Overview
          projectName="Sanitize.gg"
          stack={[
            "React",
            "Redux",
            "TypeScript",
            "Express",
            "Nodejs",
            "MongoDB",
            "Passport.js",
            "Redis",
            "EC2",
            "Docker",
            "SageMaker",
            "ECS",
            "Whisper",
            "GPT-3.5",
            "Oauth2.0",
            "Caddy",
            "Nginx",
            "Material UI",
            "Railway",
            "Git",
          ]}
          websiteUrl={"https://sanitize.up.railway.app"}
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
