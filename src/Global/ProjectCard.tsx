import { Paper } from "@mui/material";
import { ProjectType } from "../Store";
import { motion } from "framer-motion";

const ProjectCard = ({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) => {
  return (
    <motion.div
      className="h-full w-full cursor-pointer"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
          delay: 0.2 * (index % 3),
        },
      }}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.5,
          // delay: 0.2,
        },
      }}
      onHoverStart={(e) => {
        (e.target as HTMLDivElement).style.zIndex = "9999";
      }}
      onHoverEnd={(e) => {
        (e.target as HTMLDivElement).style.zIndex = "1001";
      }}
    >
      <Paper
        className=" h-full w-full self-center inline-block opacity-90"
        style={{
          backgroundColor: "black",
          backgroundImage: `url(${project.thumbnail})`,
          backgroundSize: "cover",
          borderRadius: "10px",
          color: "rgb(200,200,200)",
        }}
      >
        <div
          className="h-full w-full flex self-center"
          onClick={() => {
            window.open("/projects/" + project.name, "_self");
          }}
        >
          <span
            className="font-bold text-md text-neutral-100 m-0 rounded-md p-2 h-fit"
            style={{ background: "rgb(50, 50, 50)" }}
          >
            {project.name}
          </span>
        </div>
      </Paper>
    </motion.div>
  );
};

export default ProjectCard;
