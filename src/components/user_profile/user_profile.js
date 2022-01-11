import React from "react";

// Component importation
import classe from "./user_profile.module.css";
import animation from "../../utilities/css/animation.module.css";
import { Header, Profile, Skill } from "..";
import icons from "../../constants/icons";
import images from "../../constants/images";

const userProfile = ({ skills }) => {
  return (
    <div>
      <Header />
      <div className={classe.main}>
        <div className={classe.user_profile}>
          <div>
            <Profile img={images.profile_01} />
          </div>

          {/* name and position */}
          <div>
            <span>Teddy Nkubonage Walter</span>
            <span>Full Stack Web Developer</span>
          </div>

          {/* skuill details */}
        </div>
        <div className={classe.user_skills}>
          <span className={classe.big_title}>Skills and interests :</span>
          <div className={classe.container_skills}>
            {skills.map((item, index) => (
              <Skill item={item} key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className={classe.chevron}>
        <img
          src={icons.chevron}
          alt="_down"
          className={animation.animationInfinity}
        />
      </div>
    </div>
  );
};

export { userProfile };
