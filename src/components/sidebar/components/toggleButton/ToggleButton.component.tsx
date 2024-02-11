import React from "react";
import { ToggleButtonProps } from "@/components/interfaces/interfaces";
import { motion } from "framer-motion";

import "./toggleButton.component.scss";

export const ToggleButton = ({ setOpen }: ToggleButtonProps) => {
  return (
    <button className="toggleButton" onClick={() => setOpen((prev) => !prev)}>
      <svg
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <motion.path
          d="M4 6 L 20 6"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            closed: { d: "M4 6 L 20 6" },
            open: { d: "M 3 16.5 L 17 2.5"},
          }}
        />
        <motion.path
          d="M4 12 L 20 12"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            closed: { d: "M4 12 L 20 12", opacity: 1},
            open: { opacity: 0},
          }}
        />
        <motion.path
          d="M4 18 L 20 18"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            closed: { d: "M4 18 L 20 18" },
            open: { d: "M 3 2.5 L 17 16.5"},
          }}
        />
      </svg>
    </button>
  );
};
