import React from "react";
import icons from "../../constants/icons";
import classe from "./button.module.css";

const button = (props) => {
  return (
    <div onClick={props.onClick} className={classe.btn}>
      <img src={icons.eye} alt="_see_profile" />
    </div>
  );
};

export { button };
