import ProjectCard from "../../Global/ProjectCard";
import { ProjectList } from "../../Store";
import { Html } from "@react-three/drei";

function List() {
  return (
    <Html
      style={{
        width: "1400px",
        height: "900px",
        transform: "translate(-50%, -25%)",
        overflow: "scroll",
      }}
    >
      <div className="h-full w-full flex justify-center align-middle">
        <div className="w-4/5 md:w-3/4 flex flex-col justify-start md:justify-evenly md:items-center">
          <span className="self-start font-bold text-3xl md:text-4xl text-neutral-300 pl-4 ">
            Projects
          </span>

          <br />
          <br />

          <div className="h-full w-full grid md:grid-cols-3 gap-5 ">
            {Object.keys(ProjectList).map((project, index) => (
              <ProjectCard
                key={index}
                index={index}
                project={ProjectList[project]}
              />
            ))}
          </div>
        </div>
      </div>
    </Html>
  );
}

export default List;
