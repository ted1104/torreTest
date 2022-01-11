import React from "react";
import classe from "./experience.module.css";

const experiences = ({ item }) => {
  const { title, company, duration } = item;
  return (
    <div className={classe.experience_container}>
      <span>{title}</span>
      <span>{company}</span>
      <span>{duration}</span>
    </div>
  );
};

export { experiences };
