import Background from "../components/Background";
import Implementation from "../components/Implementation";
import Challenges from "../components/Challenges";
import Conclusion from "../components/Conclusion";
import ProjectDescTemplate from "../components/ProjectDescTemplate";
import Overview from "../components/Overview";
import { Sections } from "../components/Sections";
import { ProjectList } from "../../../Store";

const SanitizeTwitter = () => {
  const sections: Sections = {
    Overview: {
      name: "Overview",
      section: (
        <Overview
          projectName="Sanitize.gg"
          stack={[
            "React",
            "TypeScript",
            "Express",
            "Nodejs",
            "Redis",
            "EC2",
            "Docker",
            "SageMaker",
            "ECS",
            "Whisper",
            "Oauth2.0",
            "Caddy",
            "Nginx",
          ]}
          websiteUrl="https://twitter.com/SanitizeGG"
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
      {/* <DisplayView laptopView={laptopView} source={"/images/Dashboard.png"} /> */}
      <ProjectDescTemplate
        sections={sections}
        source={ProjectList["Sanitize Twitter"].thumbnail}
      />
    </>
  );
};

export default SanitizeTwitter;
