import Avatar from "@mui/material/Avatar";

import { motion } from "framer-motion";
import useScrollStore, { View } from "../../../../Store";
import { Suspense } from "react";

const Landing = () => {
  const { getView } = useScrollStore((state) => ({ getView: state.getView }));
  const view = getView();

  return (
    <div className="h-full w-full flex flex-col justify-center relative">
      <div className="self-center w-3/4 lg:w-1/2">
        <motion.span
          className="font-bold text-xl md:text-2xl lg:text-3xl"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >
          Hi, I'm
        </motion.span>

        <br />

        <motion.span
          className="font-bold text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.7,
          }}
        >
          Eyad Kamil
        </motion.span>
      </div>

      <br />

      {view === View.small ? (
        //========================================== Non-mobile =========================================
        <div className="self-center w-3/4 ">
          <Suspense>
            <Avatar
              className="m-auto"
              sx={{ width: 200, height: 200 }}
              src="./images/1.jpeg"
              alt="profile picture"
            />
          </Suspense>

          <br />

          {/* Add Highlighted important words here */}
          <div className=" bg-neutral-900 bg-opacity-60 rounded-xl p-2 md:w-1/3">
            <span className="font-bold text-xl md:text-2xl lg:text-3xl ">
              Welcome!
            </span>

            <br />

            <span className="font-bold text-sm md:text-xl lg:text-xl text-neutral-400">
              I'm a Full Stack Developer, and University of Maryland Alumnus,
              specialized in creating Portable and Scalable systems. My
              interests include MLOps, DevOps and Web Scraping
            </span>
          </div>
        </div>
      ) : (
        //========================================== Non-mobile =========================================
        <div
          className={
            "flex w-3/4 lg:w-1/2 self-center mt-5 justify-between bg-neutral-900 bg-opacity-60 rounded-xl p-4"
          }
        >
          {/* Add Highlighted important words here */}
          <div className="  p-4 w-4/5 h-fit min-h-[25vh] self-center flex flex-col justify-evenly">
            <span className="font-bold text-xl md:text-2xl lg:text-3xl ">
              Welcome!
            </span>

            <br />

            <span className="font-bold text-sm md:text-xl lg:text-xl text-neutral-400">
              I'm a Full Stack Developer, and University of Maryland Alumnus,
              specialized in creating Portable and Scalable systems. My
              interests include MLOps, DevOps and Web Scraping
            </span>
          </div>

          <Suspense>
            <Avatar
              className={"m-2 w-1/5"}
              sx={{ width: 250, height: 250 }}
              src="./images/1.jpeg"
            />
          </Suspense>
        </div>
      )}

      {/* <div className="self-center absolute bottom-20 lg:bottom-10 blink_me">
        <img
          src="./images/scroll.png"
          alt="scroll"
          style={{
            height: "40px",
            width: "40px",
          }}
        />
      </div> */}
    </div>
  );
};

export default Landing;
