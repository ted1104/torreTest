import React from "react";
import classe from "./profile.module.css";
import images from "../../constants/images";

const profile = ({ small }) => {
  return !small ? (
    <div>
      <div className={classe.profile_image}>
        <img src={images.profile_01} alt="profile_user" />
      </div>
    </div>
  ) : (
    <div>
      <div className={classe.profile_small}>
        <img src={images.profile_01} alt="profile_user" />
      </div>
    </div>
  );
};

export { profile };
