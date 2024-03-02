import React from "react";
import Image from 'next/image';

import "./parallax.scss";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ParallaxProps {
  isColumnOne: boolean;
  type: string;
  backgroundUrl: string | StaticImport;
  text1?: string;
  text2?: string;
};

export const Parallax = ({ type, text1, text2, backgroundUrl, isColumnOne}: ParallaxProps) => {
  return (
    <div className="parallax">
      <div className="header">
        <h1>{type}</h1>
      </div>
      {isColumnOne ? 
        <div className="wrapper">
          <div className="column">
            <p>{text1}</p>
            <p>{text2}</p>
          </div>
          <div className="column">
            <Image src={backgroundUrl} width={500} height={300} alt={"Ray"} />
          </div>
        </div>
        :
        <div className="wrapper">
          <div className="wrapper">
            <div className="column">
              <Image src={backgroundUrl} width={500} height={300} alt={"Ray"} />
            </div>
            <div className="column">
              <p>{text1}</p>
              <p>{text2}</p>
            </div>
          </div>
        </div>
      }
    </div>
  );
};
