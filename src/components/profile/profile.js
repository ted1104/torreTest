import React from "react";
import classe from "./profile.module.css";

const profile = ({ small, img }) => {
  return !small ? (
    <div>
      <div className={classe.profile_image}>
        <img src={img} alt="profile_user" />
      </div>
    </div>
  ) : (
    <div>
      <div className={classe.profile_small}>
        <img src={img} alt="profile_user" />
      </div>
    </div>
  );
};

export { profile };
