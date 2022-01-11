import React from "react";
import classe from "./skills.module.css";
import { Header } from "..";
import icons from "../../constants/icons";

const skillDetails = () => {
  return (
    <div className={classe.container_details_main}>
      <Header isDetails />
      <div className={classe.container_details}>
        <div>
          <span>Proficient :</span>
          <div>
            <img src={icons.monitor} alt="icon_" />{" "}
            <span>Master / Influencer</span>
          </div>
        </div>
        <div>
          <span>Recommandation :</span>
          <div>
            <span>7</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { skillDetails };
