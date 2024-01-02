import { Chip } from "@mui/material";
import { motion } from "framer-motion";

const Stack = ({ stack }: { stack: { [index: string]: string[] } }) => {
  return (
    <div className="w-full h-full flex justify-center align-middle">
      <div className="w-3/4 md:w-3/4 lg:w-1/2 flex flex-col justify-center">
        <span className="font-bold text-3xl md:text-4xl  text-neutral-200">
          Stack
        </span>

        <br />

        <div className=" bg-neutral-900 bg-opacity-60 rounded-xl p-[5%] justify-between">
          {Object.keys(stack).map((layer, index) => (
            <>
              <motion.div
                key={index}
                className="inline-block cursor-pointer"
                // initial={{ opacity: 0, x: -100 }}
                // whileInView={{
                //   opacity: 1,
                //   x: 0,
                //   transition: {
                //     duration: 1,
                //     delay: 0.1 * index,
                //   },
                // }}
              >
                <span className="font-bold text-lg md:text-xl  text-neutral-200">
                  {layer}:
                  <br />
                </span>

                {stack[layer].map((skill, index) => (
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
              </motion.div>
              <br />
              <br />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
