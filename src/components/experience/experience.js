import React from "react";
import classe from "./experience.module.css";

const experiences = () => {
  return (
    <div className={classe.experience_container}>
      <span>Founding Member of Tech Lead</span>
      <span>The Executive Company</span>
      <span>Feb 2015 - Dec 2017</span>
    </div>
  );
};

export { experiences };
