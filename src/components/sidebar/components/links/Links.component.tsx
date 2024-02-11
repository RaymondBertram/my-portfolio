import React from "react";

import "./links.component.scss";

export const Links = () => {

  const items = ["Home", "About", "Projects", "Testemonials", "Contact"];

  return (
    <div className="links">{items.map(item => (
      <a href={`#${item}`} key={item}>{item}</a>
    ))}</div>
    );
};
