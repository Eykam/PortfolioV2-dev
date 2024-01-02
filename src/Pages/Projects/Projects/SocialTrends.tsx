import Background from "../components/Background";
import Implementation from "../components/Implementation";
import Challenges from "../components/Challenges";
import Conclusion from "../components/Conclusion";
import ProjectDescTemplate from "../components/ProjectDescTemplate";
import Overview from "../components/Overview";
import { Sections } from "../components/Sections";
import { ProjectList } from "../../../Store";
import Stack from "../components/Stack";

const SocialTrends = () => {
  const description = `A scalable web crawler that aggregates data from TikTok and eventually other social media sites. 
  With this data, users looking to grow their following can analyze social trends and key post metrics (best time to post, most common hashtags, etc). 
  Advertisers are also able to identify potential influencers to promote their products.
    `;

  const sections: Sections = {
    Overview: {
      name: "Overview",
      section: (
        <Overview
          projectName="Social Trends"
          websiteUrl="https://tinyurl.com/socialtrend"
          description={description}
        />
      ),
    },
    Stack: {
      name: "Stack",
      section: (
        <Stack
          stack={{
            Frontend: ["React", "Material UI"],
            Backend: ["Python", "Selenium", "Express", "Nodejs", "Nginx"],
            Database: ["Redis", "AWS RDS", "SQL"],
            DevOps: ["Docker", "Linode", "Git"],
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
        source={ProjectList["SocialTrends"].thumbnail}
      />
    </>
  );
};

export default SocialTrends;
