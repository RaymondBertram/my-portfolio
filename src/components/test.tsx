import React, { useState } from "react";
import { motion } from "framer-motion";

export const MyComponent = () => {
  const [open, setOpen] = useState<boolean>(false);

  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      x: 100,
      transition: { delay: i * 0.3},
    }),
    hidden: { opacity: 0 },
  };

  const items = ["item 1", "item 2", "item 3", "item 4", "item 5"];

  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, index) => (
          <motion.li key={item} variants={variants} custom={index}>{item}</motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
