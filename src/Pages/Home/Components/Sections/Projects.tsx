import ProjectCard from "../../../../Global/ProjectCard";
import { ProjectList } from "../../../../Store";

const Projects = () => {
  const MAX = window.innerWidth < 640 ? 3 : 6;

  return (
    <div className="h-4/5 w-full flex justify-center align-middle">
      <div className="w-4/5 md:w-3/4 flex flex-col justify-start md:justify-evenly md:items-center">
        <span className="self-start font-bold text-3xl md:text-4xl text-neutral-300 pl-4 ">
          Projects
        </span>

        <br />
        <br />

        <div className="h-3/4 w-full grid grid-rows-3 md:grid-rows-2 md:grid-cols-3 gap-5 ">
          {Object.keys(ProjectList)
            .filter((_, index) => index < MAX)
            .map((project, index) => (
              <ProjectCard
                key={index}
                index={index}
                project={ProjectList[project]}
              />
            ))}
        </div>
      </div>
    </div>
  );
  // return <Construction />;
};

export default Projects;
