import ProjectDescTemplate from "../components/ProjectDescTemplate";
import { ProjectList } from "../../../Store";
// import Conclusion from "../components/Conclusion";
// import Challenges from "../components/Challenges";
// import Implementation from "../components/Implementation";
// import Background from "../components/Background";
import Overview from "../components/Overview";
import { Sections } from "../components/Sections";
import Stack from "../components/Stack";

const LocalLens = () => {
  const description = `LocalLens revolutionizes fashion trend analysis by using AI to analyze video feeds from social media and street cameras. This process identifies real-time and emerging fashion trends, offering valuable insights for designers, brands, and enthusiasts. By directly observing global style developments, LocalLens provides a clear view of what's popular and what's next in fashion, making it a practical tool for staying ahead in the fast-moving fashion industry.`;

  const sections: Sections = {
    Overview: {
      name: "Overview",
      section: (
        <Overview
          projectName="LocalLens"
          websiteUrl="https://locallens.up.railway.app"
          githubUrl="https://github.com/Eykam/"
          description={description}
        />
      ),
    },
    Stack: {
      name: "Stack",
      section: (
        <Stack
          stack={{
            Frontend: ["React", "Threejs", "Zustand"],
            Backend: [
              "Python",
              "Selenium",
              "Segment Anything",
              "Yolov8",
              "Serverless",
              "AWS Lambda",
              "AWS EC2",
              "AWS RDS",
            ],
            DevOps: ["Git", "Docker", "AWS ECR", "AWS Cloudwatch", "AWS ALB"],
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
        source={ProjectList["LocalLens"].thumbnail}
      />
    </>
  );
};

export default LocalLens;
