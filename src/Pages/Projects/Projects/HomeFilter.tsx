import ProjectDescTemplate from "../components/ProjectDescTemplate";
import { ProjectList } from "../../../Store";
import Conclusion from "../components/Conclusion";
import Challenges from "../components/Challenges";
import Implementation from "../components/Implementation";
import Background from "../components/Background";
import Overview from "../components/Overview";
import { Sections } from "../components/Sections";

const HomeFilter = () => {
  const sections: Sections = {
    Overview: {
      name: "Overview",
      section: (
        <Overview
          projectName="HomeFilter"
          stack={[
            "React",
            "Serverless",
            "AWS Lambda",
            "AWS API Gateway",
            "AWS Route 53",
            "AWS Amplify",
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
        source={ProjectList["Homefilter"].thumbnail}
      />
    </>
  );
};

export default HomeFilter;
