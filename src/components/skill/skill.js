import React from "react";
import classe from "./skill.module.css";
import { Tag } from "..";

const skill = ({ item }) => {
  const { list, description, icon } = item;
  return (
    <div className={classe.container_main_skill}>
      <div>
        <div className={classe.skill_title}>
          <div>
            <img src={icon} alt="icon_skill" />
          </div>
          <span>{description}</span>
        </div>
        <div className={classe.container_skill}>
          {list.map((item, index) => (
            <Tag name={list[index]} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { skill };
