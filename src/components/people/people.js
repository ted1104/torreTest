import React from "react";
import { Profile, Buttons } from "..";
import classe from "./people.module.css";
import icons from "../../constants/icons";

const otherPeople = ({ item }) => {
  const { pic, name, position } = item;
  return (
    <div className={classe.container_people}>
      <div className={classe.people_profile}>
        <div>
          <Profile small img={pic} />
        </div>
        <div>
          <div>
            <div className={classe.name_mark}>
              <span>{name}</span>
              <img src={icons.check} alt="check_mark" />
            </div>

            <span>{position}</span>
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
