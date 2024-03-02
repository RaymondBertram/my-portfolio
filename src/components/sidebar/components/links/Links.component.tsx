import React from "react";
import { motion } from "framer-motion";
import { linkVariants, itemVariants } from "@/utils/variants";

import "./links.component.scss";

export const Links = () => {

  const items = ["Home", "About", "Projects", "Testemonials", "Contact"];

  return (
    <motion.div className="links" variants={linkVariants}>{items.map(item => (
      <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95}}>{item}</motion.a>
    ))}</motion.div>
    );
};
