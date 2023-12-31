import { motion } from "framer-motion";
import React from "react";

const Section = ({ children }: React.PropsWithChildren) => {
  return (
    <motion.section
      className="h-[100vh] w-[100vw] p-2 flex flex-col justify-evenly"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.3,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export default Section;
