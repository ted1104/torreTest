import React from "react";
import classe from "./skills.module.css";
import { Header, Experiences } from "..";
import icons from "../../constants/icons";

const skillDetails = () => {
  return (
    <div className={classe.container_details_main}>
      <Header isDetails />
      <div className={classe.sous_container_main}>
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

        {/* related experiences */}
        <div className={classe.related_experiences}>
          <span>Teddy 's related experiences</span>

          <div className={classe.related_experiences_list}>
            <Experiences />
            <Experiences />
          </div>
        </div>
      </div>
    </div>
  );
};

export { skillDetails };
