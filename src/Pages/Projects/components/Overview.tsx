import { IconButton } from "@mui/material";
import Chip from "@mui/material/Chip";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import PreviewIcon from "@mui/icons-material/Preview";

const Overview = ({
  projectName,
  description,
  websiteUrl,
  githubUrl,
}: {
  projectName: string;
  description?: string;
  websiteUrl?: string;
  githubUrl?: string;
}) => {
  return (
    <div className="w-full h-full flex justify-center mt-10">
      <div className="w-4/5 md:w-3/4 lg:w-1/2 flex flex-col justify-between">
        <div>
          <span className="font-bold text-3xl md:text-4xl text-neutral-200">
            {projectName}
          </span>
        </div>

        <br />

        <br />

        <div className="h-[60%] md:h-[50%]">
          <div className="h-fit bg-neutral-900 bg-opacity-60 rounded-xl p-[5%] flex flex-col">
            <div className="h-[20%] md:h-[40%]">
              <span className="font-bold text-3xl md:text-4xl text-neutral-200">
                Overview
              </span>
            </div>

            <br />

            <div>
              <span className="font-semibold  text-neutral-400 text-xs xl:text-lg max-h-1/3 overflow-y-auto">
                {description}
              </span>
            </div>

            <br />

            <div>
              <span className="self-start font-bold text-lg md:text-xl text-neutral-400">
                Links:
              </span>

              {websiteUrl ? (
                <IconButton
                  onClick={() => {
                    window.open(websiteUrl);
                  }}
                >
                  <PreviewIcon style={{ color: "gray" }} />
                </IconButton>
              ) : (
                <></>
              )}

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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Overview;
