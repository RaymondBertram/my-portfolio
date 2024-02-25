import React from "react";
import { style4 } from "@/utils/styles";

import "./parallax.scss";

interface ParallaxProps {
  type: string;
  backgroundUrl?: string;
};

export const Parallax = ({ type }: ParallaxProps) => {
  return (
    <div className="parallax" style={style4}>
      <h1>{type}</h1>
      {/* <div className="mountains"></div> */}
    </div>
  );
};
