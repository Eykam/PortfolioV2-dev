import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { sections } from "../Pages/Home/Components/Sections";
import { ListSocials } from "../Store";
import { IconButton } from "@mui/material";
import useScrollStore from "../Store";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const { setSection } = useScrollStore((state) => ({
    setSection: state.setSection,
  }));

  const navigate = useNavigate();

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("clicking");
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className="w-full h-[5%] align-middle absolute top-0 left-0 flex justify-between"
      style={{ zIndex: 1001 }}
    >
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          ".MuiMenuItem-root": {
            ":hover": {
              backgroundColor: "rgba(150, 150, 150, 0.8)",
            },
            fontWeight: "bolder",
          },
          ".MuiList-root": {
            backgroundColor: "rgba(50, 50, 50, .95)",
            color: "rgb(200,200,200)",
          },
          ".MuiMenu-paper": {
            backgroundColor: "transparent",
          },
          ".MuiMenu-root": {
            backgroundColor: "transparent",
          },
        }}
      >
        {Object.keys(sections).map((section, index) => {
          return (
            <MenuItem
              key={index}
              onClick={() => {
                // setSection(index);

                window.location.pathname.includes("/projects/")
                  ? navigate("/" + section, { preventScrollReset: true })
                  : setSection(index);

                handleClose();
              }}
            >
              {sections[section].name}
            </MenuItem>
          );
        })}

        <MenuItem
          onClick={() => {
            window.open(ListSocials["resume"].link);
          }}
        >
          Resume{" "}
        </MenuItem>
      </Menu>

      <IconButton onClick={handleClick} aria-label="navigation menu">
        <MenuIcon className="text-zinc-400" />
      </IconButton>

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

export default Header;
