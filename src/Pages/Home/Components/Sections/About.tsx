import { Chip } from "@mui/material";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { SKILLS, INTERESTS } from "../../../../Store";

const Description = () => {
  return (
    <div>
      <span className="font-semibold text-sm md:text-xl lg:text-xl text-neutral-400">
        I love learning concepts from first principles – creating sturdy
        infrastructure and architecture that not only gets the job done but sets
        the stage for future growth. My passion lies in technology and its
        ability to solve complex problems, and I love working alongside
        like-minded individuals who share the same enthusiasm.
        <br />
        <br />
        Most importantly, I like to build cool things! I'm always working on new
        projects but some of my other hobbies include skateboarding and music.
      </span>
    </div>
  );
};

const Skills = () => {
  const MAX = window.innerWidth < 700 ? 7 : SKILLS.length;

  return (
    <div>
      <span className="self-start font-bold text-lg md:text-xl text-neutral-400 pl-1">
        Skills:
      </span>

      <br />

      {SKILLS.filter((_, index) => index < MAX).map((skill, index) => (
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
          whileHover={
            window.innerWidth < 700
              ? {}
              : {
                  scale: 1.25,
                  transition: {
                    duration: 0.5,
                  },
                }
          }
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
  );
};

const Interests = () => {
  const MAX = useMemo(
    () => (window.innerWidth < 600 ? 6 : INTERESTS.length),
    []
  );

  return (
    <div>
      <span className="self-start font-bold text-lg md:text-xl text-neutral-400 pl-1">
        Interests:
      </span>

      <br />

      {INTERESTS.filter((_, index) => index < MAX).map((interest, index) => (
        <motion.div
          key={index}
          className="inline-block cursor-pointer"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.1 * index,
            },
          }}
          whileHover={
            window.innerWidth < 700
              ? {}
              : {
                  scale: 1.25,
                  transition: {
                    duration: 0.5,
                  },
                }
          }
        >
          <Chip
            label={interest}
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
  );
};

const About = () => {
  return (
    <div className="h-full w-full flex justify-center align-middle">
      <div className="h-full w-4/5 md:w-3/4 lg:w-1/2 flex flex-col justify-start md:justify-center items-middle">
        <span className="self-start font-bold text-3xl md:text-4xl text-neutral-300 pl-4 mt-10">
          About Me
        </span>

        {window.innerWidth < 600 ? (
          <></>
        ) : (
          <>
            <br />
            <br />
          </>
        )}

        <div className=" bg-neutral-900 bg-opacity-60 rounded-xl p-[5%] flex flex-col justify-between">
          <Description />

          <br />

          <Skills />
          <Interests />
        </div>
      </div>
    </div>
  );
};

export default About;
