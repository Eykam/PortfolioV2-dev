import { IconButton, Typography } from "@mui/material";
import { ListSocials } from "../Store";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="w-full h-[5%] flex justify-between align-middle text-neutral-400">
      <Typography className="self-center p-2">© 2023 Eyad Kamil</Typography>

      <div className="flex justify-between align-middle">
        {Object.keys(ListSocials).map((social, index) => {
          return (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.25,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <IconButton
                onClick={() => {
                  window.open(ListSocials[social].link);
                }}
                aria-label={"link to " + social}
                key={index}
              >
                {ListSocials[social].icon}
              </IconButton>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
