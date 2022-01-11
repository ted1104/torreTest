import React from "react";

// Component importation
import classe from "./user_profile.module.css";
import { Header, Profile, Skill } from "..";

const userProfile = ({ skills }) => {
  return (
    <div>
      <Header />
      <div className={classe.main}>
        <div className={classe.user_profile}>
          <div>
            <Profile />
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
    </div>
  );
};

export { userProfile };
