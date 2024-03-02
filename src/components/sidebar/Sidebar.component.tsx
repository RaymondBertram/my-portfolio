import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToggleButton, Links } from "./components";
import { sidebarVariants } from "@/utils/variants";

import "./sidebar.scss";

export const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="background-circle" variants={sidebarVariants}>
        <Links/>
      </motion.div>
      <ToggleButton setOpen={setOpen}/>
    </motion.div>
  );
};