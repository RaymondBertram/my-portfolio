import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sidebar } from "../sidebar/Sidebar.component";

import "./navbar.component.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Raymond Bertram
        </motion.span>
        <div className="socials"></div>
        <a href="#">
          <Image
            className="logo"
            src="/LinkedIn.png"
            alt="linkedin"
            width={38}
            height={28}
          />
        </a>
      </div>
    </div>
  );
};
