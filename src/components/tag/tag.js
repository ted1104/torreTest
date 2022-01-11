import React from "react";
import classe from "./tag.module.css";

const tag = ({ name }) => {
  return (
    <div
      className={classe.container_tag}
      onClick={() => console.log("cliquer")}
    >
      <span>{name}</span>
    </div>
  );
};

export { tag };
