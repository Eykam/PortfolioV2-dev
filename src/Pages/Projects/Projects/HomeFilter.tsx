import ProjectDescTemplate from "../components/ProjectDescTemplate";
import { ProjectList } from "../../../Store";
import Conclusion from "../components/Conclusion";
import Challenges from "../components/Challenges";
import Implementation from "../components/Implementation";
import Background from "../components/Background";
import Overview from "../components/Overview";
import { Sections } from "../components/Sections";
import Stack from "../components/Stack";

const HomeFilter = () => {
  const description = `Homefilter.io is a web application built to provide users with a simple and robust way to query SDAT / data about a home located in Maryland. 
  It was built using a React frontend and AWS backend (API Gateway, LAMBDA, S3, Cloudwatch and Route 53), and served as an introduction to Web Development.`;

  const sections: Sections = {
    Overview: {
      name: "Overview",
      section: (
        <Overview
          projectName="HomeFilter"
          websiteUrl="https://Homefilter.io"
          githubUrl="https://github.com/Eykam/Homefilter"
          description={description}
        />
      ),
    },
    Stack: {
      name: "Stack",
      section: (
        <Stack
          stack={{
            Frontend: ["React"],
            Backend: [
              "Serverless",
              "AWS Lambda",
              "AWS API Gateway",
              "AWS Route 53",
            ],
            DevOps: ["AWS Amplify", "Git"],
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
        source={ProjectList["Homefilter"].thumbnail}
      />
    </>
  );
};

export default HomeFilter;
