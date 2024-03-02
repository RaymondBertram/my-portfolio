import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import { textVariants } from "@/utils/variants";
import { sunriseUrl } from "@/utils/styles";

import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Raymond Bertram</motion.h2>
          <motion.h1 variants={textVariants}>
            Junior Full Stack Software Engineer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>See something</motion.button>
            <motion.button variants={textVariants}>Do something</motion.button>
          </motion.div>
          <motion.img
            src={"/scroll.png"}
            width={50}
            height={50}
            alt={"Ray"}
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <div className="imageContainer">
        {/* <Image src={"/Ray.png"} width={700} height={700} alt={"Ray"} /> */}
      </div>
    </div>
  );
}
