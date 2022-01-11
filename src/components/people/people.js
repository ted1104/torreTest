import React from "react";
import { Profile, Buttons } from "..";
import classe from "./people.module.css";

const otherPeople = () => {
  return (
    <div className={classe.container_people}>
      <div className={classe.people_profile}>
        <div>
          <Profile small />
        </div>
        <div>
          <div>
            <span>Kyan Yu</span>
            <span>Web Developer</span>
          </div>
        </div>
      </div>

      <div className={classe.action}>
        <Buttons />
      </div>
    </div>
  );
};

export { otherPeople };
