import { IconButton } from "@mui/material";
import Chip from "@mui/material/Chip";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import PreviewIcon from "@mui/icons-material/Preview";

const Overview = ({
  stack,
  projectName,
  description,
  websiteUrl,
  githubUrl,
}: {
  stack: string[];
  projectName: string;
  description?: string;
  websiteUrl?: string;
  githubUrl?: string;
}) => {
  return (
    <div className="w-full h-full flex justify-center align-middle">
      <div className="w-4/5 md:w-3/4 lg:w-1/2 flex flex-col justify-center">
        <div className="h-[20%] md:h-[40%]">
          <span className="font-bold text-3xl md:text-4xl text-neutral-200">
            {projectName}
          </span>
        </div>

        <br />

        <br />

        <div className=" bg-neutral-900 bg-opacity-60 rounded-xl p-[5%] flex flex-col justify-between">
          <div>
            <span className="font-semibold text-sm md:text-xl lg:text-xl text-neutral-400">
              I'm a Full Stack Developer, and University of Maryland Alumnus,
              specialized in creating Portable and Scalable systems. My
              interests include MLOps, DevOps and Web Scraping.
            </span>
          </div>

          <br />

          <div>
            <span className="self-start font-bold text-lg md:text-xl text-neutral-400">
              Links:
            </span>

            <IconButton
              onClick={() => {
                window.open(websiteUrl);
              }}
            >
              <PreviewIcon style={{ color: "gray" }} />
            </IconButton>

            {githubUrl ? (
              <IconButton
                onClick={() => {
                  window.open(githubUrl);
                }}
              >
                <CodeIcon style={{ color: "gray" }} />
              </IconButton>
            ) : (
              <></>
            )}
          </div>

          <div>
            <span className="self-start font-bold text-lg md:text-xl text-neutral-400 ">
              Stack:
            </span>

            <br />

            {stack.map((skill, index) => (
              <motion.div
                key={index}
                className="inline-block cursor-pointer"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    delay: 0.1 * index,
                  },
                }}
                whileHover={{
                  scale: 1.25,
                  transition: {
                    duration: 0.5,
                  },
                }}
              >
                <Chip
                  label={skill}
                  style={{
                    background: "#261D39",
                    color: "rgb(200,200,200)",
                    margin: "2px",
                    borderRadius: "7px",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Overview;
